import { atom } from 'jotai';
import { AuthState } from '../../domain/state/authState';

export const authAtom = atom<AuthState>({ status: 'UNAUTHENTICATED' });
