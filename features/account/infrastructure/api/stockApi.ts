import { httpClient } from '@/infrastructure/http/httpClient';
import { ThemeListResponse } from '../../domain/model/stock';

export const stockApi = {
  getThemes: () => httpClient.get<ThemeListResponse>('/themes'),
};
