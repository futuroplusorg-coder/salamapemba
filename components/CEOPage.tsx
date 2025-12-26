import React, { useState, useEffect, useCallback } from 'react';
import Footer from './Footer';
import { useLanguage } from '../LanguageContext';

const LOGO_URL = 'https://i.postimg.cc/FFS3k8Dv/1.png';

interface TeamMember {
  image: string;
  name: string;
}

const teamMembers: TeamMember[] = [
  {
    image: 'https://i.postimg.cc/Qt8NRwKX/Pemba-Futebol-Quizz-GERADO-POR-KING-NZAMBA-NKUKU-(5).png',
    name: 'Filomena Rebocho',
  },
  {
    image: 'https://i.postimg.cc/7LrpRzJk/Pemba-Futebol-Quizz-GERADO-POR-KING-NZAMBA-NKUKU-(3).png',
    name: 'Luis Soares',
  },
  {
    image: 'https://i.postimg.cc/P5yRS7H0/Pemba-Futebol-Quizz-GERADO-POR-KING-NZAMBA-NKUKU-(4).png',
    name: 'Salimo Saide',
  },
  {
    image: 'https://i.postimg.cc/RCTCvsCd/Pemba-Futebol-Quizz-GERADO-POR-KING-NZAMBA-NKUKU-(2).png',
    name: 'Telma Alves',
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember; onClick: () => void }> = ({ member, onClick }) => {
  return (
    <div 
      className="group text-center cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="overflow-hidden h-72">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
      </div>
    </div>
  );
};


const CEOPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
    const { texts } = useLanguage();

    const openModal = (index: number) => {
        setSelectedMemberIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = useCallback(() => {
        setIsAnimatingOut(true);
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            setIsModalOpen(false);
            setIsAnimatingOut(false);
        }, 300);
    }, []);

    const showNext = useCallback(() => {
        setSelectedMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, []);

    const showPrev = useCallback(() => {
        setSelectedMemberIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen || isAnimatingOut) return;

            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, isAnimatingOut, showNext, showPrev, closeModal]);
    
    const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '';
    };

    return (
        <div className="bg-[#FFF8EB]">
            <header className="bg-[#FFF8EB]/90 shadow-lg backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <a href="#" onClick={goHome} className="flex items-center space-x-2">
                        <img src={LOGO_URL} alt="Salama Pemba Logo" className="h-12 md:h-16 transition-transform duration-300 hover:scale-110" style={{ mixBlendMode: 'multiply' }} />
                    </a>
                    <a href="#" onClick={goHome} className="text-gray-700 hover:text-[#D95F43] transition-colors duration-300 font-medium py-2 cursor-pointer">
                        {texts.ceoPage.goHome}
                    </a>
                </div>
            </header>

            <main className="py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{texts.team.title}</h1>
                        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                            {texts.team.subtitle}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {teamMembers.map((member, index) => (
                        <TeamMemberCard 
                          key={member.name} 
                          member={member} 
                          onClick={() => openModal(index)} />
                      ))}
                    </div>
                </div>
            </main>

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
                        aria-label={texts.ceoPage.prevMember}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    <div 
                        className={`relative p-4 ${isAnimatingOut ? 'animate-zoom-out' : 'animate-zoom-in'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={teamMembers[selectedMemberIndex].image}
                            alt={teamMembers[selectedMemberIndex].name}
                            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4 text-center">
                            <div className="bg-black/60 rounded-lg p-4 inline-block backdrop-blur-sm">
                                <h3 className="text-white text-2xl font-bold">{teamMembers[selectedMemberIndex].name}</h3>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                        className="absolute right-4 md:right-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[102]"
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                        aria-label={texts.ceoPage.nextMember}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CEOPage;