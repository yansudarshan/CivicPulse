import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';

interface SlideItem {
  src: string;
  alt: string;
  title: string;
  badge: string;
}

const slides: SlideItem[] = [
 {
    src: image1,
    alt: 'Municipal street cleanliness and civic infrastructure in urban India',
    title: 'Clean Public Streets & Safe Neighbourhoods',
    badge: 'Ward 04 • On-Ground Verification',
  },
  {
    src: image2,
    alt: 'Water Supply Restoration',
    title: 'Water Supply and Restoration Unit',
    badge: 'Water Supply Department • In Progress',
  },
  {
    src: image3,
    alt: 'Citizens reporting neighbourhood civic issues with CivicPulse',
    title: 'Active Citizen Grievance Redressal',
    badge: 'Direct Ward Escalation',
  },
  {
    src: image4,
    alt: 'Drainage Cleaning Work',
    title: 'Drainage Maintenance and Cleaning',
    badge: 'Drainage Department • Work Started',
  },
  {
    src: image5,
    alt: 'Modern smart city streetlights and municipal governance',
    title: 'Functional LED Streetlighting & Safe Walkways',
    badge: '100% Active Civic Amenities',
  },
];

export const CivicHeroIllustration: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // 2-second automatic sliding timer moving left
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 shadow-md group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="CivicPulse Urban Transformation Showcase Carousel"
    >
      {/* Sliding Track (Moves left as currentIndex increases) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-900">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full shrink-0 relative bg-slate-100">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover block"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Subtle bottom gradient overlay for legible caption text */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none"></div>

              {/* Slide Caption */}
              <div className="absolute bottom-4 left-4 right-16 sm:right-24 text-white pointer-events-none">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-orange-600/90 backdrop-blur-xs text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 shadow-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{slide.badge}</span>
                </span>
                <p className="text-sm sm:text-base font-bold text-white drop-shadow-sm line-clamp-1">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Status Badge (Top-Left) */}
      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-emerald-200/90 rounded-xl px-3 py-1.5 shadow-sm flex items-center space-x-2 text-slate-800 text-[11px] font-medium z-10">
        <span className="w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </span>
        <div>
          <span className="font-bold text-slate-900 block leading-tight">Civic Work Verified</span>
          <span className="text-[10px] text-slate-500">Live Municipal Visuals</span>
        </div>
      </div>

      {/* Slide Counter (Top-Right) */}
      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm z-10 flex items-center space-x-1">
        <Sparkles className="w-3 h-3 text-orange-600" />
        <span>{currentIndex + 1} / {slides.length}</span>
      </div>

      {/* Navigation Arrow Left (Previous Image) */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/80 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-orange-500 z-10 cursor-pointer"
        aria-label="Previous slide"
        title="Previous Image"
      >
        <ChevronLeft className="w-5 h-5 text-slate-700" />
      </button>

      {/* Navigation Arrow Right (Next Image) */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/80 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-orange-500 z-10 cursor-pointer"
        aria-label="Next slide"
        title="Next Image"
      >
        <ChevronRight className="w-5 h-5 text-slate-700" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 right-4 sm:right-6 flex items-center space-x-1.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${currentIndex === index
                ? 'w-6 h-2 bg-orange-500 shadow-xs'
                : 'w-2 h-2 bg-white/80 hover:bg-white border border-slate-300'
              }`}
            aria-label={`Go to image ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
};
