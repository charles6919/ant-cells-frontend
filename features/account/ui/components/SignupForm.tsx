import TextField from '@/ui/components/TextField';
import { signupPageStyles as s } from '../signupPageStyles';

interface SignupFormProps {
  email: string;
  nickname: string;
  onNicknameChange: (value: string) => void;
  error: string | null;
  isSubmitting: boolean;
  onSubmit: () => void;
}

export default function SignupForm({
  email,
  nickname,
  onNicknameChange,
  error,
  isSubmitting,
  onSubmit,
}: SignupFormProps) {
  return (
    <div className={s.form}>
      <div className={s.fieldWrapper}>
        <span className={s.fieldLabel}>이메일</span>
        <input type="email" readOnly value={email} className={s.readonlyInput} />
      </div>
      <TextField
        id="nickname"
        label="닉네임"
        value={nickname}
        onChange={onNicknameChange}
        error={error ?? undefined}
        type="text"
        placeholder="사용할 닉네임을 입력하세요"
      />
      <button
        className={s.submitButton}
        disabled={isSubmitting || !nickname.trim()}
        onClick={onSubmit}
      >
        {isSubmitting ? '가입 중...' : '가입하기'}
      </button>
    </div>
  );
}
