import React, { useState } from 'react';
import { Search, Filter, Star, MessageCircle, Heart, MapPin } from 'lucide-react';

const ArtisanMarketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Crafts' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'pottery', name: 'Pottery' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'woodwork', name: 'Woodwork' },
  ];

  const artisans = [
    {
      id: 1,
      name: 'Almaz Tadesse',
      specialty: 'Traditional Weaving',
      location: 'Addis Ababa',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Master weaver specializing in traditional Ethiopian textiles and habesha kemis',
      category: 'textiles',
      featured_product: {
        name: 'Habesha Kemis',
        price: '$120',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 2,
      name: 'Bekele Worku',
      specialty: 'Clay Pottery',
      location: 'Bahir Dar',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Third-generation potter creating traditional Ethiopian coffee pots and ceremonial vessels',
      category: 'pottery',
      featured_product: {
        name: 'Traditional Jebena',
        price: '$45',
        image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 3,
      name: 'Hanan Mohammed',
      specialty: 'Silver Jewelry',
      location: 'Harar',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Artisan jeweler crafting traditional Ethiopian silver jewelry with ancient techniques',
      category: 'jewelry',
      featured_product: {
        name: 'Ethiopian Cross Pendant',
        price: '$85',
        image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 4,
      name: 'Tadesse Kebede',
      specialty: 'Wood Carving',
      location: 'Jimma',
      rating: 4.7,
      reviews: 73,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Master wood carver creating traditional Ethiopian furniture and decorative items',
      category: 'woodwork',
      featured_product: {
        name: 'Carved Wooden Stool',
        price: '$65',
        image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    }
  ];

  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || artisan.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Artisan Marketplace
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Connect with Ethiopian master craftspeople
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search artisans or crafts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
        />
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm font-medium ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Artisan Cards */}
      <div className="space-y-4">
        {filteredArtisans.map((artisan, index) => (
          <div
            key={artisan.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Artisan Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {artisan.name}
                    </h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {artisan.specialty}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {artisan.rating} ({artisan.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={14} />
                      <span>{artisan.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                {artisan.bio}
              </p>
            </div>

            {/* Featured Product */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Featured Craft
              </h4>
              <div className="flex items-center space-x-4">
                <img
                  src={artisan.featured_product.image}
                  alt={artisan.featured_product.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    {artisan.featured_product.name}
                  </h5>
                  <p className="text-lg font-bold text-primary-600 dark:text-primary-400 mt-1">
                    {artisan.featured_product.price}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    View Details
                  </button>
                  <button className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline text-sm">
                    <MessageCircle size={16} />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArtisans.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No artisans found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Support Banner */}
      <div className="bg-gradient-to-r from-ethiopian-green to-ethiopian-yellow rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-2">Support Ethiopian Artisans</h3>
        <p className="text-sm text-white/90 mb-4">
          Every purchase helps preserve traditional crafts and supports local communities
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold">150+</div>
            <div className="text-xs text-white/80">Active Artisans</div>
          </div>
          <div>
            <div className="text-xl font-bold">2.5k+</div>
            <div className="text-xs text-white/80">Crafts Sold</div>
          </div>
          <div>
            <div className="text-xl font-bold">98%</div>
            <div className="text-xs text-white/80">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanMarketplace;