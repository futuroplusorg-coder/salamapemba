import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import MissionVision from './components/MissionVision';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ActivityReport from './components/ActivityReport';
import CEOPage from './components/CEOPage';
import { LanguageProvider, useLanguage } from './LanguageContext';

const LOGO_URL = 'https://i.postimg.cc/FFS3k8Dv/1.png';

// Component for the dedicated report page
const ReportPage: React.FC = () => {
  const { texts } = useLanguage();
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  return (
    <div className="bg-[#FFF8EB]">
      <header className="bg-[#FFF8EB]/90 shadow-lg backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" onClick={goHome} className="flex items-center space-x-2">
            <img src={LOGO_URL} alt="Salama Pemba Logo" className="h-12 md:h-16 transition-transform duration-300 hover:scale-110" style={{ mixBlendMode: 'multiply' }} />
          </a>
          <a href="#" onClick={goHome} className="text-gray-700 hover:text-[#D95F43] transition-colors duration-300 font-medium py-2 cursor-pointer">
            {texts.ceoPage.goHome}
          </a>
        </div>
      </header>
      <main>
        <ActivityReport />
      </main>
      <Footer />
    </div>
  );
};

const MainApp: React.FC = () => {
  const [route, setRoute] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash.startsWith('#/')) {
        setRoute(newHash);
        window.scrollTo(0, 0); // Scroll to top on page change
      } else { // This handles '' and '#' for the main page
        setRoute('');
      }
    };
    
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#/report') {
    return <ReportPage />;
  }

  if (route === '#/team') {
    return <CEOPage />;
  }

  return (
    <div className="bg-[#FFF8EB] text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <MissionVision />
        <Experiences />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 600);
    }, 2500);

    return () => clearTimeout(splashTimer);
  }, []);
  
  return (
    <LanguageProvider>
      {isLoading ? <SplashScreen isFadingOut={isFadingOut} /> : <MainApp />}
    </LanguageProvider>
  );
};

export default App;