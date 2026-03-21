'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navBarStyles } from './navBarStyles';

const menuItems = [
  { label: 'Home', href: '/' },
];

interface NavBarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export default function NavBar({ isAuthenticated = false, onLogout }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav className={navBarStyles.nav}>
      <Link href="/" className={navBarStyles.logo}>
        Ant Cells
      </Link>
      <div className={navBarStyles.menuList}>
        {menuItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={navBarStyles.menuItem(pathname === href)}
          >
            {label}
          </Link>
        ))}
        {isAuthenticated ? (
          <button className={navBarStyles.logoutButton} onClick={onLogout}>
            Logout
          </button>
        ) : (
          <Link href="/login" className={navBarStyles.loginButton}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
