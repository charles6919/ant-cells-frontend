const REQUIRED_ENV_KEYS = [
  'NEXT_PUBLIC_API_BASE_URL',
] as const;

type RequiredEnvKey = typeof REQUIRED_ENV_KEYS[number];

function loadEnv(): Record<RequiredEnvKey, string> {
  const missing: string[] = [];

  for (const key of REQUIRED_ENV_KEYS) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `[env] 필수 환경변수가 누락되었습니다: ${missing.join(', ')}\n` +
      `.env.local 파일을 확인하십시오.`
    );
  }

  return {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL!,
  };
}

export const env = loadEnv();
