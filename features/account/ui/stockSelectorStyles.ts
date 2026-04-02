export const stockSelectorStyles = {
  container: 'flex flex-col gap-4',
  loading: 'py-8 text-center text-sm text-zinc-400',
  errorWrapper: 'flex flex-col items-center gap-4 py-8',
  errorText: 'text-sm text-red-500',

  themeGrid: 'grid grid-cols-2 gap-2 max-h-60 overflow-y-auto',
  themeItem: 'flex flex-col items-start gap-0.5 rounded-xl border border-zinc-200 p-3 text-left transition-all hover:border-zinc-300 dark:border-white/10 dark:hover:border-white/20',
  themeItemSelected: 'flex flex-col items-start gap-0.5 rounded-xl border-2 border-indigo-500 bg-indigo-50 p-[11px] text-left transition-all dark:border-indigo-400 dark:bg-indigo-500/10',
  themeName: 'text-sm font-medium text-zinc-800 dark:text-zinc-100',
  themeDesc: 'text-xs text-zinc-400 dark:text-zinc-500',
  themeDescSelected: 'text-xs text-indigo-500 dark:text-indigo-400',

  selectedInfo: 'text-center text-xs text-indigo-600 dark:text-indigo-400',

  buttonGroup: 'flex gap-3',
  skipButton: 'h-11 flex-1 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/5',
  submitButton: 'h-11 flex-1 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40',
};
