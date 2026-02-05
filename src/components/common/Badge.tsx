interface BadgeProps {
  variant: 'hot' | 'new' | 'count';
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ variant, children, className = '' }: BadgeProps) => {
  const baseClasses = 'text-xs font-bold px-2 py-0.5 rounded-full';

  const variantClasses = {
    hot: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
    new: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
    count: 'bg-primary text-white',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
