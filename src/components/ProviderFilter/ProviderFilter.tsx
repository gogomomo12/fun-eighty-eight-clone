import { useState, useEffect, useRef } from 'react';
import type { Provider } from '../../types';
import { fetchProviders } from '../../api/mockApi';
import { Skeleton } from '../common/Loading';

interface ProviderFilterProps {
  selectedProvider: string | null;
  onProviderSelect: (providerId: string | null) => void;
}

export const ProviderFilter = ({
  selectedProvider,
  onProviderSelect,
}: ProviderFilterProps) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadProviders = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProviders();
        setProviders(data);
      } catch (error) {
        console.error('Failed to load providers:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProviders();
  }, []);

  const handleProviderClick = (providerId: string) => {
    if (selectedProvider === providerId) {
      onProviderSelect(null);
    } else {
      onProviderSelect(providerId);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-50 px-4! py-4!">
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-6 w-16 rounded" />
        </div>
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
      </div>
    );
  }

  const displayedProviders = showAll ? providers : providers.slice(0, 6);

  return (
    <div className="bg-gray-50 px-4! py-4!">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h2 className="text-gray-800 font-semibold text-sm">Game Providers</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary text-xs font-semibold px-2! py-1! rounded hover:bg-primary/10 transition-colors"
          >
            {showAll ? 'LESS' : 'MORE'}
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Provider Chips */}
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto hide-scrollbar pb-1"
      >
        {/* All Providers Button */}
        <button
          onClick={() => onProviderSelect(null)}
          className={`shrink-0 flex items-center gap-1.5 px-4! py-2! rounded-full text-xs font-semibold transition-all shadow-sm ${
            selectedProvider === null
              ? 'bg-primary text-white shadow-primary/30'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          All
        </button>

        {displayedProviders.map((provider) => (
          <button
            key={provider.id}
            onClick={() => handleProviderClick(provider.id)}
            className={`shrink-0 flex items-center gap-1.5 px-4! py-2! rounded-full text-xs font-semibold transition-all shadow-sm ${
              selectedProvider === provider.id
                ? 'bg-primary text-white shadow-primary/30'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            <span>{provider.name}</span>
            <span
              className={`px-1.5! py-0.5! rounded-full text-[10px] ${
                selectedProvider === provider.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {provider.gameCount}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
