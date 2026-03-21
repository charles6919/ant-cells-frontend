'use client';

import { Suspense } from 'react';
import { useAuthCallback } from '@/features/auth/application/hooks/useAuthCallback';

function AuthCallbackContent() {
  useAuthCallback();
  return null;
}

export default function AuthCallbackPage() {
  return (
    <Suspense>
      <AuthCallbackContent />
    </Suspense>
  );
}
