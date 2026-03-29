import { api } from '../api';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export interface PublicSettings {
  site_name: string;
  registration_enabled: boolean;
  invitation_required: boolean;
}

export interface Model {
  id: string;
  name: string;
  provider: string;
}

export const miscService = {
  announcements: () => api.get<Announcement[]>('/announcements'),
  publicSettings: () => api.get<PublicSettings>('/settings/public'),
  models: () => api.get<Model[]>('/models'),
};
