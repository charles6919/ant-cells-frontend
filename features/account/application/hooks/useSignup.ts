'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import { accountApi } from '../../infrastructure/api/accountApi';

type SignupStep = 'nickname' | 'themes';

export function useSignup() {
  const [authState, setAuthState] = useAtom(authAtom);
  const router = useRouter();

  const user = authState.status === 'TEMPORARY_AUTH' ? authState.user : null;

  const [step, setStep] = useState<SignupStep>('nickname');
  const [nickname, setNickname] = useState(user?.nickname ?? '');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToThemeStep = () => {
    setStep('themes');
  };

  const submit = async (interestThemeSeqs: number[] = []) => {
    if (!user) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await accountApi.signup({
        nickname,
        email: user.email,
        interest_theme_seqs: interestThemeSeqs.length > 0 ? interestThemeSeqs : undefined,
      });
      setAuthState({ status: 'AUTHENTICATED', user: { ...user, nickname } });
      router.push('/');
    } catch {
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    step,
    email: user?.email ?? '',
    nickname,
    setNickname,
    error,
    isSubmitting,
    goToThemeStep,
    submit,
  };
}
