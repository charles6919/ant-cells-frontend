import { Theme } from '../../domain/model/stock';
import { stockSelectorStyles as s } from '../stockSelectorStyles';

interface ThemeSelectorProps {
  themes: Theme[];
  selectedSeqs: Set<number>;
  onToggle: (seq: number) => void;
  selectedCount: number;
  isLoading: boolean;
  error: string | null;
  isSubmitting: boolean;
  onSubmit: () => void;
  onSkip: () => void;
}

export default function ThemeSelector({
  themes,
  selectedSeqs,
  onToggle,
  selectedCount,
  isLoading,
  error,
  isSubmitting,
  onSubmit,
  onSkip,
}: ThemeSelectorProps) {
  if (isLoading) {
    return <div className={s.loading}>테마 목록을 불러오는 중...</div>;
  }

  if (error) {
    return (
      <div className={s.errorWrapper}>
        <p className={s.errorText}>{error}</p>
        <button className={s.skipButton} onClick={onSkip}>
          건너뛰기
        </button>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <div className={s.themeGrid}>
        {themes.map((theme) => {
          const isSelected = selectedSeqs.has(theme.seq);
          return (
            <button
              key={theme.seq}
              className={isSelected ? s.themeItemSelected : s.themeItem}
              onClick={() => onToggle(theme.seq)}
            >
              <span className={s.themeName}>{theme.theme}</span>
              <span className={isSelected ? s.themeDescSelected : s.themeDesc}>
                {theme.description}
              </span>
            </button>
          );
        })}
      </div>

      {selectedCount > 0 && (
        <p className={s.selectedInfo}>{selectedCount}개 테마 선택됨</p>
      )}

      <div className={s.buttonGroup}>
        <button className={s.skipButton} onClick={onSkip} disabled={isSubmitting}>
          건너뛰기
        </button>
        <button
          className={s.submitButton}
          onClick={onSubmit}
          disabled={isSubmitting || selectedCount === 0}
        >
          {isSubmitting ? '가입 중...' : '선택 완료'}
        </button>
      </div>
    </div>
  );
}
