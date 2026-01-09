import React from 'react';
import { useLanguage } from '../LanguageContext';

const LOGO_URL = 'https://i.postimg.cc/FFS3k8Dv/1.png';

const Footer: React.FC = () => {
  const { texts, language } = useLanguage();

  const navItems = [
    { href: '#about', label: texts.header.about },
    { href: '#about', label: texts.header.mission },
    { href: '#experiences', label: texts.header.experiences },
    { href: '#gallery', label: texts.header.gallery },
    { href: '#/team', label: texts.header.team },
    { href: '#contact', label: texts.header.contact },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Coluna 1: Logo, Descrição e Social */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero" className="mb-4">
              <img src={LOGO_URL} alt="Salama Pemba Logo" className="h-16" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
            <p className="max-w-xs text-gray-400 text-sm leading-relaxed">
              {texts.footer.description}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/salamapemba" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#4FD1C5] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </a>
              <a href="https://instagram.com/salamapemba" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#4FD1C5] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.048 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.048-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.048-1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.316 2.427-.364C9.79 2.013 10.144 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
              </a>
              <a href="https://linkedin.com/company/salamapemba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#4FD1C5] transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wider uppercase">{texts.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.href + item.label}><a href={item.href} className="hover:text-[#4FD1C5] transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wider uppercase">{texts.footer.talkToUs}</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <svg className="w-5 h-5 text-[#D95F43] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>{texts.footer.address}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                 <svg className="w-5 h-5 text-[#D95F43] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 <a href="mailto:salamapemba.mz@gmail.com" className="hover:text-[#4FD1C5] transition-colors">salamapemba.mz@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                 <svg className="w-5 h-5 text-[#D95F43] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+258844275585" className="hover:text-[#4FD1C5] transition-colors">+258 84 427 5585</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright e Créditos */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Salama Pemba Tourism Experiences. {texts.footer.copyright}</p>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>
              {texts.footer.bahiaCredit}{' '}
              <a 
                href="https://bahiasolutions.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold bg-gradient-to-r from-[#D95F43] to-[#00A0A0] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-300"
              >
                Bahia Solutions
              </a>
            </p>
            <p className="mt-2 tracking-wider">
              <a 
                href="tel:+258875728882"
                className="font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                +258 875728882
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;