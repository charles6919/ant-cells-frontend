import { useAtom } from 'jotai';
import { authAtom } from '../atoms/authAtom';
import { authCommands } from '../commands/authCommand';
import { isAuthenticated } from '../selectors/authSelectors';
import { AuthIntent } from '../../domain/intent/authIntent';

export function useAuth() {
  const [authState] = useAtom(authAtom);

  const dispatch = (intent: AuthIntent) => {
    authCommands[intent.type]();
  };

  return {
    authState,
    isAuthenticated: isAuthenticated(authState),
    dispatch,
  };
}
