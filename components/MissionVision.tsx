import React from 'react';
import { useLanguage } from '../LanguageContext';

const MissionCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="group flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex-shrink-0 mr-4 text-[#00A0A0]">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
    </div>
  </div>
);

const MissionVision: React.FC = () => {
  const { texts } = useLanguage();

  return (
    <section id="mission" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Coluna da Missão */}
          <div id="nossa-missao">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                <a href="#nossa-missao" className="hover:text-[#D95F43] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D95F43] focus:ring-offset-4 focus:ring-offset-white rounded-md">
                    {texts.missionVision.missionTitle}
                </a>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {texts.missionVision.missionText}
            </p>
            <div className="space-y-4">
              <MissionCard 
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01V5M12 20v-1m0 1v.01M12 18v-1m0-1v- .01M12 16v-1m0-1V14m0 2.01V15M21 12h-1m-1 0h.01M20 12h-1m-1 0h.01M4 12H3m1 0h-.01M5 12H4m1 0h-.01m16.68.99l-.01.01M19.07 4.93l-.01.01M4.93 19.07l-.01.01M19.07 19.07l-.01-.01M4.93 4.93l-.01-.01" /></svg>}
                title={texts.missionVision.missionPoint1}
              />
              <MissionCard 
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                title={texts.missionVision.missionPoint2}
              />
              <MissionCard 
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 10h.01" /></svg>}
                title={texts.missionVision.missionPoint3}
              />
            </div>
          </div>

          {/* Coluna da Visão */}
          <div id="nossa-visao">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                <a href="#nossa-visao" className="hover:text-[#D95F43] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D95F43] focus:ring-offset-4 focus:ring-offset-white rounded-md">
                    {texts.missionVision.visionTitle}
                </a>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {texts.missionVision.visionText}
            </p>
             <div className="mt-8 border-l-4 border-[#D95F43] pl-6">
                <p className="text-xl text-gray-700 italic">
                    {texts.missionVision.visionQuote}
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;