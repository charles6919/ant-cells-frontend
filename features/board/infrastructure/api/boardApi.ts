import { httpClient } from '@/infrastructure/http/httpClient';
import { BoardListResponse } from '../../domain/model/boardListResponse';

export const boardApi = {
  getList: (page: number, size: number) =>
    httpClient.get<BoardListResponse>(`/board/list?page=${page}&size=${size}`),
};
