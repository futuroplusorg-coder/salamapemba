import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { texts } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#FFF8EB]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{texts.contact.title}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {texts.contact.subtitle}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
          <div className="flex items-center space-x-4">
            <svg className="w-8 h-8 text-[#D95F43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="text-lg text-gray-700">{texts.contact.location}</span>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-8 h-8 text-[#D95F43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <a href="mailto:reservas@salamapemba.co.mz" className="text-lg text-gray-700 hover:text-[#D95F43]">reservas@salamapemba.co.mz</a>
          </div>
           <div className="flex items-center space-x-4">
            <svg className="w-8 h-8 text-[#D95F43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <a href="tel:+258841234567" className="text-lg text-gray-700 hover:text-[#D95F43]">+258 84 123 4567</a>
          </div>
        </div>

        <a href="mailto:reservas@salamapemba.co.mz" className="px-10 py-4 bg-[#00A0A0] text-white font-bold rounded-full text-xl hover:bg-[#4FD1C5] transition-transform duration-300 hover:scale-105 shadow-lg">
          {texts.contact.button}
        </a>
      </div>
    </section>
  );
};

export default Contact;
