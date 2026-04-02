'use client';

import { useState, useEffect, useCallback } from 'react';
import { Theme } from '../../domain/model/interestStock';
import { myPageApi } from '../../infrastructure/api/myPageApi';

export function useInterestThemeEditor(currentThemes: Theme[], onSaved: () => void) {
  const [allThemes, setAllThemes] = useState<Theme[]>([]);
  const [selectedSeqs, setSelectedSeqs] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSelectedSeqs(new Set(currentThemes.map((t) => t.seq)));
  }, [currentThemes]);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const data = await myPageApi.getAllThemes();
        setAllThemes(data?.themes ?? []);
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

  const save = async () => {
    setIsSaving(true);
    setError(null);
    try {
      await myPageApi.updateMyThemes(Array.from(selectedSeqs));
      onSaved();
    } catch {
      setError('관심 테마 저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  return {
    allThemes,
    selectedSeqs,
    toggle,
    selectedCount: selectedSeqs.size,
    isLoading,
    isSaving,
    error,
    save,
  };
}
