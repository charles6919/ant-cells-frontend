'use client';

import Image from 'next/image';
import { YoutubeListState } from '../../domain/state/youtubeListState';
import { youtubePageStyles as s } from '../youtubePageStyles';

const PAGE_SIZE = 9;

interface YoutubeListProps {
  state: YoutubeListState;
  page: number;
  onPageChange: (page: number) => void;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
}

export function YoutubeList({ state, page, onPageChange }: YoutubeListProps) {
  if (state.status === 'LOADING') {
    return (
      <div className={s.panel}>
        <div className={s.statusBox}>
          <span className={s.statusIcon}>○</span>
          불러오는 중...
        </div>
      </div>
    );
  }

  if (state.status === 'ERROR') {
    return (
      <div className={s.panel}>
        <div className={s.errorBox}>
          <span className={s.statusIcon}>!</span>
          {state.message}
        </div>
      </div>
    );
  }

  if (state.status === 'EMPTY') {
    return (
      <div className={s.panel}>
        <div className={s.statusBox}>
          <span className={s.statusIcon}>—</span>
          {state.message}
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(state.totalResults / PAGE_SIZE);

  return (
    <div className={s.panel}>
      <div className={s.grid}>
        {state.videos.map((video) => (
          <a
            key={video.videoId}
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={s.card}
          >
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              width={480}
              height={270}
              className={s.thumbnail}
            />
            <div className={s.cardBody}>
              <p className={s.cardTitle}>{video.title}</p>
              <div className={s.cardMeta}>
                <span className={s.cardChannel}>{video.channelName}</span>
                <span className={s.cardMetaDot}>·</span>
                <span className={s.cardDate}>{formatDate(video.publishedAt)}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={s.paginationWrapper}>
          <div className={s.pagination}>
            <button
              className={s.pageNavButton}
              disabled={page <= 1}
              onClick={() => onPageChange(page - 1)}
            >
              이전
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={s.pageButton(p === page)}
                onClick={() => onPageChange(p)}
              >
                {p}
              </button>
            ))}
            <button
              className={s.pageNavButton}
              disabled={page >= totalPages}
              onClick={() => onPageChange(page + 1)}
            >
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
