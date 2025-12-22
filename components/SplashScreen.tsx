import React from 'react';
import { useLanguage } from '../LanguageContext';

const LOGO_URL = 'https://i.postimg.cc/FFS3k8Dv/1.png';

const SplashScreen: React.FC<{ isFadingOut: boolean }> = ({ isFadingOut }) => {
  const { texts } = useLanguage();

  return (
    <div className={`splash-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="text-center">
        <img
          src={LOGO_URL}
          alt="Salama Pemba Logo"
          className="h-32 md:h-40 splash-logo mx-auto"
          style={{ mixBlendMode: 'multiply' }}
        />
        <p className="splash-tagline">
          {texts.splash.tagline}
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
