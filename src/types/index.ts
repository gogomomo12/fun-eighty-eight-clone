export interface Game {
  id: string;
  name: string;
  image: string;
  provider: string;
  categories: Category[];
  isHot: boolean;
  isNew: boolean;
  jackpotAmount?: number;
}

export interface Provider {
  id: string;
  name: string;
  logo?: string;
  gameCount: number;
}

export interface Banner {
  id: string;
  image: string;
  title?: string;
  link?: string;
}

export type Category =
  | 'inicio'
  | 'popular'
  | 'jackpot'
  | 'new'
  | 'slots'
  | 'casino'
  | 'live'
  | 'table';

export interface CategoryTab {
  id: Category;
  label: string;
  icon?: string;
  count?: number;
  badge?: 'hot' | 'new';
}

export interface FilterState {
  category: Category | null;
  provider: string | null;
  search: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
