import { api } from '../api';

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  created_at: string;
  last_used: string;
}

export interface AvailableGroup {
  id: string;
  name: string;
}

export const keysService = {
  list: () => api.get<ApiKey[]>('/keys'),
  create: (name: string) => api.post<ApiKey>('/keys', { name }),
  get: (id: string) => api.get<ApiKey>(`/keys/${id}`),
  update: (id: string, data: { name: string }) => api.put(`/keys/${id}`, data),
  delete: (id: string) => api.delete(`/keys/${id}`),
  availableGroups: () => api.get<AvailableGroup[]>('/groups/available'),
  groupRates: () => api.get('/groups/rates'),
};
