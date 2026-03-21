import { AuthState } from '../../domain/state/authState';

export const isAuthenticated = (state: AuthState): boolean =>
  state.status === 'AUTHENTICATED';

export const isLoading = (state: AuthState): boolean =>
  state.status === 'LOADING';

export const isTemporaryAuth = (state: AuthState): boolean =>
  state.status === 'TEMPORARY_AUTH';
