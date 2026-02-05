import { useState, useEffect, useCallback } from 'react';
import type { Game, Category, LoadingState } from '../types';
import { fetchGames } from '../api/mockApi';
import type { FetchGamesParams } from '../api/mockApi';

interface UseGamesResult {
  games: Game[];
  displayedGames: Game[];
  loadingState: LoadingState;
  error: string | null;
  refetch: () => void;
  loadMore: () => void;
  isLoadingMore: boolean;
  hasMore: boolean;
  totalCount: number;
  displayedCount: number;
}

interface UseGamesParams {
  category?: Category | null;
  provider?: string | null;
  search?: string;
  initialLimit?: number;
  loadMoreCount?: number;
}

const DEFAULT_INITIAL_LIMIT = 9;
const DEFAULT_LOAD_MORE_COUNT = 9;

/**
 * Custom hook for fetching and managing games data
 * Handles loading, error, and success states with pagination
 */
export const useGames = (params?: UseGamesParams): UseGamesResult => {
  const [games, setGames] = useState<Game[]>([]);
  const [displayLimit, setDisplayLimit] = useState(params?.initialLimit || DEFAULT_INITIAL_LIMIT);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMoreCount = params?.loadMoreCount || DEFAULT_LOAD_MORE_COUNT;

  // Reset display limit when filters change
  useEffect(() => {
    setDisplayLimit(params?.initialLimit || DEFAULT_INITIAL_LIMIT);
  }, [params?.category, params?.provider, params?.search, params?.initialLimit]);

  const fetchData = useCallback(async () => {
    setLoadingState('loading');
    setError(null);

    try {
      const fetchParams: FetchGamesParams = {
        category: params?.category,
        provider: params?.provider,
        search: params?.search,
      };

      const data = await fetchGames(fetchParams);
      setGames(data);
      setLoadingState('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch games');
      setLoadingState('error');
    }
  }, [params?.category, params?.provider, params?.search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = useCallback(async () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    setDisplayLimit((prev) => Math.min(prev + loadMoreCount, games.length));
    setIsLoadingMore(false);
  }, [isLoadingMore, loadMoreCount, games.length]);

  const displayedGames = games.slice(0, displayLimit);
  const hasMore = displayLimit < games.length;

  return {
    games,
    displayedGames,
    loadingState,
    error,
    refetch,
    loadMore,
    isLoadingMore,
    hasMore,
    totalCount: games.length,
    displayedCount: displayedGames.length,
  };
};
