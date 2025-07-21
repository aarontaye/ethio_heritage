import React from 'react';
import { Home, Archive, MapPin, ShoppingBag, GraduationCap, Plus } from 'lucide-react';

type Page = 'home' | 'archive' | 'tours' | 'marketplace' | 'education';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home' as Page, icon: Home, label: 'Home' },
    { id: 'archive' as Page, icon: Archive, label: 'Archive' },
    { id: 'tours' as Page, icon: MapPin, label: 'Tours' },
    { id: 'marketplace' as Page, icon: ShoppingBag, label: 'Market' },
    { id: 'education' as Page, icon: GraduationCap, label: 'Learn' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          const isCenter = index === 2;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                isCenter
                  ? 'bg-primary-600 text-white shadow-lg transform -translate-y-2'
                  : isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {isCenter ? (
                <div className="relative">
                  <Icon size={24} />
                  <Plus size={12} className="absolute -top-1 -right-1" />
                </div>
              ) : (
                <Icon size={20} />
              )}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};