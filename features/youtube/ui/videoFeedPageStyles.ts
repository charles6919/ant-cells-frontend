export const videoFeedPageStyles = {
  page: 'min-h-screen bg-gray-50',
  container: 'max-w-6xl mx-auto px-4 py-8',
  header: 'mb-8',
  title: 'text-2xl font-bold text-gray-900',
};

export const videoListStyles = {
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
  center: 'flex justify-center items-center py-24',
  message: 'text-gray-500 text-base',
  errorMessage: 'text-red-500 text-base',
  pagination: 'flex justify-center items-center gap-4 mt-10',
  pageButton:
    'px-4 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed',
  pageInfo: 'text-sm text-gray-600',
};

export const videoCardStyles = {
  card: 'block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow',
  thumbnailWrapper: 'aspect-video w-full overflow-hidden bg-gray-100',
  thumbnail: 'w-full h-full object-cover',
  info: 'p-4',
  title: 'text-sm font-semibold text-gray-900 line-clamp-2 mb-2',
  channelName: 'text-xs text-blue-600 font-medium mb-1',
  publishedAt: 'text-xs text-gray-400',
};
