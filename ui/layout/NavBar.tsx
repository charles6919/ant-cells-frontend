'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navBarStyles as s } from './navBarStyles';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Board', href: '/board' },
  { label: 'Youtube', href: '/youtube' },
  { label: '주식 추천', href: '/stock-recommendation' },
];

interface NavBarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export default function NavBar({ isAuthenticated = false, onLogout }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav className={s.nav}>
      <div className={s.inner}>
        <Link href="/" className={s.logo}>
          <span className={s.logoMark}>AC</span>
          <span className={s.logoText}>Ant Cells</span>
          <span className={s.logoBadge}>투자정보</span>
        </Link>

        <div className={s.menuList}>
          {menuItems.map(({ label, href }) => (
            <Link key={href} href={href} className={s.menuItem(pathname === href)}>
              {label}
            </Link>
          ))}
        </div>

        <div className={s.actions}>
          {isAuthenticated ? (
            <>
              <Link href="/mypage" className={s.myPageButton}>
                마이페이지
              </Link>
              <button className={s.logoutButton} onClick={onLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <Link href="/login" className={s.loginButton}>
              로그인
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
