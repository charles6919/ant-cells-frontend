'use client';

import { useAuth } from '@/features/auth/application/hooks/useAuth';
import KakaoLoginButton from '@/features/auth/ui/components/KakaoLoginButton';
import { loginPageStyles } from '@/features/auth/ui/loginPageStyles';

export default function LoginPage() {
  const { dispatch } = useAuth();

  return (
    <div className={loginPageStyles.container}>
      <div className={loginPageStyles.card}>
        <h1 className={loginPageStyles.title}>로그인</h1>
        <div className={loginPageStyles.buttonList}>
          <KakaoLoginButton onClick={() => dispatch({ type: 'LOGIN_KAKAO' })} />
        </div>
      </div>
    </div>
  );
}
