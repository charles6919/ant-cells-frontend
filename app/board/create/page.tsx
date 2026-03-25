'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useBoardCreate } from '@/features/board/application/hooks/useBoardCreate';
import { BoardCreateForm } from '@/features/board/ui/components/BoardCreateForm';
import { boardPageStyles as s } from '@/features/board/ui/boardPageStyles';

export default function BoardCreatePage() {
  const { authState } = useAuth();
  const { state, title, setTitle, content, setContent, submit } = useBoardCreate();
  const router = useRouter();

  useEffect(() => {
    if (authState.status === 'UNAUTHENTICATED') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  useEffect(() => {
    if (state.status === 'SUCCESS') {
      router.replace('/board');
    }
  }, [state.status, router]);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className={s.title}>
            게시물 작성
            <span className={s.titleSub}>New Post</span>
          </h1>
        </div>
        <BoardCreateForm
          title={title}
          content={content}
          isSubmitting={state.status === 'SUBMITTING'}
          errorMessage={state.status === 'ERROR' ? state.message : undefined}
          onTitleChange={setTitle}
          onContentChange={setContent}
          onSubmit={submit}
          onCancel={() => router.push('/board')}
        />
      </div>
    </div>
  );
}
