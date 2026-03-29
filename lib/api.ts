import { getToken, getRefreshToken, setTokens, removeTokens } from './auth';

const BASE_URL = '/api/v1';

export class ApiError extends Error {
  code: number;
  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

let refreshPromise: Promise<boolean> | null = null;

async function refreshAccessToken(): Promise<boolean> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return false;

  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
    if (!res.ok) return false;
    const json: ApiResponse = await res.json();
    if (json.code === 0 && json.data?.access_token) {
      setTokens(json.data.access_token, json.data.refresh_token || refreshToken);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

function getRefreshPromise(): Promise<boolean> {
  if (!refreshPromise) {
    refreshPromise = refreshAccessToken().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

async function parseJson<T>(res: Response): Promise<ApiResponse<T>> {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new ApiError(res.status, text || `HTTP ${res.status}`);
  }
}

async function request<T = any>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers });

  // Token expired — try refresh once
  if (res.status === 401 && token) {
    const ok = await getRefreshPromise();

    if (ok) {
      headers['Authorization'] = `Bearer ${getToken()}`;
      const retry = await fetch(`${BASE_URL}${path}`, { ...options, headers });
      const retryJson = await parseJson<T>(retry);
      if (retryJson.code !== 0) throw new ApiError(retryJson.code, retryJson.message);
      return retryJson.data;
    }

    removeTokens();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    throw new ApiError(401, '登录已过期，请重新登录');
  }

  const json = await parseJson<T>(res);

  if (json.code !== 0) {
    throw new ApiError(json.code, json.message);
  }

  return json.data;
}

export const api = {
  get: <T = any>(path: string) => request<T>(path),
  post: <T = any>(path: string, body?: any) =>
    request<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put: <T = any>(path: string, body?: any) =>
    request<T>(path, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  delete: <T = any>(path: string) => request<T>(path, { method: 'DELETE' }),
};
