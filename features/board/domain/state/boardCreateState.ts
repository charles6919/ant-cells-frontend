export type BoardCreateState =
  | { status: 'IDLE' }
  | { status: 'SUBMITTING' }
  | { status: 'ERROR'; message: string }
  | { status: 'SUCCESS' };
