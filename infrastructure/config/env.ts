const requiredEnvValues = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  kakaoLoginPath: process.env.NEXT_PUBLIC_KAKAO_LOGIN_PATH,
} as const;

export const env = requiredEnvValues as {
  readonly apiBaseUrl: string;
  readonly kakaoLoginPath: string;
}
