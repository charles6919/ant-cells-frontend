export interface InterestTheme {
  readonly seq: number;
  readonly theme: string;
  readonly description: string;
}

export interface ThemeListResponse {
  total: number;
  themes: InterestTheme[];
}

export interface MyInterestThemeResponse {
  theme_seqs: number[];
}
