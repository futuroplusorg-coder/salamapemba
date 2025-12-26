import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../LanguageContext';

const images = [
  { src: "https://i.postimg.cc/TP261XtP/Whats-App-Image-2025-10-23-at-2-36-24-PM-1.jpg" },
  { src: "https://i.postimg.cc/1XFx2R3C/Whats-App-Image-2025-10-23-at-2-36-25-PM-1.jpg" },
  { src: "https://i.postimg.cc/MKkJRBsV/Whats-App-Image-2025-10-23-at-2-36-25-PM.jpg" },
  { src: "https://i.postimg.cc/7LRW4vcF/Whats-App-Image-2025-10-23-at-2-33-28-PM-1.jpg" },
  { src: "https://i.postimg.cc/65yshV4K/13.jpg" },
  { src: "https://i.postimg.cc/pLfsQyCL/18.avif" },
  { src: "https://i.postimg.cc/15pdBW5Q/17.avif" },
  { src: "https://i.postimg.cc/VvvhD167/5.jpg" },
  { src: "https://i.postimg.cc/VsZp5SZP/1.jpg" },
  { src: "https://i.postimg.cc/1XKpnNPM/9.jpg" },
  { src: "https://i.postimg.cc/mgC5dmb6/12.jpg" },
  { src: "https://i.postimg.cc/C5RvbNPJ/4.jpg" },
  { src: "https://i.postimg.cc/NfBFfjFq/15.jpg" },
  { src: "https://i.postimg.cc/hGzP3Jyg/14.jpg" },
];

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { texts } = useLanguage();

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsAnimatingOut(false);
    }, 300);
  }, []);

  const showNext = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen || isAnimatingOut) return;

      if (e.key === 'Escape') {
        closeModal();
      }
      if (e.key === 'ArrowRight') {
        showNext();
      }
      if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, isAnimatingOut, showNext, showPrev, closeModal]);


  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{texts.gallery.title}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {texts.gallery.subtitle}
          </p>
        </div>
        <div className="columns-2 md:columns-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="mb-4 break-inside-avoid group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(index)}
              >
              <img 
                src={image.src} 
                alt={`Galeria de Pemba ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-110 gallery-image-animation"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black/90 flex items-center justify-center z-[100] ${isAnimatingOut ? 'animate-fade-out' : 'animate-fade-in'}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-6 text-white text-5xl font-light hover:text-gray-300 z-[102]"
            onClick={closeModal}
            aria-label={texts.gallery.close}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 md:left-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[102]"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label={texts.gallery.prev}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div 
            className={`relative p-4 ${isAnimatingOut ? 'animate-zoom-out' : 'animate-zoom-in'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex].src}
              alt={`Galeria de Pemba ${selectedImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4 text-center">
                <p className="text-white text-sm bg-black/50 rounded-full px-3 py-1 inline-block opacity-80">
                  {selectedImageIndex + 1} / {images.length}
                </p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 md:right-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[102]"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label={texts.gallery.next}
            >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

        </div>
      )}

    </section>
  );
};

export default Gallery;