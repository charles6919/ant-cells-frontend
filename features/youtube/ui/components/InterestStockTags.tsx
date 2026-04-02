import { InterestTheme } from '../../domain/model/interestStock';
import { youtubePageStyles as s } from '../youtubePageStyles';

interface InterestThemeTagsProps {
  themes: InterestTheme[];
  hasInterestThemes: boolean;
}

export function InterestThemeTags({ themes, hasInterestThemes }: InterestThemeTagsProps) {
  if (!hasInterestThemes) {
    return (
      <div className={s.interestGuide}>
        관심 테마를 설정하면 맞춤 영상을 볼 수 있어요
      </div>
    );
  }

  return (
    <div className={s.interestTagSection}>
      <span className={s.interestLabel}>관심 테마</span>
      <div className={s.interestTagList}>
        {themes.map((theme) => (
          <span key={theme.seq} className={s.interestTag}>
            {theme.theme}
          </span>
        ))}
      </div>
    </div>
  );
}
