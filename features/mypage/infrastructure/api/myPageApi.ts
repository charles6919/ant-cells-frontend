import { httpClient } from '@/infrastructure/http/httpClient';

interface AuthMeResponse {
  is_registered: boolean;
  nickname: string | null;
  email: string | null;
}

interface ThemeListResponse {
  total: number;
  themes: { seq: number; theme: string; description: string }[];
}

interface MyInterestThemeResponse {
  theme_seqs: number[];
}

export const myPageApi = {
  getMe: () =>
    httpClient.get<AuthMeResponse>('/authentication/me'),

  getMyThemes: () =>
    httpClient.get<MyInterestThemeResponse>('/themes/me'),

  updateMyThemes: (themeSeqs: number[]) =>
    httpClient.put<MyInterestThemeResponse>('/themes/me', { theme_seqs: themeSeqs }),

  getAllThemes: () =>
    httpClient.get<ThemeListResponse>('/themes'),

  deleteAccount: () =>
    httpClient.delete('/account'),
};
