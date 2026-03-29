import { api } from '../api';

export interface UsageLog {
  id: string;
  date: string;
  model: string;
  tokens: number;
  cost: number;
  type: string;
}

export interface UsageStats {
  total_tokens: number;
  total_cost: number;
  top_model: string;
}

export interface DashboardStats {
  today_tokens: number;
  today_cost: number;
  month_tokens: number;
  month_cost: number;
}

export interface TrendPoint {
  date: string;
  tokens: number;
}

export const usageService = {
  list: (params?: { model?: string; page?: number; page_size?: number }) => {
    const query = new URLSearchParams();
    if (params?.model && params.model !== '全部') query.set('model', params.model);
    if (params?.page) query.set('page', String(params.page));
    if (params?.page_size) query.set('page_size', String(params.page_size));
    const qs = query.toString();
    return api.get<UsageLog[]>(`/usage${qs ? `?${qs}` : ''}`);
  },
  stats: () => api.get<UsageStats>('/usage/stats'),
  dashboardStats: () => api.get<DashboardStats>('/usage/dashboard/stats'),
  dashboardTrend: () => api.get<TrendPoint[]>('/usage/dashboard/trend'),
};
