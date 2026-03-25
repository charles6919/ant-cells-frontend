import { authApi } from '../../infrastructure/api/authApi';
import { AuthIntent } from '../../domain/intent/authIntent';

type CommandMap = {
  [K in AuthIntent['type']]: () => void;
};

export const authCommands: CommandMap = {
  LOGIN_KAKAO: () => {
    window.location.href = authApi.getKakaoOAuthUrl();
  },
  LOGOUT: () => {
    // TODO: call logout API and clear auth state
  },
};
