import { httpClient } from '@/infrastructure/http/httpClient';
import { MarketAnalysisRequest, MarketAnalysisResponse } from '../../domain/model/marketAnalysis';

export const marketAnalysisApi = {
  ask: (body: MarketAnalysisRequest) =>
    httpClient.post<MarketAnalysisResponse>('/market-analysis/question', body),
};
