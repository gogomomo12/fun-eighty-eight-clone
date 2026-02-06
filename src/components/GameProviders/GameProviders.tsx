import { useState, useEffect, useRef } from 'react';
import type { Provider } from '../../types';
import { fetchProviders } from '../../api/mockApi';

interface GameProvidersProps {
  selectedProvider: string | null;
  onProviderSelect: (providerId: string | null) => void;
}

// Provider icon component with brand colors
const ProviderIcon = ({ providerId, size = 'normal' }: { providerId: string; size?: 'normal' | 'large' }) => {
  const iconSize = size === 'large' ? 'w-10 h-10' : 'w-8 h-8';
  const textSize = size === 'large' ? 'text-xs' : 'text-[10px]';

  const icons: Record<string, React.ReactNode> = {
    'kiron': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>K</span>
      </div>
    ),
    'microgaming': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>MG</span>
      </div>
    ),
    'mplay': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>mp</span>
      </div>
    ),
    'onyxgaming': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>OX</span>
      </div>
    ),
    'onetouch': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>1T</span>
      </div>
    ),
    'ortiz': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>OZ</span>
      </div>
    ),
    '1x2gaming': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>1x2</span>
      </div>
    ),
    '3oaks': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>3O</span>
      </div>
    ),
    'aspect': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>A</span>
      </div>
    ),
    'atmosfera': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>AT</span>
      </div>
    ),
    'belatra': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>BL</span>
      </div>
    ),
    'bgaming': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>BG</span>
      </div>
    ),
    'bombay': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center`}>
        <span className={`text-gray-800 font-black ${textSize}`}>BB</span>
      </div>
    ),
    'betgames': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>BG</span>
      </div>
    ),
    'blueprint': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>BP</span>
      </div>
    ),
    'booming': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>BM</span>
      </div>
    ),
    'caleta': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>CL</span>
      </div>
    ),
    'creedroomz': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>CR</span>
      </div>
    ),
    'evoplay': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>EP</span>
      </div>
    ),
    'endorphina': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>EN</span>
      </div>
    ),
    'pragmatic': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>PP</span>
      </div>
    ),
    'pgsoft': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>PG</span>
      </div>
    ),
    'netent': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>NE</span>
      </div>
    ),
    'playngo': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>PG</span>
      </div>
    ),
    'redtiger': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>RT</span>
      </div>
    ),
    'habanero': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>HB</span>
      </div>
    ),
    'spadegaming': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>SG</span>
      </div>
    ),
    'jili': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>JL</span>
      </div>
    ),
    'fachai': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center`}>
        <span className={`text-yellow-400 font-black ${textSize}`}>FC</span>
      </div>
    ),
    'cq9': (
      <div className={`${iconSize} rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center`}>
        <span className={`text-white font-black ${textSize}`}>CQ9</span>
      </div>
    ),
  };

  return icons[providerId] || (
    <div className={`${iconSize} rounded-lg bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center`}>
      <span className={`text-white font-black ${textSize}`}>?</span>
    </div>
  );
};

export const GameProviders = ({
  selectedProvider,
  onProviderSelect,
}: GameProvidersProps) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  const handleProviderClick = (providerId: string) => {
    if (selectedProvider === providerId) {
      onProviderSelect(null);
    } else {
      onProviderSelect(providerId);
    }
    setShowModal(false);
  };

  // Drag handlers for mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsPaused(false), 1000);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Get the first 15 providers for the marquee (providers with games)
  const marqueeProviders = providers.slice(0, 15);

  if (isLoading) {
    return (
      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-28 h-16 bg-gray-100 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 px-4">
          <h2 className="text-gray-700 font-medium text-sm">Game Providers</h2>
          <button
            onClick={() => setShowModal(true)}
            className="text-primary text-xs font-semibold px-2 py-1 rounded hover:bg-primary/10 transition-colors"
          >
            MORE
          </button>
        </div>

        {/* Infinite Scrolling Marquee with Drag Support */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-3 px-4 animate-marquee"
            style={{
              width: 'max-content',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {/* First set of providers */}
            {marqueeProviders.map((provider) => (
              <button
                key={`first-${provider.id}`}
                onClick={() => handleProviderClick(provider.id)}
                className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all ${
                  selectedProvider === provider.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-100 bg-gray-50 hover:border-primary/50'
                }`}
              >
                <ProviderIcon providerId={provider.id} />
                <span className="text-[10px] text-gray-400">({provider.gameCount})</span>
              </button>
            ))}
            {/* Duplicate set for seamless loop */}
            {marqueeProviders.map((provider) => (
              <button
                key={`second-${provider.id}`}
                onClick={() => handleProviderClick(provider.id)}
                className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all ${
                  selectedProvider === provider.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-100 bg-gray-50 hover:border-primary/50'
                }`}
              >
                <ProviderIcon providerId={provider.id} />
                <span className="text-[10px] text-gray-400">({provider.gameCount})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sheet Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end animate-fade-in">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full bg-white rounded-t-2xl max-h-[80vh] flex flex-col animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-primary text-white rounded-t-2xl">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="font-semibold">Game Providers</span>
                <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                  {providers.length}
                </span>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Providers Grid */}
            <div className="overflow-y-auto flex-1 p-4">
              <div className="grid grid-cols-2 gap-3">
                {providers.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => handleProviderClick(provider.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                      selectedProvider === provider.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-100 bg-gray-50 hover:border-primary/50'
                    }`}
                  >
                    <div className="shrink-0">
                      <ProviderIcon providerId={provider.id} size="large" />
                    </div>
                    <span className={`font-semibold text-xs text-left ${
                      selectedProvider === provider.id ? 'text-primary' : 'text-gray-700'
                    }`}>
                      {provider.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
