'use client';

import { useState, useEffect } from 'react';
import { MyPageState } from '../../domain/state/myPageState';
import { Theme } from '../../domain/model/interestStock';
import { myPageApi } from '../../infrastructure/api/myPageApi';

export function useMyPage() {
  const [state, setState] = useState<MyPageState>({ status: 'LOADING' });

  const load = async () => {
    setState({ status: 'LOADING' });
    try {
      const [me, myThemes, allThemes] = await Promise.all([
        myPageApi.getMe(),
        myPageApi.getMyThemes(),
        myPageApi.getAllThemes(),
      ]);

      if (!me || !me.nickname || !me.email) {
        setState({ status: 'ERROR', message: '사용자 정보를 불러올 수 없습니다.' });
        return;
      }

      const themeSeqs = new Set(myThemes?.theme_seqs ?? []);
      const interestThemes: Theme[] = (allThemes?.themes ?? []).filter((t) => themeSeqs.has(t.seq));

      setState({
        status: 'SUCCESS',
        user: {
          email: me.email,
          nickname: me.nickname,
          interestThemes,
        },
      });
    } catch {
      setState({ status: 'ERROR', message: '사용자 정보를 불러오는 데 실패했습니다.' });
    }
  };

  useEffect(() => { load(); }, []);

  return { state, reload: load };
}
