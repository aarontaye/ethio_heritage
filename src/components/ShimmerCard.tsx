import React from 'react';

interface ShimmerCardProps {
  className?: string;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm ${className}`}>
      <div className="shimmer bg-gray-200 dark:bg-gray-700 h-32 rounded-xl mb-3"></div>
      <div className="shimmer bg-gray-200 dark:bg-gray-700 h-4 rounded mb-2"></div>
      <div className="shimmer bg-gray-200 dark:bg-gray-700 h-3 rounded w-3/4"></div>
    </div>
  );
};

export default ShimmerCard;