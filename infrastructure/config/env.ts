const requiredEnvVars = [
  'NEXT_PUBLIC_API_BASE_URL',
  'NEXT_PUBLIC_KAKAO_LOGIN_PATH',
] as const;

function validateEnv(): void {
  const missing = requiredEnvVars.filter(
    (key) => !process.env[key]
  );

  if (missing.length > 0) {
    throw new Error(
      `필수 환경 변수가 누락되었습니다: ${missing.join(', ')}`
    );
  }
}

validateEnv();

export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  kakaoLoginPath: process.env.NEXT_PUBLIC_KAKAO_LOGIN_PATH as string,
} as const;
