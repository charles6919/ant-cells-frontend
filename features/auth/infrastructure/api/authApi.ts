import { env } from '@/infrastructure/config/env';

export const authApi = {
  getKakaoOAuthUrl: (): string =>
    `${env.apiBaseUrl}${env.kakaoLoginPath}`,
};
