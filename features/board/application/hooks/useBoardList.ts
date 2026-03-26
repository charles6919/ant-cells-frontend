'use client';

import { useState, useEffect } from 'react';
import { boardApi } from '../../infrastructure/api/boardApi';
import { BoardListState } from '../../domain/state/boardListState';
import { Board } from '../../domain/model/board';
import { HttpError } from '@/infrastructure/http/httpClient';

const PAGE_SIZE = 10;

export function useBoardList() {
  const [state, setState] = useState<BoardListState>({ status: 'LOADING' });
  const [page, setPage] = useState(1);

  useEffect(() => {
    boardApi
      .getList(page, PAGE_SIZE)
      .then((result) => {
        if (!result || result.items.length === 0) {
          setState({ status: 'EMPTY', message: '등록된 게시물이 없습니다.' });
          return;
        }
        const boards: Board[] = result.items.map((item) => ({
          id: item.board_id,
          title: item.title,
          author: item.nickname,
          createdAt: item.created_at,
        }));
        setState({
          status: 'SUCCESS',
          boards,
          total: result.total ?? boards.length,
          page: result.page ?? page,
          size: result.size ?? PAGE_SIZE,
        });
      })
      .catch((error) => {
        if (error instanceof HttpError && error.status === 404) {
          setState({ status: 'EMPTY', message: '등록된 게시물이 없습니다.' });
        } else {
          setState({ status: 'ERROR', message: '게시물을 불러오는 데 실패했습니다.' });
        }
      });
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setState({ status: 'LOADING' });
    setPage(newPage);
  };

  return { state, page, setPage: handlePageChange };
}
