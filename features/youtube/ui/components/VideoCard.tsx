import { VideoItem } from '../../domain/model/videoItem';
import { videoCardStyles as s } from '../videoFeedPageStyles';

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const formattedDate = new Date(video.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className={s.card}>
      <div className={s.thumbnailWrapper}>
        <img src={video.thumbnailUrl} alt={video.title} className={s.thumbnail} />
      </div>
      <div className={s.info}>
        <p className={s.title}>{video.title}</p>
        <p className={s.channelName}>{video.channelName}</p>
        <p className={s.publishedAt}>{formattedDate}</p>
      </div>
    </a>
  );
}
