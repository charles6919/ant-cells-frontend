import { MyPageUser } from '../model/myPageUser';

export type MyPageState =
  | { status: 'LOADING' }
  | { status: 'ERROR'; message: string }
  | { status: 'SUCCESS'; user: MyPageUser };
