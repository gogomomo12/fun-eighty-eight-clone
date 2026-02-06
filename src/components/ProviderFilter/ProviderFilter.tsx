import { useState, useEffect } from 'react';
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

  if (isLoading) {
    return (
      <div className="bg-white border-t border-gray-100 py-3 px-4">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-20 rounded-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-t border-gray-100 py-3">
      {/* Provider Chips */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar px-4">
        {/* All Providers Button */}
        <button
          onClick={() => onProviderSelect(null)}
          className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
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

        {providers.map((provider) => (
          <button
            key={provider.id}
            onClick={() => handleProviderClick(provider.id)}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
              selectedProvider === provider.id
                ? 'bg-primary text-white shadow-primary/30'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            <span>{provider.name}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] ${
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
