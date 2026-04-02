'use client';

import { useState } from 'react';
import { marketAnalysisApi } from '../../infrastructure/api/marketAnalysisApi';
import { MarketAnalysisState, QaPair } from '../../domain/state/marketAnalysisState';

export function useMarketAnalysis() {
  const [state, setState] = useState<MarketAnalysisState>({ status: 'IDLE' });

  const getHistory = (): QaPair[] => {
    if (state.status === 'IDLE') return [];
    return state.history;
  };

  const ask = async (question: string) => {
    const prev = getHistory();
    setState({ status: 'LOADING', history: prev });
    try {
      const result = await marketAnalysisApi.ask({ question });
      if (!result) {
        setState({ status: 'ERROR', message: '응답을 받지 못했습니다.', history: prev });
        return;
      }
      const updated = [...prev, { question: result.question, answer: result.answer }];
      setState({ status: 'SUCCESS', history: updated });
    } catch {
      setState({ status: 'ERROR', message: '질문 처리 중 오류가 발생했습니다.', history: prev });
    }
  };

  return { state, ask };
}
