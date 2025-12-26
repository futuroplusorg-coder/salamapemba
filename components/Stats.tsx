import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

// Custom hook for the counting animation triggered on scroll
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  // FIX: Initialize useRef with null to create a mutable ref and satisfy TypeScript.
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const startTime = performance.now();
          
          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentNum = Math.floor(progress * (end - start) + start);
            
            setCount(currentNum);

            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(animate);
            } else {
              setCount(end); // Ensure it ends on the target number
            }
          };

          animationFrameRef.current = requestAnimationFrame(animate);
          observer.unobserve(element); // Animate only once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration]);

  return { ref, count };
};

// Hook for triggering fade-in animations on scroll
const useAnimateOnScroll = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Icons
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FemaleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a6 6 0 100-12 6 6 0 000 12zm0 0v6m-3-3h6" /></svg>;
const MaleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 15a6 6 0 100-12A6 6 0 009 15zm6-12l6 6m0-6v6h-6" /></svg>;


const StatCard: React.FC<{ icon: React.ReactNode; colorClass: string; title: string; target: number; isPercentage?: boolean; delay: string }> = ({ icon, colorClass, title, target, isPercentage = false, delay }) => {
  const { ref, count } = useCountUp(target);
  const cardRef = useAnimateOnScroll();
  const displayValue = isPercentage ? `${count}%` : `+${count.toLocaleString('pt-PT')}`;

  const ringColorMap: { [key: string]: string } = {
    'bg-[#00A0A0]': '#00A0A0',
    'bg-[#D95F43]': '#D95F43',
    'bg-[#4FD1C5]': '#4FD1C5',
    'bg-yellow-500': '#FBBF24',
  };
  
  return (
    <button
      ref={cardRef}
      type="button"
      className="w-full bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 ease-in-out opacity-0 translate-y-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FFF8EB]"
      style={{
        transitionDelay: delay,
        '--tw-ring-color': ringColorMap[colorClass]
      } as React.CSSProperties}
      aria-label={`Ver mais sobre ${title}`}
    >
      <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${colorClass} text-white shadow-inner`}>
        {icon}
      </div>
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-gray-800 tabular-nums">
        {displayValue}
      </span>
      <p className="text-gray-500 mt-2 font-medium">{title}</p>
    </button>
  );
};

const Stats: React.FC = () => {
  const { texts } = useLanguage();
  return (
    <section id="stats" className="py-20 md:py-32 bg-[#FFF8EB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{texts.stats.title}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {texts.stats.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard icon={<UsersIcon />} colorClass="bg-[#00A0A0]" title={texts.stats.totalEnrollments} target={825} delay="0ms" />
          <StatCard icon={<FemaleIcon />} colorClass="bg-[#4FD1C5]" title={texts.stats.femaleTravelers} target={25} isPercentage={true} delay="200ms" />
          <StatCard icon={<MaleIcon />} colorClass="bg-yellow-500" title={texts.stats.maleTravelers} target={75} isPercentage={true} delay="300ms" />
        </div>
      </div>
    </section>
  );
};

export default Stats;