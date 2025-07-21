import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  color: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, title, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {title}
      </span>
    </button>
  );
};

export default CategoryCard;