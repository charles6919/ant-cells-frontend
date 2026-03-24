export const navBarStyles = {
  nav: 'fixed top-0 left-0 right-0 z-50 h-14 border-b border-zinc-200/70 bg-white/95 backdrop-blur-md dark:border-white/5 dark:bg-[#07070f]/95',
  inner: 'mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6',

  logo: 'flex items-center gap-2.5 select-none',
  logoMark: 'flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-[11px] font-bold text-white shadow-sm shadow-indigo-500/30',
  logoText: 'text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50',
  logoBadge: 'hidden sm:inline-flex items-center rounded-md bg-indigo-50 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400',

  menuList: 'flex items-stretch',
  menuItem: (isActive: boolean) =>
    isActive
      ? 'flex items-center border-b-2 border-indigo-600 px-3.5 text-sm font-medium text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
      : 'flex items-center border-b-2 border-transparent px-3.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',

  actions: 'flex items-center gap-2',
  loginButton: 'inline-flex h-8 items-center justify-center rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-700',
  logoutButton: 'inline-flex h-8 items-center justify-center rounded-lg border border-zinc-200 px-4 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-white/5',
};
