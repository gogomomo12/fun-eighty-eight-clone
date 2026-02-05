import { useState, useMemo } from 'react';
import type { Category } from './types';
import { useGames } from './hooks/useGames';
import { useDebounce } from './hooks/useDebounce';
import { FavoritesProvider } from './context/FavoritesContext';

// Components
import { Header } from './components/Header/Header';
import { BannerCarousel } from './components/Banner/BannerCarousel';
import { ProviderFilter } from './components/ProviderFilter/ProviderFilter';
import { CategoryTabs } from './components/CategoryTabs/CategoryTabs';
import { SearchBar } from './components/SearchBar/SearchBar';
import { GameGrid } from './components/GameGrid/GameGrid';
import { LoadMore } from './components/LoadMore/LoadMore';
import { SeoContent } from './components/SeoContent/SeoContent';
import { Footer } from './components/Footer/Footer';
import { BottomNav } from './components/BottomNav/BottomNav';
import { FloatingChat } from './components/FloatingChat/FloatingChat';

function AppContent() {
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<Category | null>('inicio');
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Debounce search query for performance
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Memoize filter params to prevent unnecessary re-renders
  const filterParams = useMemo(
    () => ({
      category: selectedCategory,
      provider: selectedProvider,
      search: debouncedSearch,
      initialLimit: 9,
      loadMoreCount: 9,
    }),
    [selectedCategory, selectedProvider, debouncedSearch]
  );

  // Fetch games with filters and pagination
  const {
    displayedGames,
    loadingState,
    error,
    refetch,
    loadMore,
    isLoadingMore,
    hasMore,
    totalCount,
    displayedCount,
  } = useGames(filterParams);

  // Handlers
  const handleCategorySelect = (category: Category | null) => {
    setSelectedCategory(category);
    // Clear provider filter when changing category
    if (category !== selectedCategory) {
      setSelectedProvider(null);
    }
  };

  const handleProviderSelect = (providerId: string | null) => {
    setSelectedProvider(providerId);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <Header />

      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Category Tabs */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        onSearchClick={handleSearchToggle}
        isSearchOpen={isSearchOpen}
      />

      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={handleSearchChange}
        isOpen={isSearchOpen}
      />

      {/* Provider Filter */}
      <ProviderFilter
        selectedProvider={selectedProvider}
        onProviderSelect={handleProviderSelect}
      />

      {/* Game Grid */}
      <GameGrid
        games={displayedGames}
        loadingState={loadingState}
        error={error}
        onRetry={refetch}
      />

      {/* Load More Section */}
      {loadingState === 'success' && displayedGames.length > 0 && (
        <LoadMore
          currentCount={displayedCount}
          totalCount={totalCount}
          onLoadMore={loadMore}
          isLoading={isLoadingMore}
        />
      )}

      {/* SEO Content Section */}
      <SeoContent />

      {/* Footer */}
      <Footer />

      {/* Floating Chat Button */}
      <FloatingChat />

      {/* Bottom Navigation */}
      <BottomNav activeItem="casino" />
    </div>
  );
}

function App() {
  return (
    <FavoritesProvider>
      <AppContent />
    </FavoritesProvider>
  );
}

export default App;
