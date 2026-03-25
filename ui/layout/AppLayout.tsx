'use client';

import { useAuth } from '@/features/auth/application/hooks/useAuth';
import NavBar from './NavBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, dispatch } = useAuth();

  return (
    <>
      <NavBar
        isAuthenticated={isAuthenticated}
        onLogout={() => dispatch({ type: 'LOGOUT' })}
      />
      <main className="pt-14">{children}</main>
    </>
  );
}
