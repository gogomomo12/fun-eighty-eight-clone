import type { Category, CategoryTab } from '../../types';
import { categoriesData } from '../../data/mockData';

interface CategoryTabsProps {
  selectedCategory: Category | null;
  onCategorySelect: (category: Category | null) => void;
  onSearchClick: () => void;
  isSearchOpen: boolean;
}

export const CategoryTabs = ({
  selectedCategory,
  onCategorySelect,
  onSearchClick,
  isSearchOpen,
}: CategoryTabsProps) => {
  const handleTabClick = (category: Category) => {
    if (selectedCategory === category) {
      onCategorySelect(null);
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="flex overflow-x-auto hide-scrollbar">
        {/* Search Button */}
        <button
          onClick={onSearchClick}
          className={`shrink-0 flex flex-col items-center justify-center px-4 py-3 min-w-16 transition-colors border-r border-gray-100 ${
            isSearchOpen ? 'text-primary' : 'text-gray-400 hover:text-primary'
          }`}
        >
          <div className="h-7 flex items-center justify-center mb-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <span className="text-[10px] font-medium uppercase">Search</span>
        </button>

        {/* Category Tabs */}
        {categoriesData.map((tab: CategoryTab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`shrink-0 flex flex-col items-center justify-center px-4 py-3 min-w-16 relative transition-colors ${
              selectedCategory === tab.id
                ? 'text-primary'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {/* Icon Area */}
            <div className="relative h-7 flex items-center justify-center mb-1">
              {/* Home icon with count */}
              {tab.id === 'inicio' && (
                <div className="relative">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  {tab.count && (
                    <span className="absolute -top-2 -right-3 bg-primary text-white text-[8px] font-bold px-1 rounded">
                      {tab.count.toLocaleString()}
                    </span>
                  )}
                </div>
              )}

              {/* Popular icon */}
              {tab.id === 'popular' && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              )}

              {/* Jackpot icon with HOT badge */}
              {tab.id === 'jackpot' && (
                <div className="relative">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                  </svg>
                  <span className="absolute -top-1 -right-2 text-[8px] font-bold text-orange-500">HOT</span>
                </div>
              )}

              {/* New icon with badge */}
              {tab.id === 'new' && (
                <div className="relative">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                  <span className="absolute -top-1 -right-3 text-[8px] font-bold text-green-500">NEW</span>
                </div>
              )}

              {/* Slots icon */}
              {tab.id === 'slots' && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2V7h2v10zm4 0h-2V7h2v10zm-8 0H6V7h2v10z" />
                </svg>
              )}

              {/* Live icon */}
              {tab.id === 'live' && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
              )}

              {/* Casino icon */}
              {tab.id === 'casino' && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
              )}

              {/* Table icon */}
              {tab.id === 'table' && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                </svg>
              )}
            </div>

            {/* Label */}
            <span className="text-[10px] font-medium whitespace-nowrap uppercase">
              {tab.label}
            </span>

            {/* Active Indicator */}
            {selectedCategory === tab.id && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
