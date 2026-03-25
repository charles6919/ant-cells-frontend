'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import { accountApi } from '../../infrastructure/api/accountApi';

export function useSignup() {
  const authState = useAtomValue(authAtom);
  const router = useRouter();

  const user = authState.status === 'TEMPORARY_AUTH' ? authState.user : null;

  const [nickname, setNickname] = useState(user?.nickname ?? '');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!user) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await accountApi.signup({ nickname, email: user.email });
      router.push('/');
    } catch {
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email: user?.email ?? '',
    nickname,
    setNickname,
    error,
    isSubmitting,
    submit,
  };
}
