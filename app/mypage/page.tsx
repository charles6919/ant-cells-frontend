'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useMyPage } from '@/features/mypage/application/hooks/useMyPage';
import MyPageContent from '@/features/mypage/ui/components/MyPageContent';
import { myPageStyles as s } from '@/features/mypage/ui/myPageStyles';

export default function MyPagePage() {
  const { authState } = useAuth();
  const { state, reload } = useMyPage();
  const router = useRouter();

  useEffect(() => {
    if (authState.status === 'UNAUTHENTICATED') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  if (authState.status !== 'AUTHENTICATED') return null;

  return (
    <div className={s.page}>
      <div className={s.container}>
        {state.status === 'LOADING' && (
          <div className={s.loading}>불러오는 중...</div>
        )}
        {state.status === 'ERROR' && (
          <div className={s.errorBox}>{state.message}</div>
        )}
        {state.status === 'SUCCESS' && (
          <MyPageContent user={state.user} onReload={reload} />
        )}
      </div>
    </div>
  );
}
