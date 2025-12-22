import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { texts } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-bottom hero-background-animated"
        style={{ backgroundImage: "url('https://i.postimg.cc/LsJxNC5p/Whats-App-Image-2025-10-23-at-2-33-28-PM.jpg')", zIndex: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-4 text-shadow" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          {texts.hero.title}
        </h1>
        <p className="text-xl md:text-2xl font-light drop-shadow-md" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          {texts.hero.subtitle}
        </p>
        <a href="#experiences" className="mt-8 px-8 py-4 bg-[#D95F43] text-white font-bold rounded-full text-lg hover:bg-[#E5734B] transition-transform duration-300 hover:scale-105 shadow-lg">
          {texts.hero.button}
        </a>
      </div>
      <div className="absolute bottom-10 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};

export default Hero;
