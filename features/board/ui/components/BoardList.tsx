'use client';

import { useRouter } from 'next/navigation';
import { BoardListState } from '../../domain/state/boardListState';
import { boardPageStyles as s } from '../boardPageStyles';

interface BoardListProps {
  state: BoardListState;
  page: number;
  onPageChange: (page: number) => void;
}

export function BoardList({ state, page, onPageChange }: BoardListProps) {
  const router = useRouter();

  if (state.status === 'LOADING') {
    return (
      <div className={s.panel}>
        <div className={s.statusBox}>
          <span className={s.statusIcon}>○</span>
          불러오는 중...
        </div>
      </div>
    );
  }

  if (state.status === 'ERROR') {
    return (
      <div className={s.panel}>
        <div className={s.errorBox}>
          <span className={s.statusIcon}>!</span>
          {state.message}
        </div>
      </div>
    );
  }

  if (state.status === 'EMPTY') {
    return (
      <div className={s.panel}>
        <div className={s.statusBox}>
          <span className={s.statusIcon}>—</span>
          {state.message}
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(state.total / state.size);
  const rowNumber = (index: number) => state.total - ((state.page - 1) * state.size + index);
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit' });

  return (
    <div className={s.panel}>

      {/* ── Desktop Table ── */}
      <div className={s.tableWrapper}>
        <table className={s.table}>
          <thead className={s.thead}>
            <tr>
              <th className={s.thNo}>No</th>
              <th className={s.thTitle}>제목</th>
              <th className={s.thAuthor}>작성자</th>
              <th className={s.thDate}>작성일</th>
            </tr>
          </thead>
          <tbody>
            {state.boards.map((board, index) => (
              <tr
                key={board.id}
                className={s.row}
                tabIndex={0}
                onClick={() => router.push(`/board/read/${board.id}`)}
                onKeyDown={(e) => e.key === 'Enter' && router.push(`/board/read/${board.id}`)}
              >
                <td className={s.tdNo}>{rowNumber(index)}</td>
                <td className={s.tdTitle}>{board.title}</td>
                <td className={s.tdAuthor}>{board.author}</td>
                <td className={s.tdDate}>{formatDate(board.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile Cards ── */}
      <div className={s.cardList}>
        {state.boards.map((board, index) => (
          <div
            key={board.id}
            className={s.card}
            onClick={() => router.push(`/board/read/${board.id}`)}
          >
            <div className={s.cardBody}>
              <p className={s.cardNo}>{rowNumber(index)}</p>
              <p className={s.cardTitle}>{board.title}</p>
              <div className={s.cardMeta}>
                <span>{board.author}</span>
                <span className={s.cardMetaDot}>·</span>
                <span>{formatDate(board.createdAt)}</span>
              </div>
            </div>
            <span className={s.cardArrow}>›</span>
          </div>
        ))}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className={s.paginationWrapper}>
          <span className={s.paginationInfo}>
            {(page - 1) * state.size + 1}–{Math.min(page * state.size, state.total)} / {state.total}
          </span>
          <div className={s.pagination}>
            <button className={s.pageNavButton} disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
              이전
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} className={s.pageButton(p === page)} onClick={() => onPageChange(p)}>
                {p}
              </button>
            ))}
            <button className={s.pageNavButton} disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
