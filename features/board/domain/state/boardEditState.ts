export type BoardEditState =
  | { status: 'IDLE' }
  | { status: 'SUBMITTING' }
  | { status: 'ERROR'; message: string }
  | { status: 'SUCCESS' };
