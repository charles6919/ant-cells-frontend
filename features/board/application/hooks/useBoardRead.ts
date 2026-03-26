'use client';

import { useEffect, useState } from 'react';
import { boardApi } from '../../infrastructure/api/boardApi';
import { BoardReadState } from '../../domain/state/boardReadState';
import { HttpError } from '@/infrastructure/http/httpClient';

export function useBoardRead(id: string) {
  const [state, setState] = useState<BoardReadState>({ status: 'LOADING' });

  useEffect(() => {
    setState({ status: 'LOADING' });
    boardApi
      .getById(id)
      .then((data) => {
        if (!data) {
          setState({ status: 'NOT_FOUND' });
        } else {
          setState({ status: 'SUCCESS', data });
        }
      })
      .catch((err) => {
        if (err instanceof HttpError && err.status === 404) {
          setState({ status: 'NOT_FOUND' });
        } else {
          setState({ status: 'ERROR', message: '게시물을 불러오지 못했습니다.' });
        }
      });
  }, [id]);

  return { state };
}
