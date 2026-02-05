import { useState, useEffect, useRef, useCallback } from 'react';
import type { Banner } from '../../types';
import { fetchBanners } from '../../api/mockApi';
import { BannerSkeleton } from '../common/Loading';

export const BannerCarousel = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fetch banners on mount
  useEffect(() => {
    const loadBanners = async () => {
      setIsLoading(true);
      try {
        const data = await fetchBanners();
        setBanners(data);
      } catch (error) {
        console.error('Failed to load banners:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadBanners();
  }, []);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
  }, [banners.length]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    if (banners.length > 1) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [banners.length, startAutoPlay]);

  // Scroll to current slide
  useEffect(() => {
    if (carouselRef.current && banners.length > 0) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, banners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    stopAutoPlay();
    startAutoPlay();
  };

  if (isLoading) {
    return (
      <div className="px-4 py-3">
        <BannerSkeleton />
      </div>
    );
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="px-4 py-3">
      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-hidden rounded-xl snap-x snap-mandatory hide-scrollbar"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full flex-shrink-0 snap-center"
            >
              <div className="relative aspect-[2/1] bg-gradient-to-r from-primary to-blue-600 rounded-xl overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title || 'Banner'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                  <div className="p-4 text-white">
                    <p className="text-lg font-bold uppercase">GET A BONUS OF</p>
                    <p className="text-4xl font-bold text-yellow-400">10%</p>
                    <p className="text-sm">ON EVERY DEPOSIT</p>
                    <p className="text-xs text-gray-300 mt-1">*minimum deposit of $100</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
