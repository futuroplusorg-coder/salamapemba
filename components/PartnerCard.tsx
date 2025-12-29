import React from 'react';
import { Partner } from '../types';

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index }) => {
  return (
    <div 
      className="group flex items-center justify-center transition-all duration-500 logo-grid-animation w-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="
        w-full h-24 sm:h-28 md:h-32 flex items-center justify-center 
        bg-gradient-to-br from-white/90 to-slate-50/50 
        backdrop-blur-md rounded-xl 
        shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_1px_3px_rgba(0,0,0,0.02)] 
        border border-slate-200/50
        transition-all duration-500 
        group-hover:bg-white
        group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] 
        group-hover:border-indigo-200/40
        group-hover:-translate-y-1
      ">
        <img 
          src={partner.logoUrl} 
          alt={partner.name} 
          title={partner.name}
          role="presentation"
          className="max-w-[75%] max-h-[60%] object-contain transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};

export default PartnerCard;
