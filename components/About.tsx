import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const AuthenticityIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
);

const SustainabilityIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a5 5 0 01-4.88-6.26C4.033 9.122 4.41 7.18 5.89 5.89c1.48-1.29 3.418-1.857 5.12-1.89A5 5 0 0116 9.12c.033 1.702-.527 3.63-1.81 5.11-1.284 1.48-3.213 2.05-5.11 1.77z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a5 5 0 005-5M9 17v-4"></path></svg>
);

const PassionIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
);

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { texts } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://i.postimg.cc/VvvhD167/5.jpg" 
              alt="Grupo de turistas num barco dhow em Pemba" 
              className="rounded-lg shadow-2xl object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{texts.about.title}</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {texts.about.p1}
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {texts.about.p2}
            </p>
            <div className="flex space-x-4">
                <span className="bg-[#4FD1C5]/20 text-[#00A0A0] px-4 py-2 rounded-full font-semibold">{texts.about.tag1}</span>
                <span className="bg-[#D95F43]/20 text-[#D95F43] px-4 py-2 rounded-full font-semibold">{texts.about.tag2}</span>
                <span className="bg-yellow-500/20 text-yellow-600 px-4 py-2 rounded-full font-semibold">{texts.about.tag3}</span>
            </div>

            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-8 px-8 py-3 bg-transparent border-2 border-[#D95F43] text-[#D95F43] font-bold rounded-full text-lg hover:bg-[#D95F43] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D95F43] focus:ring-offset-4 focus:ring-offset-white flex items-center space-x-2"
                aria-expanded={isExpanded}
                aria-controls="about-more-info"
            >
                <span>{isExpanded ? texts.about.showLess : texts.about.learnMore}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <div 
              id="about-more-info"
              className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="pt-6 border-t border-gray-200/80 mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{texts.about.coreValues}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-[#00A0A0] bg-[#4FD1C5]/20 p-3 rounded-full"><AuthenticityIcon /></div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{texts.about.authenticityTitle}</h4>
                      <p className="text-gray-600">{texts.about.authenticityText}</p>
                    </div>
                  </div>
                   <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-[#D95F43] bg-[#D95F43]/20 p-3 rounded-full"><SustainabilityIcon /></div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{texts.about.sustainabilityTitle}</h4>
                      <p className="text-gray-600">{texts.about.sustainabilityText}</p>
                    </div>
                  </div>
                   <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-yellow-600 bg-yellow-500/20 p-3 rounded-full"><PassionIcon /></div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{texts.about.passionTitle}</h4>
                      <p className="text-gray-600">{texts.about.passionText}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200/80">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{texts.about.ourStory}</h3>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <img 
                      src="https://i.postimg.cc/k4xY3xGj/founder.jpg"
                      alt="Fundador da Salama Pemba" 
                      className="w-24 h-24 rounded-full object-cover shadow-lg flex-shrink-0"
                    />
                    <div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {texts.about.founderStory1}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {texts.about.founderStory2}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
