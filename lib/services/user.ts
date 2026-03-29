import { api } from '../api';

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  plan: string;
  balance: number;
  subscription_balance: number;
  subscription_expiry: string;
  referral_code: string;
  referral_inviter: string;
  referral_earnings: number;
  referral_link: string;
}

export interface DashboardData {
  user: UserProfile;
  stats: {
    total_tokens: number;
    total_cost: number;
    api_keys_count: number;
  };
}

export const userService = {
  getProfile: () => api.get<UserProfile>('/user/profile'),
  getDashboard: () => api.get<DashboardData>('/user/dashboard'),
  updateProfile: (data: { username?: string; email?: string }) => api.put('/user', data),
  changePassword: (data: { old_password: string; new_password: string }) =>
    api.put('/user/password', data),
};
