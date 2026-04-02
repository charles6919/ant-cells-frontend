export interface SignupRequest {
  readonly nickname: string;
  readonly email: string;
  readonly interest_theme_seqs?: number[];
}
