'use client';

import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import TermList from '@/features/terms/ui/components/TermList';
import { termsPageStyles as s } from '@/features/terms/ui/termsPageStyles';
import { useTermConsent } from '@/features/terms/application/hooks/useTermConsent';

export default function TermsPage() {
  const authState = useAtomValue(authAtom);
  const router = useRouter();
  const { areAllRequiredChecked, acceptTerms } = useTermConsent(false);

  useEffect(() => {
    if (authState.status !== 'LOADING' && authState.status !== 'TEMPORARY_AUTH') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  if (authState.status !== 'TEMPORARY_AUTH') {
    return null;
  }

  return (
    <div className={s.page}>
      <div className={s.header}>
        <div className={s.logoMark}>AC</div>
        <h1 className={s.title}>서비스 이용약관</h1>
        <p className={s.subtitle}>계속하려면 약관에 동의하세요</p>
      </div>
      <div className={s.card}>
        <TermList showConditionalTerms={false} />
        <button
          disabled={!areAllRequiredChecked}
          className={areAllRequiredChecked ? s.submitButton : s.submitButtonDisabled}
          onClick={() => {
            acceptTerms();
            router.push('/account/signup');
          }}
        >
          동의하고 계속하기
        </button>
      </div>
    </div>
  );
}
