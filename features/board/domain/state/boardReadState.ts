import { BoardReadResponse } from '../model/boardReadResponse';

export type BoardReadState =
  | { status: 'LOADING' }
  | { status: 'SUCCESS'; data: BoardReadResponse }
  | { status: 'NOT_FOUND' }
  | { status: 'ERROR'; message: string };
