interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className = '' }: SkeletonProps) => {
  return <div className={`skeleton rounded ${className}`} />;
};

export const GameCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <Skeleton className="aspect-square w-full" />
      <div className="p-2">
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
};

export const GameGridSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {Array.from({ length: 9 }).map((_, index) => (
        <GameCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const BannerSkeleton = () => {
  return <Skeleton className="w-full h-40 rounded-xl" />;
};

export const Spinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary rounded-full animate-spin`}
      />
    </div>
  );
};
