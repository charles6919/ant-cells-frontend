'use client';

import { useEffect, useState } from 'react';
import { boardApi } from '../../infrastructure/api/boardApi';
import { BoardEditState } from '../../domain/state/boardEditState';

export function useBoardEdit(id: string) {
  const [state, setState] = useState<BoardEditState>({ status: 'IDLE' });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    boardApi.getById(id).then((data) => {
      if (data) {
        setTitle(data.title);
        setContent(data.content);
        setIsLoaded(true);
      }
    });
  }, [id]);

  const submit = async () => {
    if (!title.trim() || !content.trim()) return;
    setState({ status: 'SUBMITTING' });
    try {
      await boardApi.update(id, title.trim(), content.trim());
      setState({ status: 'SUCCESS' });
    } catch {
      setState({ status: 'ERROR', message: '게시물 수정에 실패했습니다.' });
    }
  };

  return { state, title, setTitle, content, setContent, isLoaded, submit };
}
