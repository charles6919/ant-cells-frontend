'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { authAtom } from '../atoms/authAtom';
import { authApi } from '../../infrastructure/api/authApi';

export function useAuthCallback() {
  const [, setAuthState] = useAtom(authAtom);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const temporaryToken = searchParams.get('temporary_token');

    if (!temporaryToken) {
      router.replace('/login');
      return;
    }

    setAuthState({ status: 'LOADING' });

    authApi
      .fetchMe(temporaryToken)
      .then(({ user, requiresTermsAgreement }) => {
        if (requiresTermsAgreement) {
          setAuthState({ status: 'TEMPORARY_AUTH', temporaryToken, user });
          router.replace('/terms');
        } else {
          setAuthState({ status: 'AUTHENTICATED', user });
          router.replace('/');
        }
      })
      .catch(() => {
        setAuthState({ status: 'UNAUTHENTICATED' });
        router.replace('/login');
      });
  }, [searchParams, setAuthState, router]);
}
