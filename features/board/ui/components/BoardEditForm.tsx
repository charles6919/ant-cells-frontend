'use client';

import { boardPageStyles as s } from '../boardPageStyles';

interface BoardEditFormProps {
  title: string;
  content: string;
  isSubmitting: boolean;
  errorMessage?: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export function BoardEditForm({
  title,
  content,
  isSubmitting,
  errorMessage,
  onTitleChange,
  onContentChange,
  onSubmit,
  onCancel,
}: BoardEditFormProps) {
  const isDisabled = isSubmitting || !title.trim() || !content.trim();

  return (
    <div className={s.panel}>
      <div className="px-6 py-6">
        <div className={s.createForm}>
          <div>
            <label className={s.createLabel}>제목</label>
            <input
              className={s.createInput}
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              disabled={isSubmitting}
              maxLength={200}
            />
          </div>
          <div>
            <label className={s.createLabel}>본문</label>
            <textarea
              className={s.createTextarea}
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => onContentChange(e.target.value)}
              disabled={isSubmitting}
              rows={12}
            />
          </div>
          {errorMessage && <p className={s.createErrorBox}>{errorMessage}</p>}
          <div className={s.createActions}>
            <button className={s.createCancelButton} onClick={onCancel} disabled={isSubmitting}>
              취소
            </button>
            <button className={s.createSubmitButton(isDisabled)} onClick={onSubmit} disabled={isDisabled}>
              {isSubmitting ? '수정 중...' : '수정'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
