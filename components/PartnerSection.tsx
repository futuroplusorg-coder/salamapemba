import React from 'react';
import { FINAL_PARTNERS } from '../constants';
import PartnerCard from './PartnerCard';
import { useLanguage } from '../LanguageContext';

const PartnerSection: React.FC = () => {
  const { texts } = useLanguage();
  const institucionais = FINAL_PARTNERS.filter(p => p.category === 'institucional');
  const privados = FINAL_PARTNERS.filter(p => p.category === 'privado');

  return (
    <section id="partners" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{texts.partners.title}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            {texts.partners.subtitle}
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Seção Institucional */}
          <section id="institutional-partners">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xs font-bold text-slate-500 tracking-widest uppercase whitespace-nowrap">{texts.partners.institutional}</h3>
              <div className="h-px w-full bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-stretch">
              {institucionais.map((partner, idx) => (
                <PartnerCard key={partner.id} partner={partner} index={idx} />
              ))}
            </div>
          </section>

          {/* Seção Privada */}
          <section id="private-partners">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xs font-bold text-slate-500 tracking-widest uppercase whitespace-nowrap">{texts.partners.private}</h3>
              <div className="h-px w-full bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-stretch">
              {privados.map((partner, idx) => (
                <PartnerCard key={partner.id} partner={partner} index={idx + institucionais.length} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default PartnerSection;
