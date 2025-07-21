import React from 'react';
import { MapPin, Clock, Star, Users, Camera } from 'lucide-react';

const VirtualTours: React.FC = () => {
  const tours = [
    {
      id: 1,
      title: 'Rock-Hewn Churches of Lalibela',
      description: 'Explore the magnificent 12th-century churches carved directly from solid volcanic rock',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '45 min',
      rating: 4.9,
      visitors: '12.5k',
      highlights: ['Church of St. George', 'Underground tunnels', '360° views'],
      location: 'Lalibela, Amhara Region'
    },
    {
      id: 2,
      title: 'Ancient City of Axum',
      description: 'Discover the legendary kingdom and the mysterious obelisks of ancient Axum',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '35 min',
      rating: 4.8,
      visitors: '8.2k',
      highlights: ['Obelisk of Axum', 'Queen of Sheba Palace', 'St. Mary of Zion Church'],
      location: 'Axum, Tigray Region'
    },
    {
      id: 3,
      title: 'Fasil Ghebbi, Gondar',
      description: 'Step into the royal enclosure of Ethiopian emperors with castles and palaces',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '40 min',
      rating: 4.7,
      visitors: '6.8k',
      highlights: ['Fasilides Castle', 'Debre Berhan Selassie Church', 'Royal baths'],
      location: 'Gondar, Amhara Region'
    },
    {
      id: 4,
      title: 'Harar Jugol - The Walled City',
      description: 'Wander through the narrow alleys of the 4th holiest city in Islam',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '30 min',
      rating: 4.6,
      visitors: '5.1k',
      highlights: ['Ancient city walls', 'Traditional Harari houses', 'Hyena feeding'],
      location: 'Harar, Harari Region'
    }
  ];

  const featuredTour = tours[0];

  return (
    <div className="px-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Virtual Heritage Tours
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Experience Ethiopia's UNESCO World Heritage Sites
        </p>
      </div>

      {/* Featured Tour */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={featuredTour.image}
            alt={featuredTour.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              🔴 LIVE TOUR
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
              <Camera size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {featuredTour.title}
            </h2>
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {featuredTour.rating}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {featuredTour.description}
          </p>
          
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{featuredTour.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={16} />
              <span>{featuredTour.visitors} visitors</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>{featuredTour.location}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Tour Highlights:
            </h4>
            <div className="flex flex-wrap gap-2">
              {featuredTour.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-medium transition-colors">
            Start Virtual Tour
          </button>
        </div>
      </div>

      {/* Other Tours */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          More Heritage Sites
        </h3>
        
        <div className="space-y-4">
          {tours.slice(1).map((tour, index) => (
            <div
              key={tour.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex space-x-4">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {tour.title}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {tour.rating}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                    {tour.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Clock size={10} />
                        <span>{tour.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users size={10} />
                        <span>{tour.visitors}</span>
                      </span>
                    </div>
                    <button className="text-primary-600 dark:text-primary-400 text-xs font-medium hover:underline">
                      Start Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Stats */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Virtual Tour Statistics
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">9</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">UNESCO Sites</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">32k+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Virtual Visitors</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4.8</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Avg Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;