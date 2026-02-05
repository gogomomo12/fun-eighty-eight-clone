import { memo } from 'react';
import type { Game } from '../../types';
import { useFavorites } from '../../context/FavoritesContext';
import { Badge } from '../common/Badge';

interface GameCardProps {
  game: Game;
}

export const GameCard = memo(({ game }: GameCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(game.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(game.id);
  };

  const formatJackpot = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Hot Badge */}
        {game.isHot && (
          <div className="absolute top-2 left-2">
            <Badge variant="hot">Hot!</Badge>
          </div>
        )}

        {/* New Badge */}
        {game.isNew && !game.isHot && (
          <div className="absolute top-2 left-2">
            <Badge variant="new">NEW</Badge>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            favorite
              ? 'bg-yellow-400 text-white'
              : 'bg-white/80 text-gray-400 hover:bg-white hover:text-yellow-400'
          }`}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            className="w-5 h-5"
            fill={favorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>

        {/* Jackpot Amount */}
        {game.jackpotAmount && (
          <div className="absolute bottom-2 left-2 bg-black/70 text-yellow-400 text-xs font-bold px-2 py-1 rounded">
            {formatJackpot(game.jackpotAmount)}
          </div>
        )}
      </div>

      {/* Game Name */}
      <div className="px-3 py-2.5">
        <p className="text-sm font-medium text-gray-800 truncate">{game.name}</p>
      </div>
    </div>
  );
});

GameCard.displayName = 'GameCard';
