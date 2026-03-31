export type MarketAnalysisState =
  | { status: 'IDLE' }
  | { status: 'LOADING' }
  | { status: 'SUCCESS'; question: string; answer: string }
  | { status: 'ERROR'; message: string };
