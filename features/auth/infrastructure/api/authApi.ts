import { httpClient } from '@/infrastructure/http/httpClient';
import { env } from '@/infrastructure/config/env';

export interface MeResponse {
  is_registered: boolean;
  nickname: string;
  email: string;
}

export const authApi = {
  getKakaoOAuthUrl: (): string =>
    `${env.apiBaseUrl}${env.kakaoLoginPath}`,

  fetchMe: () =>
    httpClient.get<MeResponse>('/authentication/me'),
};
