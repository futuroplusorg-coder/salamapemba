import React from 'react';
import { useLanguage } from '../LanguageContext';

const BahiaSolutionsBanner: React.FC = () => {
  const { texts } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-gray-50 to-slate-100 border-t border-b border-gray-200">
      <div className="container mx-auto px-6 py-5 text-center">
        <p className="text-gray-600 text-sm md:text-base">
          {texts.bahiaBanner.line1}{' '}
          <a 
            href="https://bahiasolutions.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-teal-600 hover:text-teal-500 transition-colors duration-300"
          >
            Bahia Solutions
          </a>
        </p>
        <p className="mt-2 text-gray-500 text-xs md:text-sm">
          <a 
            href="tel:+258875728882"
            className="hover:text-gray-800 transition-colors duration-300"
          >
            +258 875728882
          </a>
        </p>
      </div>
    </section>
  );
};

export default BahiaSolutionsBanner;
