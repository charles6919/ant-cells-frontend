import { YoutubeVideo } from '../model/youtubeVideo';

export type YoutubeListState =
  | { status: 'LOADING' }
  | { status: 'ERROR'; message: string }
  | { status: 'EMPTY'; message: string }
  | {
      status: 'SUCCESS';
      videos: YoutubeVideo[];
      totalResults: number;
      nextPageToken: string | null;
      prevPageToken: string | null;
    };
