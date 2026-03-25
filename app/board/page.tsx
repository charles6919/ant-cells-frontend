'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useBoardList } from '@/features/board/application/hooks/useBoardList';
import { BoardList } from '@/features/board/ui/components/BoardList';
import { boardPageStyles as s } from '@/features/board/ui/boardPageStyles';

export default function BoardPage() {
  const { authState } = useAuth();
  const { state, page, setPage } = useBoardList();
  const router = useRouter();

  useEffect(() => {
    if (authState.status === 'UNAUTHENTICATED') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className={s.title}>
            게시판
            <span className={s.titleSub}>Board</span>
          </h1>
          <button className={s.createButton} onClick={() => router.push('/board/create')}>
            + 글쓰기
          </button>
        </div>
        <BoardList state={state} page={page} onPageChange={setPage} />
      </div>
    </div>
  );
}
