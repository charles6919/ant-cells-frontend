'use client';

import { Provider } from 'jotai';
import { authStore } from '@/features/auth/application/atoms/authStore';

export default function JotaiProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={authStore}>{children}</Provider>;
}
