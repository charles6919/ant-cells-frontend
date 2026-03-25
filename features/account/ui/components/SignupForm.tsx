import TextField from '@/ui/components/TextField';
import { signupPageStyles } from '../signupPageStyles';

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
    <div className={signupPageStyles.form}>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">이메일</span>
        <input
          type="email"
          readOnly
          value={email}
          className={signupPageStyles.readonlyInput}
        />
      </div>
      <TextField
        id="nickname"
        label="닉네임"
        value={nickname}
        onChange={onNicknameChange}
        error={error ?? undefined}
        type="text"
      />
      <button
        className={signupPageStyles.submitButton}
        disabled={isSubmitting || !nickname.trim()}
        onClick={onSubmit}
      >
        {isSubmitting ? '가입 중...' : '가입하기'}
      </button>
    </div>
  );
}
