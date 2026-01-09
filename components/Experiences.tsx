import React from 'react';
import { useLanguage } from '../LanguageContext';

const experienceData = [
  { key: "quirimbas", image: "https://i.postimg.cc/kXYVWxYc/Whats-App-Image-2025-12-26-at-4-55-31-PM.jpg" },
  { key: "snorkeling", image: "https://i.postimg.cc/MKkJRBsV/WhatsApp_Image_2025-10-23_at_2.36.25_PM.jpg" },
  { key: "cultural", image: "https://i.postimg.cc/zXWx2S4R/Whats_App_Image_2025_12_26_at_5_36_27_PM_(1).jpg" },
  { key: "sunset", image: "https://i.postimg.cc/s26XFWbV/Whats_App-Image-2025-12-26-at-6-01-44-PM.jpg" },
  { key: "cooking", image: "https://i.postimg.cc/fyTy1KR3/Whats_App_Image_2025_12_26_at_6_22_57_PM_(1).jpg" },
  { key: "relax", image: "https://i.postimg.cc/jj2L8vCh/Whats_App_Image_2025_12_26_at_6_36_29_PM.jpg" },
  { key: "junior", image: "https://i.postimg.cc/K8KvTMCP/Whats-App-Image-2026-01-09-at-11-32-57-AM.jpg" },
];

const ExperienceCard: React.FC<{ title: string; description: string; image: string; href: string; viewMoreText: string; }> = ({ title, description, image, href, viewMoreText }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className="group relative block h-[480px] overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
    >
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
      
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
          <h3 className="text-3xl font-bold mb-2" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            {title}
          </h3>
          <p className="text-base text-gray-200 leading-relaxed max-w-sm opacity-90 line-clamp-3">
            {description}
          </p>
        </div>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="font-semibold text-white inline-flex items-center">
              {viewMoreText}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
        </div>
      </div>
    </a>
  );
};


const Experiences: React.FC = () => {
  const { texts } = useLanguage();
  const experiences = texts.experiences.items as Record<string, { title: string; description: string; }>;

  return (
    <section id="experiences" className="py-20 md:py-32 bg-[#FFF8EB] scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{texts.experiences.title}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {texts.experiences.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((exp) => (
            <ExperienceCard 
              key={exp.key} 
              href={`#/experience/${exp.key}`}
              image={exp.image}
              title={experiences[exp.key]?.title || ''}
              description={experiences[exp.key]?.description || ''}
              viewMoreText={texts.experiences.viewMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;