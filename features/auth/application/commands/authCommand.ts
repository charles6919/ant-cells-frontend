import { authApi } from '../../infrastructure/api/authApi';
import { AuthIntent } from '../../domain/intent/authIntent';
import { authAtom } from '../atoms/authAtom';
import { authStore } from '../atoms/authStore';

type CommandMap = {
  [K in AuthIntent['type']]: () => void;
};

export const authCommands: CommandMap = {
  LOGIN_KAKAO: () => {
    window.location.href = authApi.getKakaoOAuthUrl();
  },
  LOGOUT: () => {
    authStore.set(authAtom, { status: 'UNAUTHENTICATED' });
    window.location.replace('/login');
  },
};
