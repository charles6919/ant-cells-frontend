'use client';

import { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useBoardEdit } from '@/features/board/application/hooks/useBoardEdit';
import { BoardEditForm } from '@/features/board/ui/components/BoardEditForm';
import { boardPageStyles as s } from '@/features/board/ui/boardPageStyles';

interface Props {
  params: Promise<{ id: string }>;
}

export default function BoardEditPage({ params }: Props) {
  const { id } = use(params);
  const router = useRouter();
  const { authState } = useAuth();
  const { state, title, setTitle, content, setContent, submit } = useBoardEdit(id);

  useEffect(() => {
    if (authState.status === 'UNAUTHENTICATED') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  useEffect(() => {
    if (state.status === 'SUCCESS') {
      router.replace(`/board/read/${id}`);
    }
  }, [state.status, id, router]);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className={s.title}>
            게시물 수정
            <span className={s.titleSub}>Edit Post</span>
          </h1>
        </div>
        <BoardEditForm
          title={title}
          content={content}
          isSubmitting={state.status === 'SUBMITTING'}
          errorMessage={state.status === 'ERROR' ? state.message : undefined}
          onTitleChange={setTitle}
          onContentChange={setContent}
          onSubmit={submit}
          onCancel={() => router.push(`/board/read/${id}`)}
        />
      </div>
    </div>
  );
}
