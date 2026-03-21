import { AuthUser } from '../model/authUser';

export type AuthState =
  | { status: 'LOADING' }
  | { status: 'UNAUTHENTICATED' }
  | { status: 'AUTHENTICATED'; user: AuthUser };
