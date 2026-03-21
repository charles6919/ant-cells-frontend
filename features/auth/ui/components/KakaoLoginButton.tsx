import { kakaoLoginButtonStyles } from './kakaoLoginButtonStyles';

interface KakaoLoginButtonProps {
  onClick: () => void;
}

export default function KakaoLoginButton({ onClick }: KakaoLoginButtonProps) {
  return (
    <button onClick={onClick} className={kakaoLoginButtonStyles.button}>
      <svg
        className={kakaoLoginButtonStyles.icon}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3C7.03 3 3 6.36 3 10.5c0 2.67 1.72 5.01 4.32 6.36l-.88 3.27a.3.3 0 0 0 .44.33L10.8 18.1A10.8 10.8 0 0 0 12 18c4.97 0 9-3.36 9-7.5S16.97 3 12 3z" />
      </svg>
      <span className={kakaoLoginButtonStyles.label}>Kakao로 로그인</span>
    </button>
  );
}
