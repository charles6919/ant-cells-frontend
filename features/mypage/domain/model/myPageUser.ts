import { Theme } from './interestStock';

export interface MyPageUser {
  readonly email: string;
  readonly nickname: string;
  readonly interestThemes: Theme[];
}
