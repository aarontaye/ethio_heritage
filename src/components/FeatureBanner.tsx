import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureBannerProps {
  title: string;
  subtitle: string;
  image: string;
  onClick?: () => void;
}

const FeatureBanner: React.FC<FeatureBannerProps> = ({ title, subtitle, image, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden relative"
    >
      <div className="flex items-center justify-between relative z-10">
        <div className="flex-1 text-left">
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm text-white/90">{subtitle}</p>
        </div>
        <div className="ml-4 flex items-center">
          <img 
            src={image} 
            alt="Feature" 
            className="w-16 h-16 rounded-xl object-cover shadow-md"
          />
          <ArrowRight size={20} className="ml-3" />
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
      </div>
    </button>
  );
};