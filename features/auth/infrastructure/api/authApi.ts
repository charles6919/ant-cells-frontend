import { env } from '@/infrastructure/config/env';
import { AuthUser } from '../../domain/model/authUser';

export interface MeResponse {
  user: AuthUser;
  requiresTermsAgreement: boolean;
}

export const authApi = {
  getKakaoOAuthUrl: (): string =>
    `${env.apiBaseUrl}${env.kakaoLoginPath}`,

  fetchMe: async (token: string): Promise<MeResponse> => {
    const response = await fetch(`${env.apiBaseUrl}/authentication/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }
    return response.json();
  },
};
