import { httpClient } from '@/infrastructure/http/httpClient';
import { BoardListResponse } from '../../domain/model/boardListResponse';
import { BoardCreateResponse } from '../../domain/model/boardCreateResponse';
import { BoardReadResponse } from '../../domain/model/boardReadResponse';
import { BoardEditResponse } from '../../domain/model/boardEditResponse';

export const boardApi = {
  getList: (page: number, size: number) =>
    httpClient.get<BoardListResponse>(`/board/list?page=${page}&size=${size}`),

  create: (title: string, content: string) =>
    httpClient.post<BoardCreateResponse>('/board/register', { title, content }),

  getById: (id: string) =>
    httpClient.get<BoardReadResponse>(`/board/read/${id}`),

  update: (id: string, title: string, content: string) =>
    httpClient.put<BoardEditResponse>(`/board/edit/${id}`, { title, content }),

  deleteById: (id: string) =>
    httpClient.delete(`/board/delete/${id}`),
};
