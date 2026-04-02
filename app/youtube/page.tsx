'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useYoutubeList } from '@/features/youtube/application/hooks/useYoutubeList';
import { YoutubeList } from '@/features/youtube/ui/components/YoutubeList';
import { InterestThemeTags } from '@/features/youtube/ui/components/InterestStockTags';
import { youtubePageStyles as s } from '@/features/youtube/ui/youtubePageStyles';

export default function YoutubePage() {
  const { authState } = useAuth();
  const { state, page, setPage, interestThemes, hasInterestThemes } = useYoutubeList();
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
            주식 종목 영상
            <span className={s.titleSub}>Youtube</span>
          </h1>
        </div>
        <InterestThemeTags themes={interestThemes} hasInterestThemes={hasInterestThemes} />
        <YoutubeList state={state} page={page} onPageChange={setPage} />
      </div>
    </div>
  );
}
