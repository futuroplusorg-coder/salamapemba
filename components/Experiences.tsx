import React from 'react';
import { useLanguage } from '../LanguageContext';

const experienceData = [
  { key: "quirimbas", image: "https://i.postimg.cc/kXYVWxYc/Whats-App-Image-2025-12-26-at-4-55-31-PM.jpg" },
  { key: "snorkeling", image: "https://i.postimg.cc/MKkJRBsV/WhatsApp_Image_2025-10-23_at_2.36.25_PM.jpg" },
  { key: "cultural", image: "https://i.postimg.cc/zXWx2S4R/Whats_App_Image_2025_12_26_at_5_36_27_PM_(1).jpg" },
  { key: "sunset", image: "https://i.postimg.cc/s26XFWbV/Whats-App-Image-2025-12-26-at-6-01-44-PM.jpg" },
  { key: "cooking", image: "https://i.postimg.cc/fyTy1KR3/Whats_App_Image_2025_12_26_at_6_22_57_PM_(1).jpg" },
  { key: "relax", image: "https://i.postimg.cc/jj2L8vCh/Whats_App_Image_2025_12_26_at_6_36_29_PM.jpg" },
];

const ExperienceCard: React.FC<{ title: string; description: string; image: string; href: string }> = ({ title, description, image, href }) => {
  const { texts } = useLanguage();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <a href={href} onClick={handleClick} className="group relative block overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 leading-relaxed opacity-100 transition-opacity duration-300 group-hover:opacity-0 h-20">{description}</p>
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="font-bold text-lg">{texts.experiences.viewMore}</span>
          {/* FIX: Removed duplicate attributes from the SVG element. */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;