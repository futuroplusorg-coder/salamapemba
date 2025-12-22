import React from 'react';
import { useLanguage } from '../LanguageContext';

const experienceData = [
  { key: "quirimbas", image: "https://i.postimg.cc/pLfsQyCL/18.avif" },
  { key: "snorkeling", image: "https://i.postimg.cc/15pdBW5Q/17.avif" },
  { key: "cultural", image: "https://i.postimg.cc/1XKpnNPM/9.jpg" },
  { key: "sunset", image: "https://i.postimg.cc/mgC5dmb6/12.jpg" },
  { key: "cooking", image: "https://i.postimg.cc/C5RvbNPJ/4.jpg" },
  { key: "relax", image: "https://i.postimg.cc/VsZp5SZP/1.jpg" },
];

const ExperienceCard: React.FC<{ title: string; description: string; image: string; }> = ({ title, description, image }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <img src={image} alt={title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 leading-relaxed">{description}</p>
    </div>
  </div>
);


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
