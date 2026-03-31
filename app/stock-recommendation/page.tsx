'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useMarketAnalysis } from '@/features/stock-recommendation/application/hooks/useMarketAnalysis';

export default function StockRecommendationPage() {
  const { authState } = useAuth();
  const router = useRouter();
  const { state, ask } = useMarketAnalysis();
  const [question, setQuestion] = useState('');

  useEffect(() => {
    if (authState.status === 'UNAUTHENTICATED') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  if (authState.status !== 'AUTHENTICATED') {
    return null;
  }

  const handleSubmit = () => {
    if (question.trim() === '') return;
    ask(question.trim());
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#07070f] pt-10">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            주식 추천
            <span className="ml-2 text-sm font-normal text-indigo-500">AI 분석</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            방산주 관련 종목이나 투자 정보가 궁금하신가요? 질문을 입력하세요.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <textarea
            className="w-full resize-none rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-white/5 dark:bg-white/[0.03] dark:text-zinc-50 dark:placeholder-zinc-500"
            rows={4}
            placeholder="예) 현재 방산주 중에서 미사일 관련 종목은? 또는 방산 ETF 추천해줘."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={state.status === 'LOADING'}
          />
          <div className="mt-3 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={question.trim() === '' || state.status === 'LOADING'}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {state.status === 'LOADING' ? '분석 중...' : '질문 전송'}
            </button>
          </div>
        </div>

        {state.status === 'SUCCESS' && (
          <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-indigo-500">AI 답변</p>
            <p className="mb-4 text-xs text-zinc-400 dark:text-zinc-500">Q. {state.question}</p>
            <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {state.answer}
            </p>
            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
              ※ 본 정보는 투자 권유가 아닌 정보 제공 목적입니다.
            </p>
          </div>
        )}

        {state.status === 'ERROR' && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10">
            <p className="text-sm text-red-600 dark:text-red-400">{state.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
