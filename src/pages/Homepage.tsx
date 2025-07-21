import React, { useState, useEffect } from 'react';
import { MapPin, BookOpen, Palette, Languages, Star, Clock } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import FeatureBanner from '../components/FeatureBanner';
import ShimmerCard from '../components/ShimmerCard';

type Page = 'home' | 'archive' | 'tours' | 'marketplace' | 'education';

interface HomepageProps {
  onNavigate: (page: Page) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { icon: MapPin, title: 'Historical Sites', color: 'bg-ethiopian-green', page: 'tours' as Page },
    { icon: BookOpen, title: 'Ancient Manuscripts', color: 'bg-ethiopian-yellow', page: 'archive' as Page },
    { icon: Palette, title: 'Arts & Crafts', color: 'bg-ethiopian-red', page: 'marketplace' as Page },
    { icon: Languages, title: 'Language Learning', color: 'bg-primary-600', page: 'education' as Page },
  ];

  const heritageHighlights = [
    {
      title: 'Rock-Hewn Churches of Lalibela',
      description: 'Marvel at the 12th-century architectural wonder carved from solid rock',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.9,
      category: 'Historical Site'
    },
    {
      title: 'Ancient Ge\'ez Manuscript',
      description: 'Explore the sacred texts written in Ethiopia\'s ancient script',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.8,
      category: 'Manuscript'
    },
    {
      title: 'Traditional Coffee Ceremony',
      description: 'Experience the birthplace of coffee culture',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.9,
      category: 'Tradition'
    }
  ];

  return (
    <div className="px-4 space-y-6 animate-fade-in">
      {/* Categories Grid */}
      <section>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              color={category.color}
              onClick={() => onNavigate(category.page)}
            />
          ))}
        </div>
      </section>

      {/* Feature Banner */}
      <section>
        <FeatureBanner
          title="Discover the Wonders of Ethiopia"
          subtitle="Explore 3000 years of rich cultural heritage"
          image="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
          onClick={() => onNavigate('tours')}
        />
      </section>

      {/* Heritage Highlight of the Day */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Heritage Highlights</h2>
          <button className="text-primary-600 dark:text-primary-400 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, index) => (
              <ShimmerCard key={index} className="h-32" />
            ))
          ) : (
            heritageHighlights.slice(0, 2).map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex space-x-4">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                        {highlight.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{highlight.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {highlight.description}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-500">
                      <Clock size={10} className="mr-1" />
                      <span>Featured today</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Ethiopian Heritage at a Glance
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">9</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">UNESCO Sites</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-ethiopian-green">80+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-ethiopian-red">3000+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Years History</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;