import React, { useState } from 'react';
import { Search, Filter, BookOpen, Scroll, Crown, Church } from 'lucide-react';

const CulturalArchive: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: BookOpen },
    { id: 'manuscripts', name: 'Manuscripts', icon: Scroll },
    { id: 'artifacts', name: 'Artifacts', icon: Crown },
    { id: 'religious', name: 'Religious', icon: Church },
  ];

  const archiveItems = [
    {
      id: 1,
      title: 'Book of Enoch (Ge\'ez)',
      description: 'Ancient Ethiopian manuscript containing the complete Book of Enoch',
      category: 'manuscripts',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '15th Century',
      location: 'Monastery of Debre Libanos'
    },
    {
      id: 2,
      title: 'Crown of Emperor Menelik II',
      description: 'Royal crown worn during the Battle of Adwa victory',
      category: 'artifacts',
      image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '1896',
      location: 'National Museum of Ethiopia'
    },
    {
      id: 3,
      title: 'Kebra Nagast Manuscript',
      description: 'The Glory of the Kings - Ethiopia\'s national epic',
      category: 'manuscripts',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '14th Century',
      location: 'British Library'
    },
    {
      id: 4,
      title: 'Ark of the Covenant Replica',
      description: 'Sacred replica housed in St. Mary of Zion Church',
      category: 'religious',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: 'Ancient',
      location: 'Axum, Tigray'
    },
    {
      id: 5,
      title: 'Lucy (Australopithecus afarensis)',
      description: '3.2 million-year-old hominid fossil discovered in Ethiopia',
      category: 'artifacts',
      image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '3.2 Million Years Ago',
      location: 'National Museum of Ethiopia'
    },
    {
      id: 6,
      title: 'Garima Gospels',
      description: 'World\'s oldest complete illuminated Christian manuscripts',
      category: 'religious',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      date: '4th-6th Century',
      location: 'Garima Monastery'
    }
  ];

  const filteredItems = archiveItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Cultural Archive
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore Ethiopia's preserved heritage
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search manuscripts, artifacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
        />
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <Icon size={16} />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full capitalize">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {item.date}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  📍 {item.location}
                </span>
                <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <BookOpen size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No items found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default CulturalArchive;