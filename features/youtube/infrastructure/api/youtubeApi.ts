import { httpClient } from '@/infrastructure/http/httpClient';
import { YoutubeListResponse } from '../../domain/model/youtubeListResponse';
import { ThemeListResponse, MyInterestThemeResponse } from '../../domain/model/interestStock';

export const youtubeApi = {
  getList: (page: number = 1) =>
    httpClient.get<YoutubeListResponse>(`/youtube/list?page=${page}`),
  collect: () => httpClient.post<{ saved_count: number }>('/youtube/collect'),
  getAllThemes: () =>
    httpClient.get<ThemeListResponse>('/themes'),
  getMyThemes: () =>
    httpClient.get<MyInterestThemeResponse>('/themes/me'),
};
