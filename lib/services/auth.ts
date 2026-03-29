import { api } from '../api';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  invitation_code?: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export const authService = {
  login: (data: LoginRequest) => api.post<AuthTokens>('/auth/login', data),
  register: (data: RegisterRequest) => api.post<AuthTokens>('/auth/register', data),
  refresh: (refresh_token: string) => api.post<AuthTokens>('/auth/refresh', { refresh_token }),
  logout: () => api.post('/auth/logout'),
};
