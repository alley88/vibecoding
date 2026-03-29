import { api } from '../api';

export interface RedeemResult {
  amount: number;
  message: string;
}

export interface RedeemHistory {
  id: string;
  code: string;
  amount: number;
  redeemed_at: string;
}

export const redeemService = {
  redeem: (code: string) => api.post<RedeemResult>('/redeem', { code }),
  history: () => api.get<RedeemHistory[]>('/redeem/history'),
};
