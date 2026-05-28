import React, { useEffect, useState } from 'react';

interface IntroPageProps {
  onComplete: () => void;
}

export const IntroPage: React.FC<IntroPageProps> = ({ onComplete }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress(prev => {

        if (prev >= 100) {

          clearInterval(interval);

          return 100;

        }

        return prev + 2;

      });

    }, 28);

    const timer = setTimeout(() => {

      onComplete();

    }, 2200);

    return () => {

      clearTimeout(timer);

      clearInterval(interval);

    };

  }, [onComplete]);

  return (

    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        {/* Gradient Orbs */}

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[150px] animate-pulse-glow" />

        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[150px] animate-pulse-glow"
          style={{ animationDelay: '0.5s' }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[180px]" />

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      </div>

      {/* Main Content */}

      <div className="text-center relative z-10">

        <div className="animate-scale-in">

          {/* Analytics Loader */}

          <div className="relative mb-10 flex justify-center">

            <div className="relative w-40 h-40 flex items-center justify-center">

              {/* Outer Ring */}

              <div className="absolute inset-0 rounded-full border border-violet-500/20" />

              {/* Animated Ring */}

              <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-violet-500 animate-spin" />

              {/* Second Ring */}

              <div
                className="absolute inset-3 rounded-full border-b-2 border-cyan-400 animate-spin"
                style={{
                  animationDirection: 'reverse',
                  animationDuration: '3s'
                }}
              />

              {/* Center Text */}

              <div className="text-center">

                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

                  RR

                </h1>

                <p className="text-gray-500 text-xs tracking-[0.3em] mt-2">

                  ANALYTICS

                </p>

              </div>

            </div>

          </div>

          {/* Name */}

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">

            Rohit Ranjan

          </h2>

          {/* Subtitle */}

          <p className="text-gray-500 text-sm md:text-base tracking-[0.2em] uppercase mb-10">

            Data Analyst • Power BI • Business Intelligence

          </p>

          {/* Progress Bar */}

          <div className="w-56 md:w-72 h-[6px] bg-white/5 rounded-full mx-auto overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />

          </div>

          {/* Loading Text */}

          <p className="mt-5 text-gray-600 text-sm">

            Initializing analytics experience...

          </p>

        </div>

      </div>

    </div>

  );

};