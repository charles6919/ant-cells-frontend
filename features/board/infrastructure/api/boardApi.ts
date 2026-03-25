import { httpClient } from '@/infrastructure/http/httpClient';
import { BoardListResponse } from '../../domain/model/boardListResponse';
import { BoardCreateResponse } from '../../domain/model/boardCreateResponse';

export const boardApi = {
  getList: (page: number, size: number) =>
    httpClient.get<BoardListResponse>(`/board/list?page=${page}&size=${size}`),

  create: (title: string, content: string) =>
    httpClient.post<BoardCreateResponse>('/board', { title, content }),
};
