'use client';

import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import { acceptedTermsAtom } from '@/features/terms/application/atoms/acceptedTermsAtom';
import { useSignup } from '@/features/account/application/hooks/useSignup';
import SignupForm from '@/features/account/ui/components/SignupForm';
import { signupPageStyles } from '@/features/account/ui/signupPageStyles';

export default function SignupPage() {
  const authState = useAtomValue(authAtom);
  const acceptedTerms = useAtomValue(acceptedTermsAtom);
  const router = useRouter();
  const { email, nickname, setNickname, error, isSubmitting, submit } = useSignup();

  useEffect(() => {
    if (authState.status === 'LOADING') return;
    if (authState.status !== 'TEMPORARY_AUTH') {
      router.replace('/login');
      return;
    }
    if (acceptedTerms.length === 0) {
      router.replace('/terms');
    }
  }, [authState.status, acceptedTerms, router]);

  if (authState.status !== 'TEMPORARY_AUTH' || acceptedTerms.length === 0) {
    return null;
  }

  return (
    <div className={signupPageStyles.container}>
      <div className={signupPageStyles.card}>
        <h1 className={signupPageStyles.title}>회원가입</h1>
        <SignupForm
          email={email}
          nickname={nickname}
          onNicknameChange={setNickname}
          error={error}
          isSubmitting={isSubmitting}
          onSubmit={submit}
        />
      </div>
    </div>
  );
}
