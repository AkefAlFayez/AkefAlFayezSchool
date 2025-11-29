
import React, { useState, useEffect } from 'react';
import { NEWS_DATA } from '../constants';
import { Calendar, ChevronLeft, ChevronRight, ArrowLeft, Trophy, BookOpen, Mic, AlertCircle, Users, Star, Activity, FileText } from 'lucide-react';
import { NewsItem } from '../types';

// Helper to get visual representation based on category/content
const getCardHeader = (item: NewsItem) => {
  let Icon = Activity;
  let bgClass = "bg-blue-600";
  
  if (item.category.includes("رياضة") || item.content.includes("فاز")) {
    Icon = Trophy;
    bgClass = "bg-[#D97706]"; // Amber
  } else if (item.category.includes("تعليم") || item.category.includes("تميز") || item.content.includes("مسابقة")) {
    Icon = BookOpen;
    bgClass = "bg-[#059669]"; // Emerald
  } else if (item.category.includes("إذاعة") || item.category.includes("مؤتمر")) {
    Icon = Mic;
    bgClass = "bg-[#7C3AED]"; // Violet
  } else if (item.category.includes("تعليمات") || item.category.includes("هام")) {
    Icon = AlertCircle;
    bgClass = "bg-[#DC2626]"; // Red
  } else if (item.category.includes("قيادة") || item.category.includes("مبادرة")) {
    Icon = Star;
    bgClass = "bg-[#E0B043]"; // Gold
  } else if (item.category.includes("أولياء") || item.category.includes("مجتمع")) {
    Icon = Users;
    bgClass = "bg-[#0284c7]"; // Sky Blue
  }

  return (
    <div className={`h-28 ${bgClass} relative overflow-hidden flex items-center justify-center`}>
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
         
         {/* Abstract Shapes */}
         <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
         <div className="absolute -left-6 -top-6 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
         
         {/* Center Icon */}
         <div className="relative z-10 flex flex-col items-center gap-2 transform transition-transform group-hover:scale-110 duration-300">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md shadow-inner border border-white/20">
                <Icon size={32} className="text-white" />
            </div>
            <span className="text-white font-bold text-xs tracking-wider uppercase bg-black/20 px-3 py-1 rounded-full">
                {item.category}
            </span>
         </div>
    </div>
  );
};

// Skeleton Loader Component
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col animate-pulse">
    {/* Header Skeleton */}
    <div className="h-28 bg-gray-200 relative"></div>
    
    {/* Content Skeleton */}
    <div className="p-6 flex flex-col flex-1">
      {/* Date */}
      <div className="w-24 h-4 bg-gray-200 rounded mb-4"></div>
      
      {/* Title */}
      <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-6 bg-gray-300 rounded mb-4"></div>
      
      {/* Body */}
      <div className="space-y-2 mb-6 flex-1">
        <div className="w-full h-3 bg-gray-100 rounded"></div>
        <div className="w-full h-3 bg-gray-100 rounded"></div>
        <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
      </div>
      
      {/* Footer */}
      <div className="mt-auto flex justify-between items-center">
        <div className="w-16 h-4 bg-gray-200 rounded"></div>
        <div className="w-20 h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

export const NewsFeed: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds simulated load time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = NEWS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > totalItems - itemsToShow ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
        const next = prev - 1;
        return next < 0 ? totalItems - itemsToShow : next;
    });
  };

  // Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchEnd(null);
    setTouchStart(null);
  };

  return (
    <div className="py-24 bg-gray-50 select-none overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div className="text-right w-full md:w-auto">
            <div className="flex items-center gap-2 mb-2 justify-end md:justify-start">
                <span className="text-sm font-bold text-gray-500">المركز الإعلامي</span>
                <FileText className="text-[#E0B043]" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A3E91] text-right">الأنشطة والأخبار</h2>
          </div>
          
          <div className="hidden md:flex gap-3 items-center mt-4 md:mt-0">
            <button 
              onClick={prevSlide} 
              disabled={isLoading}
              className={`w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#0A3E91] hover:border-[#0A3E91]'}`} 
              aria-label="Previous"
            >
              <ChevronRight size={20} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={isLoading}
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#0A3E91] text-white shadow-lg transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1E90FF]'}`} 
              aria-label="Next"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {isLoading ? (
          // SKELETON LOADER
          <div className="overflow-hidden -mx-4 px-4 py-4">
            <div className="flex w-full">
              {Array.from({ length: itemsToShow }).map((_, index) => (
                 <div key={index} className="px-4 shrink-0" style={{ width: `${100 / itemsToShow}%` }}>
                    <SkeletonCard />
                 </div>
              ))}
            </div>
          </div>
        ) : (
          // CAROUSEL CONTAINER
          <div className="relative mb-16" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="overflow-hidden -mx-4 px-4 py-4">
               <div className="flex w-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(${currentIndex * (100 / itemsToShow)}%)` }}>
                {NEWS_DATA.map((item) => (
                  <div key={item.id} className="px-4 shrink-0 transition-all duration-300" style={{ width: `${100 / itemsToShow}%` }}>
                    
                    {/* Card */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col hover:-translate-y-2">
                      
                      {/* Visual Header (No Images) */}
                      {getCardHeader(item)}

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 border-b border-gray-50 pb-4">
                           <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                               <Calendar size={12} />
                               <span>{item.date}</span>
                           </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#0A3E91] transition-colors leading-relaxed line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-7 flex-1">
                          {item.content}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-2">
                           <div className="flex flex-wrap gap-1">
                               {item.tags?.slice(0, 1).map((tag, i) => (
                                   <span key={i} className="text-[10px] text-[#0A3E91] bg-blue-50 px-2 py-1 rounded font-medium">{tag}</span>
                               ))}
                           </div>
                           <a 
                              href={item.facebookUrl || "https://www.facebook.com/akefschool?locale=ar_AR"} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#E0B043] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                           >
                               اقرأ المزيد
                               <ArrowLeft size={16} />
                           </a>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Controls Dots */}
        {!isLoading && (
          <div className="flex justify-center gap-2 md:hidden mb-12">
              {Array.from({ length: Math.min(5, totalItems) }).map((_, idx) => (
                  <div 
                      key={idx} 
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex % 5 ? 'w-8 bg-[#0A3E91]' : 'w-2 bg-gray-300'}`}
                  ></div>
              ))}
          </div>
        )}

      </div>
    </div>
  );
};
