import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (gameId: string) => void;
  isFavorite: (gameId: string) => boolean;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const STORAGE_KEY = 'fun88_favorites';

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    // Initialize from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage:', error);
    }
  }, [favorites]);

  const toggleFavorite = (gameId: string) => {
    setFavorites((prev) => {
      if (prev.includes(gameId)) {
        return prev.filter((id) => id !== gameId);
      }
      return [...prev, gameId];
    });
  };

  const isFavorite = (gameId: string) => favorites.includes(gameId);

  const value: FavoritesContextType = {
    favorites,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
