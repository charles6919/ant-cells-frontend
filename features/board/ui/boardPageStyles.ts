export const boardPageStyles = {
  page: 'min-h-[calc(100vh-3.5rem)] bg-[#f8f9fc] dark:bg-[#07070f]',
  container: 'mx-auto max-w-5xl px-4 py-8 sm:px-6',

  header: 'mb-5 flex items-center justify-between',
  title: 'text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50',
  titleSub: 'ml-2 text-xs font-normal text-zinc-400 dark:text-zinc-600',

  panel: 'overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm dark:border-white/5 dark:bg-[#0f0f1a]',

  // ── Desktop Table ──
  tableWrapper: 'hidden md:block',
  table: 'w-full border-collapse text-sm',
  thead: 'border-b border-zinc-100 bg-zinc-50/80 dark:border-white/5 dark:bg-white/[0.02]',
  thNo: 'w-14 py-3 pl-5 pr-3 text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600',
  thTitle: 'py-3 pr-4 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600',
  thAuthor: 'w-28 py-3 pr-4 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600',
  thDate: 'w-24 py-3 pr-5 text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600',
  row: 'group cursor-pointer border-b border-zinc-100/80 transition-all last:border-0 hover:bg-indigo-50/40 dark:border-white/[0.04] dark:hover:bg-indigo-500/[0.05]',
  tdNo: 'py-4 pl-5 pr-3 text-right font-mono text-xs tabular-nums text-zinc-400 dark:text-zinc-600',
  tdTitle: 'py-4 pr-4 font-medium text-zinc-800 transition-colors group-hover:text-indigo-700 dark:text-zinc-200 dark:group-hover:text-indigo-400',
  tdAuthor: 'py-4 pr-4 text-xs text-zinc-400 dark:text-zinc-500',
  tdDate: 'py-4 pr-5 text-right font-mono text-xs tabular-nums text-zinc-400 dark:text-zinc-600',

  // ── Mobile Cards ──
  cardList: 'flex flex-col divide-y divide-zinc-100/80 md:hidden dark:divide-white/[0.04]',
  card: 'flex cursor-pointer items-center gap-3 px-4 py-4 transition-colors hover:bg-indigo-50/40 dark:hover:bg-indigo-500/[0.05]',
  cardBody: 'min-w-0 flex-1',
  cardNo: 'mb-0.5 font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-600',
  cardTitle: 'truncate text-sm font-medium text-zinc-800 dark:text-zinc-200',
  cardMeta: 'mt-1 flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-600',
  cardMetaDot: 'text-zinc-300 dark:text-zinc-700',
  cardArrow: 'shrink-0 text-zinc-300 dark:text-zinc-700',

  // Status
  statusBox: 'flex flex-col items-center justify-center gap-2 py-20 text-sm text-zinc-400 dark:text-zinc-600',
  statusIcon: 'text-2xl opacity-30',
  errorBox: 'flex flex-col items-center justify-center gap-2 py-20 text-sm text-rose-400 dark:text-rose-600',

  // Pagination
  paginationWrapper: 'flex items-center justify-between border-t border-zinc-100/80 px-5 py-3.5 dark:border-white/[0.04]',
  paginationInfo: 'text-xs text-zinc-400 dark:text-zinc-600',
  pagination: 'flex items-center gap-1',
  pageNavButton: 'inline-flex h-7 items-center rounded-lg border border-zinc-200 px-2.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-zinc-500 dark:hover:bg-white/5',
  pageButton: (active: boolean) =>
    active
      ? 'inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-indigo-600 px-2 text-xs font-semibold text-white shadow-sm shadow-indigo-500/20'
      : 'inline-flex h-7 min-w-7 items-center justify-center rounded-lg border border-zinc-200 px-2 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-500 dark:hover:bg-white/5',
};
