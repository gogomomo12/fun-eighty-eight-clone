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
      <div className="flex overflow-x-auto hide-scrollbar px-2">
        {/* Search Button */}
        <button
          onClick={onSearchClick}
          className={`shrink-0 flex flex-col items-center justify-center px-4 py-3 min-w-18 transition-colors border-r border-gray-100 ${
            isSearchOpen ? 'text-primary' : 'text-gray-500 hover:text-primary'
          }`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
            isSearchOpen ? 'bg-primary/10' : 'bg-gray-100'
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <span className="text-[10px] font-medium">SEARCH</span>
        </button>

        {/* Category Tabs */}
        {categoriesData.map((tab: CategoryTab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`shrink-0 flex flex-col items-center justify-center px-4 py-3 min-w-18 relative transition-colors ${
              selectedCategory === tab.id
                ? 'text-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {/* Top Icon/Badge Area */}
            <div className="relative h-8 flex items-center justify-center mb-1">
              {/* Count Badge (for HOME) */}
              {tab.count && (
                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  {tab.count.toLocaleString()}
                </span>
              )}

              {/* Emoji Icon (for POPULAR) */}
              {tab.icon && !tab.count && (
                <span className="text-xl">{tab.icon}</span>
              )}

              {/* Hot Badge (for JACKPOT) */}
              {tab.badge === 'hot' && !tab.count && !tab.icon && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
                  Hot!
                </span>
              )}

              {/* New Badge (for NEW) */}
              {tab.badge === 'new' && !tab.count && !tab.icon && (
                <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              )}

              {/* Default Icon (for others) */}
              {!tab.count && !tab.icon && !tab.badge && (
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              )}
            </div>

            {/* Label */}
            <span className="text-[10px] font-medium whitespace-nowrap">
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
