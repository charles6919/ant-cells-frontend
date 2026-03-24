import { Board } from '../model/board';

export type BoardListState =
  | { status: 'LOADING' }
  | { status: 'ERROR'; message: string }
  | { status: 'EMPTY'; message: string }
  | { status: 'SUCCESS'; boards: Board[]; total: number; page: number; size: number };
