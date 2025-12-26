import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const AccordionItem: React.FC<{
  title: string;
  content: string | string[];
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full py-5 px-5 font-medium text-left text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D95F43]/50"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-xl font-bold">{title}</span>
          <svg
            className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-5 border-l-4 border-[#00A0A0] ml-5 mb-5">
          {typeof content === 'string' ? (
            <p className="text-gray-600 text-lg leading-relaxed">{content}</p>
          ) : (
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-lg leading-relaxed">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};


const About: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('mission');
  const { texts } = useLanguage();

  const handleAccordionClick = (accordionKey: string) => {
    setOpenAccordion(openAccordion === accordionKey ? null : accordionKey);
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Coluna Esquerda: Texto e Acordeão */}
            <div className="mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{texts.about.title}</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {texts.about.p1}
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {texts.about.p2}
              </p>

              <div className="mt-8 bg-white rounded-lg shadow-lg border border-gray-200/80">
                <AccordionItem
                  title={texts.about.missionTitle}
                  content={texts.about.missionText}
                  isOpen={openAccordion === 'mission'}
                  onClick={() => handleAccordionClick('mission')}
                />
                <AccordionItem
                  title={texts.about.visionTitle}
                  content={texts.about.visionText}
                  isOpen={openAccordion === 'vision'}
                  onClick={() => handleAccordionClick('vision')}
                />
                <AccordionItem
                  title={texts.about.valuesTitle}
                  content={texts.about.valuesItems}
                  isOpen={openAccordion === 'values'}
                  onClick={() => handleAccordionClick('values')}
                />
              </div>
            </div>

            {/* Coluna Direita: Imagem */}
            <div className="lg:sticky lg:top-32">
                <img 
                src="https://i.postimg.cc/VvvhD167/5.jpg" 
                alt="Grupo de turistas num barco dhow em Pemba" 
                className="rounded-lg shadow-2xl object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
