'use client';

import { useAuth } from '@/features/auth/application/hooks/useAuth';
import KakaoLoginButton from '@/features/auth/ui/components/KakaoLoginButton';
import { loginPageStyles as s } from '@/features/auth/ui/loginPageStyles';

export default function LoginPage() {
  const { dispatch } = useAuth();

  return (
    <div className={s.page}>
      <div className={s.header}>
        <div className={s.logoMark}>AC</div>
        <h1 className={s.title}>Ant Cells</h1>
        <p className={s.subtitle}>계속하려면 로그인하세요</p>
      </div>
      <div className={s.card}>
        <div className={s.buttonList}>
          <KakaoLoginButton onClick={() => dispatch({ type: 'LOGIN_KAKAO' })} />
        </div>
      </div>
      <p className={s.footer}>
        로그인하면 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다.
      </p>
    </div>
  );
}
