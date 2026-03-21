export const navBarStyles = {
  nav: 'fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-white px-6 shadow-sm dark:bg-zinc-900',
  logo: 'text-lg font-bold tracking-tight text-zinc-900 dark:text-white',
  menuList: 'flex items-center gap-4',
  menuItem: (isActive: boolean) =>
    isActive
      ? 'text-sm font-semibold text-zinc-900 underline underline-offset-4 dark:text-white'
      : 'text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
  loginButton: 'rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200',
  logoutButton: 'rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800',
};
