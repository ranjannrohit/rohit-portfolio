import React, { useState, useEffect, useRef } from 'react';

import {
  Menu,
  X
} from 'lucide-react';

// Detect mobile before hydration

const getInitialMobile = () => {

  if (typeof window !== 'undefined') {

    return window.innerWidth < 768;

  }

  return false;

};

export const Navigation = () => {

  const [isMobile, setIsMobile] =
    useState(getInitialMobile);

  const [isVisible, setIsVisible] =
    useState(!getInitialMobile());

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState('hero');

  const lastScrollYRef = useRef(0);

  const navigationItems = [

    { name: 'Home', href: '#hero' },

    { name: 'About', href: '#about' },

    { name: 'Experience', href: '#experience' },

    { name: 'Skills', href: '#skills' },

    { name: 'Projects', href: '#projects' },

    { name: 'Education', href: '#education' },

    { name: 'Contact', href: '#contact' },

  ];

  // Mobile detection

  useEffect(() => {

    const checkMobile = () => {

      const mobile =
        window.innerWidth < 768;

      setIsMobile(mobile);

      if (!mobile && window.scrollY < 100) {

        setIsVisible(true);

      }

    };

    window.addEventListener(
      'resize',
      checkMobile
    );

    return () =>
      window.removeEventListener(
        'resize',
        checkMobile
      );

  }, []);

  // Scroll behavior

  useEffect(() => {

    let ticking = false;

    const handleScroll = () => {

      if (!ticking) {

        window.requestAnimationFrame(() => {

          const currentScrollY =
            window.scrollY;

          const scrollDelta =
            currentScrollY -
            lastScrollYRef.current;

          if (isMobile) {

            if (currentScrollY <= 100) {

              setIsVisible(false);

              lastScrollYRef.current =
                currentScrollY;

              ticking = false;

              return;

            }

            if (Math.abs(scrollDelta) >= 10) {

              if (scrollDelta < 0) {

                setIsVisible(true);

              } else {

                setIsVisible(false);

              }

              lastScrollYRef.current =
                currentScrollY;

            }

          } else {

            if (Math.abs(scrollDelta) >= 10) {

              if (
                scrollDelta < 0 ||
                currentScrollY < 100
              ) {

                setIsVisible(true);

              } else {

                setIsVisible(false);

              }

              lastScrollYRef.current =
                currentScrollY;

            } else if (currentScrollY < 100) {

              setIsVisible(true);

            }

          }

          ticking = false;

        });

        ticking = true;

      }

    };

    // Active section detection

    const updateActiveSection = () => {

      const sections =
        navigationItems.map(item =>
          item.href.substring(1)
        );

      for (const section of sections.reverse()) {

        const element =
          document.getElementById(section);

        if (element) {

          const rect =
            element.getBoundingClientRect();

          if (rect.top <= 150) {

            setActiveSection(section);

            break;

          }

        }

      }

    };

    const onScroll = () => {

      handleScroll();

      updateActiveSection();

    };

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      );

  }, [isMobile]);

  // Navigation click

  const handleNavClick = (
    href: string
  ) => {

    const element =
      document.querySelector(href);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth'
      });

    }

    setIsMobileMenuOpen(false);

  };

  // Scroll to top

  const handleLogoClick = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };

  // Navbar animation

  const getNavClasses = () => {

    if (!isVisible) {

      return 'fixed top-0 left-0 right-0 z-50 -translate-y-full pointer-events-none transition-transform duration-300 ease-out';

    }

    return 'fixed top-0 left-0 right-0 z-50 translate-y-0 transition-transform duration-300 ease-out';

  };

  return (

    <>

      <nav className={getNavClasses()}>

        {/* Background */}

        <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border-b border-white/5">

          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

            <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">

              {/* Branding */}

              <div
                className="flex-shrink-0 cursor-pointer"
                onClick={handleLogoClick}
              >

                <div className="flex items-center gap-3">

                  {/* Your Logo */}

                  <div className="relative">

                    <img
                      src="/uploads/logo.png"
                      alt="Rohit Ranjan Logo"
                      className="h-11 w-11 md:h-12 md:w-12 object-contain rounded-xl"
                    />

                  </div>

                  {/* Text */}

                  <div className="leading-none">

                    <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

                      Rohit Ranjan

                    </h2>

                    <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-500 mt-1">

                      Data Analytics

                    </p>

                  </div>

                </div>

              </div>

              {/* Desktop Navigation */}

              <div className="hidden lg:block">

                <div className="flex items-center space-x-1 xl:space-x-2">

                  {navigationItems.map((item) => {

                    const isActive =
                      activeSection ===
                      item.href.substring(1);

                    return (

                      <button
                        key={item.name}
                        onClick={() =>
                          handleNavClick(item.href)
                        }
                        className={`relative text-sm xl:text-base px-4 py-2 rounded-full transition-all duration-300 font-medium group ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >

                        {isActive && (

                          <span className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-full" />

                        )}

                        <span className="relative z-10">

                          {item.name}

                        </span>

                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 ${
                          isActive
                            ? 'w-1/2'
                            : 'w-0 group-hover:w-1/3'
                        }`} />

                      </button>

                    );

                  })}

                </div>

              </div>

              {/* Mobile Menu Button */}

              <div className="lg:hidden">

                <button
                  onClick={() =>
                    setIsMobileMenuOpen(
                      !isMobileMenuOpen
                    )
                  }
                  className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >

                  {isMobileMenuOpen ? (

                    <X size={24} />

                  ) : (

                    <Menu size={24} />

                  )}

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Mobile Menu */}

        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        }`}>

          <div className="bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/10">

            <div className="px-4 py-4 space-y-1">

              {navigationItems.map((item) => {

                const isActive =
                  activeSection ===
                  item.href.substring(1);

                return (

                  <button
                    key={item.name}
                    onClick={() =>
                      handleNavClick(item.href)
                    }
                    className={`block w-full text-left text-base py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-violet-600/20 to-pink-600/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >

                    {item.name}

                  </button>

                );

              })}

            </div>

          </div>

        </div>

      </nav>

      {/* Spacer */}

      <div className="h-16 sm:h-18 md:h-20" />

    </>

  );

};