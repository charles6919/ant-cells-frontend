'use client';

import { BoardReadResponse } from '../../domain/model/boardReadResponse';
import { boardPageStyles as s } from '../boardPageStyles';

interface BoardReadViewProps {
  data: BoardReadResponse;
  onList: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function BoardReadView({ data, onList, onEdit, onDelete }: BoardReadViewProps) {
  const createdDate = new Date(data.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={s.panel}>
      <div className={s.readHeader}>
        <h2 className={s.readTitle}>{data.title}</h2>
        <div className={s.readMeta}>
          <span>{data.nickname}</span>
          <span className={s.readMetaDot}>·</span>
          <span>{createdDate}</span>
        </div>
      </div>
      <div className={s.readBody}>
        <p className={s.readContent}>{data.content}</p>
      </div>
      <div className={s.readActions}>
        <button className={s.readListButton} onClick={onList}>
          목록
        </button>
        <div className={s.readActionRight}>
          <button className={s.readEditButton} onClick={onEdit}>
            수정
          </button>
          <button className={s.readDeleteButton} onClick={onDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
