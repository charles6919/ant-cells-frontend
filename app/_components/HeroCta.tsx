'use client';

import Link from 'next/link';
import { useAuth } from '@/features/auth/application/hooks/useAuth';

export function HeroButtons() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <Link
        href="/board"
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-colors hover:bg-indigo-700 sm:w-auto"
      >
        투자 토론 시작하기
      </Link>
      {!isAuthenticated && (
        <Link
          href="/login"
          className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/10 px-6 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 sm:w-auto"
        >
          로그인
        </Link>
      )}
    </div>
  );
}

export function CtaSection() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return null;

  return (
    <section className="bg-indigo-600 px-4 py-16 text-center dark:bg-indigo-600/90">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold text-white">지금 바로 시작하세요</h2>
        <p className="mt-2 text-sm text-indigo-200">무료로 가입하고 투자 정보를 확인하세요.</p>
        <Link
          href="/login"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
        >
          무료로 시작하기
        </Link>
      </div>
    </section>
  );
}
