import { Theme } from '../../domain/model/interestStock';
import { useInterestThemeEditor } from '../../application/hooks/useInterestStockEditor';
import { myPageStyles as s } from '../myPageStyles';

interface InterestThemeEditorModalProps {
  currentThemes: Theme[];
  onClose: () => void;
  onSaved: () => void;
}

export default function InterestThemeEditorModal({
  currentThemes,
  onClose,
  onSaved,
}: InterestThemeEditorModalProps) {
  const editor = useInterestThemeEditor(currentThemes, () => {
    onSaved();
    onClose();
  });

  return (
    <div className={s.editorOverlay} onClick={onClose}>
      <div className={s.editorPanel} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.editorTitle}>관심 테마 수정</h2>

        {editor.isLoading ? (
          <div className={s.loading}>테마 목록을 불러오는 중...</div>
        ) : (
          <>
            <div className={s.themeGrid}>
              {editor.allThemes.map((theme) => {
                const isSelected = editor.selectedSeqs.has(theme.seq);
                return (
                  <button
                    key={theme.seq}
                    className={isSelected ? s.themeItemSelected : s.themeItem}
                    onClick={() => editor.toggle(theme.seq)}
                  >
                    <span className={s.stockName}>{theme.theme}</span>
                    <span className={isSelected ? s.stockCodeSelected : s.stockCode}>
                      {theme.description}
                    </span>
                  </button>
                );
              })}
            </div>

            {editor.selectedCount > 0 && (
              <p className={s.selectedInfo}>{editor.selectedCount}개 테마 선택됨</p>
            )}

            {editor.error && <p className={s.errorText}>{editor.error}</p>}

            <div className={s.editorButtons}>
              <button className={s.cancelButton} onClick={onClose} disabled={editor.isSaving}>
                취소
              </button>
              <button className={s.saveButton} onClick={editor.save} disabled={editor.isSaving}>
                {editor.isSaving ? '저장 중...' : '저장'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
