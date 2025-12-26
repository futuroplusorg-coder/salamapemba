import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const LOGO_URL = 'https://i.postimg.cc/FFS3k8Dv/1.png';

const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className={`flex items-center space-x-2 text-gray-700 font-medium ${className}`}>
      <button 
        onClick={() => setLanguage('pt')} 
        className={`${language === 'pt' ? 'font-bold text-[#D95F43]' : 'hover:text-[#D95F43]'} transition-colors duration-200`}
        aria-pressed={language === 'pt'}
      >
        PT
      </button>
      <span className="opacity-50">/</span>
      <button 
        onClick={() => setLanguage('en')} 
        className={`${language === 'en' ? 'font-bold text-[#D95F43]' : 'hover:text-[#D95F43]'} transition-colors duration-200`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
  const { texts } = useLanguage();

  const navItems = [
    { href: '#hero', label: texts.header.home },
    {
      label: texts.header.about,
      submenu: [
        { href: '#about', label: texts.header.mission },
        { href: '#/report', label: texts.header.report },
        { href: '#experiences', label: texts.header.experiences },
        { href: '#/team', label: texts.header.team },
      ],
    },
    { href: '#gallery', label: texts.header.gallery },
    { href: '#contact', label: texts.header.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#/')) {
      window.location.hash = href;
    } else {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else if (href === '#hero') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setIsAboutSubMenuOpen(false);
  };

  const renderNavLinks = (isMobile = false) => {
    return navItems.map((item, index) => {
      if (item.submenu) {
        if (isMobile) {
          return (
            <div key={index} className="w-full text-center">
              <button
                onClick={() => setIsAboutSubMenuOpen(!isAboutSubMenuOpen)}
                className="w-full text-2xl font-medium text-gray-700 hover:text-[#D95F43] transition-colors duration-300 cursor-pointer flex justify-center items-center"
              >
                {item.label}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${isAboutSubMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isAboutSubMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pt-4 space-y-4">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.href}
                      href={subItem.href}
                      onClick={(e) => handleLinkClick(e, subItem.href)}
                      className="block text-xl font-medium text-gray-600 hover:text-[#D95F43] transition-colors duration-300 cursor-pointer"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#D95F43] transition-colors duration-300 font-medium py-2 cursor-pointer">
                {item.label}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-2">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.href}
                      href={subItem.href}
                      onClick={(e) => handleLinkClick(e, subItem.href)}
                      className="block w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#D95F43] transition-colors duration-200"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      }
      return (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleLinkClick(e, item.href)}
          className={`${isMobile ? 'text-2xl' : ''} font-medium text-gray-700 hover:text-[#D95F43] transition-colors duration-300 cursor-pointer`}
        >
          {item.label}
        </a>
      );
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFF8EB]/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center space-x-2">
            <img src={LOGO_URL} alt="Salama Pemba Logo" className="h-12 md:h-16 transition-transform duration-300 hover:scale-110" style={{ mixBlendMode: 'multiply' }} />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
            <LanguageSwitcher />
          </nav>
          <button className="md:hidden text-gray-700 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Alternar menu">
            {isMobileMenuOpen ? (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div 
            className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#FFF8EB] shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
        >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 p-8">
                {renderNavLinks(true)}
                <LanguageSwitcher className="absolute bottom-10 text-xl" />
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;