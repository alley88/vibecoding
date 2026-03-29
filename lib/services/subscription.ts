import { api } from '../api';

export interface Subscription {
  id: string;
  plan: string;
  status: string;
  start_date: string;
  end_date: string;
  balance: number;
}

export const subscriptionService = {
  list: () => api.get<Subscription[]>('/subscriptions'),
  create: (plan_id: string) => api.post<Subscription>('/subscriptions', { plan_id }),
  cancel: (id: string) => api.delete(`/subscriptions/${id}`),
};
