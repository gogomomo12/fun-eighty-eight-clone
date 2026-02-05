import type { Game, LoadingState } from '../../types';
import { GameCard } from '../GameCard/GameCard';
import { GameGridSkeleton } from '../common/Loading';

interface GameGridProps {
  games: Game[];
  loadingState: LoadingState;
  error: string | null;
  onRetry?: () => void;
}

export const GameGrid = ({ games, loadingState, error, onRetry }: GameGridProps) => {
  // Loading State
  if (loadingState === 'loading') {
    return <GameGridSkeleton />;
  }

  // Error State
  if (loadingState === 'error' || error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Error loading games
        </h3>
        <p className="text-gray-500 text-center mb-4">
          {error || 'Something went wrong. Please try again.'}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  // Empty State
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          No games found
        </h3>
        <p className="text-gray-500 text-center">
          Try adjusting filters or search for something different.
        </p>
      </div>
    );
  }

  // Success State - Game Grid
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};
