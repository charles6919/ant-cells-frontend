import { useEffect, useState } from 'react';
import { VideoListState } from '../../domain/state/videoListState';
import { youtubeApi } from '../../infrastructure/api/youtubeApi';

const PAGE_SIZE = 9;

export function useVideoList() {
  const [state, setState] = useState<VideoListState>({ status: 'LOADING' });
  const [page, setPage] = useState(1);

  useEffect(() => {
    setState({ status: 'LOADING' });
    youtubeApi
      .getList(page, PAGE_SIZE)
      .then((result) => {
        const videos = result.items.map((item) => ({
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
          nextPageToken: result.next_page_token,
          prevPageToken: result.prev_page_token,
          totalResults: result.total_results,
        });
      })
      .catch(() => {
        setState({ status: 'ERROR', message: '영상 목록을 불러오는 데 실패했습니다.' });
      });
  }, [page]);

  const handlePageChange = (next: number) => {
    if (next < 1) return;
    setPage(next);
  };

  return { state, page, setPage: handlePageChange };
}
