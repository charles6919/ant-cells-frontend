import { VideoItem } from '../model/videoItem';

export type VideoListState =
  | { status: 'LOADING' }
  | { status: 'ERROR'; message: string }
  | { status: 'SUCCESS'; videos: VideoItem[]; nextPageToken: string | null; prevPageToken: string | null; totalResults: number };
