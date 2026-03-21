'use client';

import { useAtomValue } from 'jotai';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import { isTemporaryAuth } from '@/features/auth/application/selectors/authSelectors';

export default function TermsPage() {
  const authState = useAtomValue(authAtom);

  if (!isTemporaryAuth(authState)) {
    return null;
  }

  return (
    <div>
      <h1>약관 동의</h1>
    </div>
  );
}
