import React from 'react';
import { useLanguage } from '../LanguageContext';

const CEO_IMAGE_URL = 'https://i.postimg.cc/pXs2brWp/Red-and-Beige-Vintage-Bold-Typographic-Beauty-Salon-Logo-2.png';

const Team: React.FC = () => {
  const { texts } = useLanguage();

  const handleTeamClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#/team';
  };

  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{texts.team.title}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {texts.team.subtitle}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <a 
              href="#/team"
              onClick={handleTeamClick}
              className="group block bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
            >
              <div className="relative inline-block">
                <img
                  src={CEO_IMAGE_URL}
                  alt="Fátima Salama, CEO & Fundadora"
                  className="mx-auto mb-4 w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-[#D95F43] transition-colors duration-300"
                />
                 <div className="absolute bottom-2 right-2 bg-[#D95F43] text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {texts.team.ceo}
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Fátima Salama</h3>
              <p className="text-gray-500 mt-1 font-medium">{texts.team.ceo} & {texts.team.founder}</p>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {texts.team.ceoQuote}
              </p>
              <span className="mt-6 inline-block text-[#00A0A0] font-bold group-hover:text-[#D95F43] transition-colors duration-300">
                {texts.team.viewTeam}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
