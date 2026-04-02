'use client';

import { useState, useEffect, useRef } from 'react';
import { youtubeApi } from '../../infrastructure/api/youtubeApi';
import { YoutubeListState } from '../../domain/state/youtubeListState';
import { YoutubeVideo } from '../../domain/model/youtubeVideo';
import { InterestTheme } from '../../domain/model/interestStock';
import { HttpError } from '@/infrastructure/http/httpClient';

export function useYoutubeList() {
  const [state, setState] = useState<YoutubeListState>({ status: 'LOADING' });
  const [page, setPage] = useState(1);
  const [interestThemes, setInterestThemes] = useState<InterestTheme[]>([]);
  const [hasInterestThemes, setHasInterestThemes] = useState<boolean | null>(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const loadInterestThemes = async () => {
      try {
        const [myThemes, allThemes] = await Promise.all([
          youtubeApi.getMyThemes(),
          youtubeApi.getAllThemes(),
        ]);
        const seqs = new Set(myThemes?.theme_seqs ?? []);
        const matched = (allThemes?.themes ?? []).filter((t) => seqs.has(t.seq));
        setInterestThemes(matched);
        setHasInterestThemes(matched.length > 0);
      } catch {
        setHasInterestThemes(false);
      }
    };
    loadInterestThemes();
  }, []);

  useEffect(() => {
    if (hasInterestThemes === null) return;

    setState({ status: 'LOADING' });

    const load = async () => {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
        await youtubeApi.collect().catch(() => {});
      }

      try {
        const result = await youtubeApi.getList(page);

        if (!result || result.items.length === 0) {
          setState({ status: 'EMPTY', message: '등록된 영상이 없습니다.' });
          return;
        }
        const videos: YoutubeVideo[] = result.items.map((item) => ({
          videoId: item.video_id,
          title: item.title,
          thumbnailUrl: item.thumbnail_url,
          channelName: item.channel_name,
          publishedAt: item.published_at,
          videoUrl: item.video_url,
        }));
        setState({
          status: 'SUCCESS',
          videos,
          totalResults: result.total_results,
          nextPageToken: result.next_page_token,
          prevPageToken: result.prev_page_token,
        });
      } catch (error) {
        if (error instanceof HttpError && error.status === 404) {
          setState({ status: 'EMPTY', message: '등록된 영상이 없습니다.' });
        } else {
          setState({ status: 'ERROR', message: '영상 목록을 불러오는 데 실패했습니다.' });
        }
      }
    };

    load();
  }, [page, hasInterestThemes]);

  const handlePageChange = (newPage: number) => {
    setState({ status: 'LOADING' });
    setPage(newPage);
  };

  return { state, page, setPage: handlePageChange, interestThemes, hasInterestThemes: hasInterestThemes ?? false };
}
