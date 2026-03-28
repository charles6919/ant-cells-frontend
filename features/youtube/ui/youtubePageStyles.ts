export const youtubePageStyles = {
  page: 'min-h-screen bg-gray-50',
  container: 'max-w-6xl mx-auto px-4 py-8',
  header: 'mb-8',
  title: 'text-2xl font-bold text-gray-900 flex items-center gap-3',
  titleSub: 'text-sm font-normal text-gray-400 tracking-widest',

  panel: 'bg-white rounded-2xl shadow-sm border border-gray-100 p-6',

  statusBox: 'flex flex-col items-center justify-center py-20 gap-3 text-gray-400',
  statusIcon: 'text-2xl',
  errorBox: 'flex flex-col items-center justify-center py-20 gap-3 text-red-400',

  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',

  card: 'group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer',
  thumbnail: 'w-full aspect-video object-cover bg-gray-100',
  cardBody: 'flex flex-col gap-1 p-4',
  cardTitle: 'text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors',
  cardMeta: 'flex items-center gap-1.5 mt-1',
  cardChannel: 'text-xs text-gray-500 truncate',
  cardMetaDot: 'text-gray-300 text-xs',
  cardDate: 'text-xs text-gray-400 whitespace-nowrap',

  paginationWrapper: 'flex items-center justify-between mt-8 pt-6 border-t border-gray-100',
  paginationInfo: 'text-xs text-gray-400',
  pagination: 'flex items-center gap-1',
  pageButton: (active: boolean) =>
    `w-8 h-8 text-xs rounded-lg font-medium transition-colors ${
      active
        ? 'bg-blue-600 text-white'
        : 'text-gray-500 hover:bg-gray-100'
    }`,
  pageNavButton:
    'px-3 h-8 text-xs rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors',
};
