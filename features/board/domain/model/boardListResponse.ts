export interface BoardListItem {
  board_id: number;
  title: string;
  nickname: string;
  created_at: string;
}

export interface BoardListResponse {
  items: BoardListItem[];
  total: number;
  page: number;
  size: number;
}
