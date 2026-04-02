'use client';

import { useState, useEffect, useCallback } from 'react';
import { Theme } from '../../domain/model/stock';
import { stockApi } from '../../infrastructure/api/stockApi';

export function useThemeSelection() {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [selectedSeqs, setSelectedSeqs] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const data = await stockApi.getThemes();
        setThemes(data?.themes ?? []);
      } catch {
        setError('테마 목록을 불러오지 못했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchThemes();
  }, []);

  const toggle = useCallback((seq: number) => {
    setSelectedSeqs((prev) => {
      const next = new Set(prev);
      if (next.has(seq)) next.delete(seq);
      else next.add(seq);
      return next;
    });
  }, []);

  return {
    themes,
    selectedSeqs,
    toggle,
    selectedCount: selectedSeqs.size,
    getSelectedArray: () => Array.from(selectedSeqs),
    isLoading,
    error,
  };
}
