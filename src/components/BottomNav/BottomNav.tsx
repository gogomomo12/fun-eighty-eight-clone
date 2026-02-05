import type { ReactNode } from 'react';
import { useFavorites } from '../../context/FavoritesContext';

type NavItem = 'deportes' | 'favoritos' | 'recientes' | 'casino' | 'expandir';

interface BottomNavProps {
  activeItem?: NavItem;
  onItemClick?: (item: NavItem) => void;
}

export const BottomNav = ({ activeItem = 'casino', onItemClick }: BottomNavProps) => {
  const { favoritesCount } = useFavorites();

  const navItems: { id: NavItem; label: string; icon: ReactNode }[] = [
    {
      id: 'deportes',
      label: 'SPORTS',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <path strokeWidth={2} d="M12 2C12 12 12 12 22 12" />
          <path strokeWidth={2} d="M12 22C12 12 12 12 2 12" />
          <path strokeWidth={2} d="M4.93 4.93l14.14 14.14" />
        </svg>
      ),
    },
    {
      id: 'favoritos',
      label: 'FAVORITES',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      id: 'recientes',
      label: 'RECENT',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 'casino',
      label: 'CASINO',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      id: 'expandir',
      label: 'EXPAND',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
              activeItem === item.id
                ? 'text-primary'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <div className="relative">
              {item.icon}
              {/* Favorites Badge */}
              {item.id === 'favoritos' && favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoritesCount > 9 ? '9+' : favoritesCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium mt-1">{item.label}</span>

            {/* Active Indicator */}
            {activeItem === item.id && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};
