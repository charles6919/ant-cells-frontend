'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { boardApi } from '@/features/board/infrastructure/api/boardApi';
import { useBoardRead } from '@/features/board/application/hooks/useBoardRead';
import { BoardReadView } from '@/features/board/ui/components/BoardReadView';
import { boardPageStyles as s } from '@/features/board/ui/boardPageStyles';

interface Props {
  params: Promise<{ id: string }>;
}

export default function BoardReadPage({ params }: Props) {
  const { id } = use(params);
  const router = useRouter();
  const { state } = useBoardRead(id);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className={s.title}>
            게시물 읽기
            <span className={s.titleSub}>Post</span>
          </h1>
        </div>
        {state.status === 'LOADING' && (
          <div className={s.statusBox}>
            <span className={s.statusIcon}>⏳</span>
            <span>불러오는 중...</span>
          </div>
        )}
        {state.status === 'NOT_FOUND' && (
          <div className={s.statusBox}>
            <span className={s.statusIcon}>🔍</span>
            <span>존재하지 않는 게시물입니다.</span>
          </div>
        )}
        {state.status === 'ERROR' && (
          <div className={s.errorBox}>
            <span>{state.message}</span>
          </div>
        )}
        {state.status === 'SUCCESS' && (
          <BoardReadView
            data={state.data}
            onList={() => router.push('/board')}
            onEdit={() => router.push(`/board/edit/${id}`)}
            onDelete={() => boardApi.deleteById(id).then(() => router.push('/board'))}
          />
        )}
      </div>
    </div>
  );
}
