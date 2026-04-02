export interface QaPair {
  question: string;
  answer: string;
}

export type MarketAnalysisState =
  | { status: 'IDLE' }
  | { status: 'LOADING'; history: QaPair[] }
  | { status: 'SUCCESS'; history: QaPair[] }
  | { status: 'ERROR'; message: string; history: QaPair[] };
