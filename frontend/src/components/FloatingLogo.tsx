import React, { useState, useEffect } from 'react';

import { ArrowUp } from 'lucide-react';

export const FloatingLogo = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.pageYOffset > 300) {

        setIsVisible(true);

      } else {

        setIsVisible(false);

      }

    };

    window.addEventListener(
      'scroll',
      toggleVisibility
    );

    return () =>
      window.removeEventListener(
        'scroll',
        toggleVisibility
      );

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };

  return (

    <div
      className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >

      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 rounded-2xl overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600" />

        <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-2xl" />

        <div className="relative z-10 flex items-center justify-center w-full h-full">

          <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform duration-300" />

        </div>

      </button>

    </div>

  );

};