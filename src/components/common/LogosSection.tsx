'use client';
import { useEffect, useRef } from 'react';

const LogosSection = () => {
  const logos = [
    { src: "/cargill.png", alt: "Cargill" },
    { src: "/syngenta.png", alt: "Syngenta" },
    { src: "/corteva.png", alt: "Corteva" },
    { src: "/cf.png", alt: "CF" },
    { src: "/vital.png", alt: "vital" },
    { src: "/LouisDreyfus.png", alt: "Louis Dreyfus" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate total width of one set of logos
    const scrollWidth = container.scrollWidth / 3;
    
    // Reset position when animation completes half way (after moving one full set)
    const animation = container.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${scrollWidth}px)` }
      ],
      {
        duration: 15000, // 15 seconds for one set
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <section className="bg-white border-y border-[#E5E7DE] w-full overflow-hidden relative">
      <div ref={containerRef} className="flex">
        {[...Array(3)].map((_, setIndex) => (
          logos.map((logo, index) => (
            <div
              key={`${setIndex}-${index}`}
              className="px-[30px] py-[60px] border-r border-[#E5E7DE] flex-shrink-0"
            >
              <img 
                className="h-20 w-auto" 
                src={logo.src} 
                alt={logo.alt}
                draggable="false"
                loading="lazy"
              />
            </div>
          ))
        ))}
      </div>
      
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default LogosSection;