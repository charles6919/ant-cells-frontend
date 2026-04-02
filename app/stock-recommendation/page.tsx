'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useMarketAnalysis } from '@/features/stock-recommendation/application/hooks/useMarketAnalysis';
import { QaPair } from '@/features/stock-recommendation/domain/state/marketAnalysisState';

const s = {
  page: 'min-h-screen bg-zinc-50 dark:bg-[#07070f] pt-10 pb-10',
  container: 'mx-auto max-w-2xl px-4 sm:px-6',
  header: 'mb-8',
  title: 'text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50',
  titleBadge: 'ml-2 text-sm font-normal text-indigo-500',
  subtitle: 'mt-1 text-sm text-zinc-500 dark:text-zinc-400',

  qaCard: 'rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.03]',
  qaQuestion: 'mb-3 text-sm font-medium text-zinc-800 dark:text-zinc-200',
  qaAnswer: 'whitespace-pre-line text-sm leading-relaxed text-zinc-700 dark:text-zinc-300',
  qaList: 'flex flex-col gap-4',

  inputCard: 'rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-white/[0.03]',
  textarea: 'w-full resize-none rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-white/5 dark:bg-white/[0.03] dark:text-zinc-50 dark:placeholder-zinc-500',
  buttonRow: 'mt-3 flex justify-end',
  submitButton: 'inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40',

  loadingDot: 'mt-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-400 dark:border-white/5 dark:bg-white/[0.03]',
  errorBox: 'mt-4 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10',
  errorText: 'text-sm text-red-600 dark:text-red-400',
  disclaimer: 'mt-2 text-xs text-zinc-400 dark:text-zinc-500',

  followUpLabel: 'mt-6 mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-500',
};

function QaItem({ qa }: { qa: QaPair }) {
  return (
    <div className={s.qaCard}>
      <p className={s.qaQuestion}>Q. {qa.question}</p>
      <p className={s.qaAnswer}>{qa.answer}</p>
      <p className={s.disclaimer}>※ 본 정보는 투자 권유가 아닌 정보 제공 목적입니다.</p>
    </div>
  );
}

export default function StockRecommendationPage() {
  const { authState } = useAuth();
  const router = useRouter();
  const { state, ask } = useMarketAnalysis();
  const [question, setQuestion] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (authState.status === 'UNAUTHENTICATED') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  useEffect(() => {
    if (state.status === 'SUCCESS' || state.status === 'ERROR') {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state]);

  if (authState.status !== 'AUTHENTICATED') {
    return null;
  }

  const history = state.status === 'IDLE' ? [] : state.history;
  const isLoading = state.status === 'LOADING';
  const hasHistory = history.length > 0;

  const handleSubmit = () => {
    const q = question.trim();
    if (q === '') return;
    setQuestion('');
    ask(q);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className={s.title}>
            주식 추천
            <span className={s.titleBadge}>AI 분석</span>
          </h1>
          <p className={s.subtitle}>
            방산주 관련 종목이나 투자 정보가 궁금하신가요? 질문을 입력하세요.
          </p>
        </div>

        {!hasHistory && (
          <div className={s.inputCard}>
            <textarea
              className={s.textarea}
              rows={4}
              placeholder="예) 현재 방산주 중에서 미사일 관련 종목은? 또는 방산 ETF 추천해줘."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <div className={s.buttonRow}>
              <button
                onClick={handleSubmit}
                disabled={question.trim() === '' || isLoading}
                className={s.submitButton}
              >
                {isLoading ? '분석 중...' : '질문 전송'}
              </button>
            </div>
          </div>
        )}

        {hasHistory && (
          <div className={s.qaList}>
            {history.map((qa, i) => (
              <QaItem key={i} qa={qa} />
            ))}
          </div>
        )}

        {isLoading && (
          <div className={s.loadingDot}>분석 중...</div>
        )}

        {state.status === 'ERROR' && (
          <div className={s.errorBox}>
            <p className={s.errorText}>{state.message}</p>
          </div>
        )}

        {hasHistory && !isLoading && (
          <>
            <p className={s.followUpLabel}>추가 질문</p>
            <div className={s.inputCard}>
              <textarea
                className={s.textarea}
                rows={2}
                placeholder="이어서 궁금한 점을 질문하세요."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <div className={s.buttonRow}>
                <button
                  onClick={handleSubmit}
                  disabled={question.trim() === '' || isLoading}
                  className={s.submitButton}
                >
                  질문 전송
                </button>
              </div>
            </div>
          </>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
