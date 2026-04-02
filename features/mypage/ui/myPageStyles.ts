export const myPageStyles = {
  page: 'min-h-[calc(100vh-3.5rem)] bg-[#f8f9fc] px-4 py-10 dark:bg-[#07070f]',
  container: 'mx-auto max-w-lg',

  header: 'mb-8 flex flex-col items-center gap-3',
  avatar: 'flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/30',
  nickname: 'text-xl font-bold text-zinc-900 dark:text-zinc-50',
  email: 'text-sm text-zinc-500 dark:text-zinc-400',

  section: 'mb-6 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-[#0f0f1a]',
  sectionTitle: 'mb-4 flex items-center justify-between',
  sectionLabel: 'text-sm font-semibold text-zinc-800 dark:text-zinc-100',
  editButton: 'text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300',

  stockList: 'flex flex-wrap gap-2',
  stockTag: 'rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400',
  emptyText: 'text-sm text-zinc-400 dark:text-zinc-500',

  editorOverlay: 'fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4',
  editorPanel: 'w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl dark:border-white/5 dark:bg-[#0f0f1a]',
  editorTitle: 'mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50',
  editorClose: 'absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300',

  tabList: 'mb-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none',
  tab: 'shrink-0 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-700 dark:border-white/10 dark:text-zinc-400',
  tabActive: 'shrink-0 rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:border-indigo-400 dark:bg-indigo-500/10 dark:text-indigo-400',

  themeGrid: 'mb-4 grid grid-cols-2 gap-2 max-h-60 overflow-y-auto',
  themeItem: 'flex flex-col items-start gap-0.5 rounded-xl border border-zinc-200 p-3 text-left transition-all hover:border-zinc-300 dark:border-white/10 dark:hover:border-white/20',
  themeItemSelected: 'flex flex-col items-start gap-0.5 rounded-xl border-2 border-indigo-500 bg-indigo-50 p-[11px] text-left transition-all dark:border-indigo-400 dark:bg-indigo-500/10',
  stockName: 'text-sm font-medium text-zinc-800 dark:text-zinc-100',
  stockCode: 'text-xs text-zinc-400 dark:text-zinc-500',
  stockCodeSelected: 'text-xs text-indigo-500 dark:text-indigo-400',

  selectedInfo: 'mb-4 text-center text-xs text-indigo-600 dark:text-indigo-400',
  errorText: 'mb-3 text-center text-sm text-red-500',

  editorButtons: 'flex gap-3',
  cancelButton: 'h-11 flex-1 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/5',
  saveButton: 'h-11 flex-1 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40',

  loading: 'flex items-center justify-center py-20 text-sm text-zinc-400',
  errorBox: 'flex flex-col items-center justify-center gap-3 py-20 text-sm text-red-500',

  dangerSection: 'rounded-2xl border border-red-200/80 bg-white p-6 shadow-sm dark:border-red-500/20 dark:bg-[#0f0f1a]',
  dangerLabel: 'text-sm font-semibold text-red-600 dark:text-red-400',
  dangerDescription: 'mt-1 text-xs text-zinc-500 dark:text-zinc-400',
  deleteButton: 'mt-4 h-10 w-full rounded-xl border border-red-300 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-500/30 dark:text-red-400 dark:hover:bg-red-500/10',

  confirmOverlay: 'fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4',
  confirmPanel: 'w-full max-w-sm rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl dark:border-white/5 dark:bg-[#0f0f1a]',
  confirmTitle: 'mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-50',
  confirmMessage: 'mb-5 text-sm text-zinc-500 dark:text-zinc-400',
  confirmButtons: 'flex gap-3',
  confirmCancel: 'h-11 flex-1 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/5',
  confirmDelete: 'h-11 flex-1 rounded-xl bg-red-600 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40',
};
