interface LoadMoreProps {
  currentCount: number;
  totalCount: number;
  onLoadMore: () => void;
  isLoading?: boolean;
}

export const LoadMore = ({
  currentCount,
  totalCount,
  onLoadMore,
  isLoading = false,
}: LoadMoreProps) => {
  const percentage = Math.round((currentCount / totalCount) * 100);

  return (
    <div className="px-4 py-8 flex flex-col items-center">
      {/* Counter */}
      <p className="text-gray-600 text-sm mb-3">
        {currentCount} / {totalCount.toLocaleString()}
      </p>

      {/* Progress Bar */}
      <div className="w-full max-w-xs h-1.5 bg-gray-200 rounded-full mb-5 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Load More Button */}
      <button
        onClick={onLoadMore}
        disabled={isLoading || currentCount >= totalCount}
        className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          'Load more'
        )}
      </button>
    </div>
  );
};
