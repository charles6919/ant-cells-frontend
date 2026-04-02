'use client';

import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import { acceptedTermsAtom } from '@/features/terms/application/atoms/acceptedTermsAtom';
import { useSignup } from '@/features/account/application/hooks/useSignup';
import { useThemeSelection } from '@/features/account/application/hooks/useStockSelection';
import SignupForm from '@/features/account/ui/components/SignupForm';
import ThemeSelector from '@/features/account/ui/components/StockSelector';
import { signupPageStyles as s } from '@/features/account/ui/signupPageStyles';

export default function SignupPage() {
  const authState = useAtomValue(authAtom);
  const acceptedTerms = useAtomValue(acceptedTermsAtom);
  const router = useRouter();
  const { step, email, nickname, setNickname, error, isSubmitting, goToThemeStep, submit } = useSignup();
  const themeSelection = useThemeSelection();

  useEffect(() => {
    if (authState.status === 'LOADING') return;
    if (authState.status !== 'TEMPORARY_AUTH') {
      router.replace('/login');
      return;
    }
    if (acceptedTerms.length === 0) {
      router.replace('/terms');
    }
  }, [authState.status, acceptedTerms, router]);

  if (authState.status !== 'TEMPORARY_AUTH' || acceptedTerms.length === 0) {
    return null;
  }

  const stepInfo = step === 'nickname'
    ? { title: '회원가입', subtitle: '사용할 닉네임을 설정하세요', indicator: '1 / 2' }
    : { title: '관심 테마 선택', subtitle: '관심 있는 투자 테마를 선택하세요', indicator: '2 / 2' };

  return (
    <div className={s.page}>
      <div className={s.header}>
        <div className={s.logoMark}>AC</div>
        <h1 className={s.title}>{stepInfo.title}</h1>
        <p className={s.subtitle}>{stepInfo.subtitle}</p>
        <span className={s.stepIndicator}>{stepInfo.indicator}</span>
      </div>
      <div className={step === 'themes' ? s.cardWide : s.card}>
        {step === 'nickname' && (
          <SignupForm
            email={email}
            nickname={nickname}
            onNicknameChange={setNickname}
            error={error}
            onNext={goToThemeStep}
          />
        )}
        {step === 'themes' && (
          <ThemeSelector
            themes={themeSelection.themes}
            selectedSeqs={themeSelection.selectedSeqs}
            onToggle={themeSelection.toggle}
            selectedCount={themeSelection.selectedCount}
            isLoading={themeSelection.isLoading}
            error={themeSelection.error}
            isSubmitting={isSubmitting}
            onSubmit={() => submit(themeSelection.getSelectedArray())}
            onSkip={() => submit([])}
          />
        )}
      </div>
    </div>
  );
}
