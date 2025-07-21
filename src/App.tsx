import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import CulturalArchive from './pages/CulturalArchive';
import VirtualTours from './pages/VirtualTours';
import ArtisanMarketplace from './pages/ArtisanMarketplace';
import Educational from './pages/Educational';

type Page = 'home' | 'archive' | 'tours' | 'marketplace' | 'education';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'archive':
        return <CulturalArchive />;
      case 'tours':
        return <VirtualTours />;
      case 'marketplace':
        return <ArtisanMarketplace />;
      case 'education':
        return <Educational />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="pb-20 pt-4">
          {renderPage()}
        </main>
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;