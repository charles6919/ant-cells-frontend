'use client';

import { useState } from 'react';
import { marketAnalysisApi } from '../../infrastructure/api/marketAnalysisApi';
import { MarketAnalysisState } from '../../domain/state/marketAnalysisState';

export function useMarketAnalysis() {
  const [state, setState] = useState<MarketAnalysisState>({ status: 'IDLE' });

  const ask = async (question: string) => {
    setState({ status: 'LOADING' });
    try {
      const result = await marketAnalysisApi.ask({ question });
      if (!result) {
        setState({ status: 'ERROR', message: '응답을 받지 못했습니다.' });
        return;
      }
      setState({ status: 'SUCCESS', question: result.question, answer: result.answer });
    } catch {
      setState({ status: 'ERROR', message: '질문 처리 중 오류가 발생했습니다.' });
    }
  };

  return { state, ask };
}
