import { httpClient } from '@/infrastructure/http/httpClient';
import { YoutubeListResponse } from '../../domain/model/youtubeListResponse';

export const youtubeApi = {
  getList: (page: number = 1) =>
    httpClient.get<YoutubeListResponse>(`/youtube/list?page=${page}`),
};
