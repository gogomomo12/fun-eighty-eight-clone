import type { Game, Provider, Banner, Category } from '../types';
import { gamesData, providersData, bannersData } from '../data/mockData';

// Simulate network delay (as per test instructions)
const DELAY_MS = 1500;

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export interface FetchGamesParams {
  category?: Category | null;
  provider?: string | null;
  search?: string;
}

/**
 * Fetch games with optional filtering
 * Simulates API call with delay
 */
export const fetchGames = async (params?: FetchGamesParams): Promise<Game[]> => {
  await delay(DELAY_MS);

  let filteredGames = [...gamesData];

  // Filter by category
  if (params?.category) {
    filteredGames = filteredGames.filter((game) =>
      game.categories.includes(params.category!)
    );
  }

  // Filter by provider
  if (params?.provider) {
    filteredGames = filteredGames.filter(
      (game) => game.provider === params.provider
    );
  }

  // Filter by search term
  if (params?.search && params.search.trim() !== '') {
    const searchLower = params.search.toLowerCase().trim();
    filteredGames = filteredGames.filter((game) =>
      game.name.toLowerCase().includes(searchLower)
    );
  }

  return filteredGames;
};

/**
 * Fetch all providers
 * Simulates API call with delay
 */
export const fetchProviders = async (): Promise<Provider[]> => {
  await delay(DELAY_MS);
  return [...providersData];
};

/**
 * Fetch banners for carousel
 * Simulates API call with delay
 */
export const fetchBanners = async (): Promise<Banner[]> => {
  await delay(DELAY_MS);
  return [...bannersData];
};

/**
 * Fetch a single game by ID
 * Simulates API call with delay
 */
export const fetchGameById = async (id: string): Promise<Game | null> => {
  await delay(DELAY_MS / 2);
  return gamesData.find((game) => game.id === id) || null;
};

/**
 * Get game count by category
 * Useful for displaying counts in tabs
 */
export const getGameCountByCategory = async (
  category: Category
): Promise<number> => {
  await delay(500);
  return gamesData.filter((game) => game.categories.includes(category)).length;
};
