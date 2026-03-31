import { VideoListState } from '../../domain/state/videoListState';
import { videoListStyles as s } from '../videoFeedPageStyles';
import VideoCard from './VideoCard';

interface VideoListProps {
  state: VideoListState;
  page: number;
  onPageChange: (page: number) => void;
}

export default function VideoList({ state, page, onPageChange }: VideoListProps) {
  if (state.status === 'LOADING') {
    return (
      <div className={s.center}>
        <p className={s.message}>로딩 중...</p>
      </div>
    );
  }

  if (state.status === 'ERROR') {
    return (
      <div className={s.center}>
        <p className={s.errorMessage}>{state.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className={s.grid}>
        {state.videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
      <div className={s.pagination}>
        <button
          className={s.pageButton}
          onClick={() => onPageChange(page - 1)}
          disabled={!state.prevPageToken}
        >
          이전
        </button>
        <span className={s.pageInfo}>{page} 페이지</span>
        <button
          className={s.pageButton}
          onClick={() => onPageChange(page + 1)}
          disabled={!state.nextPageToken}
        >
          다음
        </button>
      </div>
    </div>
  );
}
