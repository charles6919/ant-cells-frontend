'use client';

import { useState } from 'react';
import { boardApi } from '../../infrastructure/api/boardApi';
import { BoardCreateState } from '../../domain/state/boardCreateState';

export function useBoardCreate() {
  const [state, setState] = useState<BoardCreateState>({ status: 'IDLE' });
  const [createdId, setCreatedId] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submit = async () => {
    if (!title.trim() || !content.trim()) return;
    setState({ status: 'SUBMITTING' });
    try {
      const result = await boardApi.create(title.trim(), content.trim());
      if (result?.board_id) {
        setCreatedId(result.board_id);
      }
      setState({ status: 'SUCCESS' });
    } catch {
      setState({ status: 'ERROR', message: '게시물 작성에 실패했습니다.' });
    }
  };

  return { state, createdId, title, setTitle, content, setContent, submit };
}
