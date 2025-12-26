import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { useLanguage } from '../LanguageContext';

interface ExperienceDetailProps {
  experienceKey: string;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experienceKey }) => {
  const { texts } = useLanguage();
  
  const experienceItems = texts.experiences.items as Record<string, { title: string; description: string; }>;
  const experienceDetails = texts.experiences.details as Record<string, any>;

  const experience = experienceItems[experienceKey];
  const details = experienceDetails[experienceKey];

  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = ''; // Navigate to the top of the main page
  };

  if (!experience || !details || !details.images || details.images.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#FFF8EB] text-center p-4">
        <p className="text-2xl text-gray-700 mb-4">Experiência não encontrada ou sem imagens.</p>
        <a href="#" onClick={handleGoBack} className="inline-flex items-center text-lg text-[#D95F43] hover:underline group">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {texts.experiences.details.back}
        </a>
      </div>
    );
  }

  const { images: galleryImages } = details;
  const heroImage = galleryImages[0];

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] text-white">
          <img src={heroImage} alt={experience.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              {experience.title}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex justify-start mb-12">
              <a href="#" onClick={handleGoBack} className="inline-flex items-center text-gray-600 hover:text-[#D95F43] transition-colors duration-300 font-medium group">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                {texts.experiences.details.back}
              </a>
            </div>

            <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
               <p className="text-xl text-gray-600 mb-10 leading-relaxed border-l-4 border-[#00A0A0] pl-6">
                 {experience.description}
               </p>
            </div>
            
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryImages.map((img: string, index: number) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                    <img src={img} alt={`${experience.title} - Imagem ${index + 1}`} className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ExperienceDetail;