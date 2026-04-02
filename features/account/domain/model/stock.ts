export interface Theme {
  readonly seq: number;
  readonly theme: string;
  readonly description: string;
}

export interface ThemeListResponse {
  readonly total: number;
  readonly themes: Theme[];
}
