
import React from 'react';
import { ArrowLeft, BookOpen, Star, ShieldCheck, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#0A3E91] text-white overflow-hidden min-h-[600px] flex items-center">
      
      {/* Abstract Background Patterns (Pure CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#1E90FF]/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#E0B043]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        {/* CSS Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-right space-y-8">
            
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 px-4 py-2 rounded-full backdrop-blur-sm animate-pulse">
                <span className="w-2 h-2 bg-[#E0B043] rounded-full"></span>
                <span className="text-blue-100 text-sm font-bold">الموقع الرسمي للعام الدراسي 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              مدرسة عاكف الفايز
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#E0B043] to-[#FCD34D] mt-2">
                الأساسية للبنين
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-loose font-medium opacity-90">
              بيئة تعليمية قيادية متطورة. نسعى لبناء جيل منتمٍ، واعٍ، ومسؤول، مسلح بالعلم والقيم والمهارات المستقبلية.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <a 
                href="https://darsak.gov.jo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#E0B043] text-[#0A3E91] font-bold px-8 py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(224,176,67,0.5)] hover:bg-[#f0c053] transform transition hover:-translate-y-1 flex items-center gap-3"
              >
                 التسجيل الإلكتروني
                 <ArrowLeft size={20} />
              </a>
              <a 
                href="https://darsak.gov.jo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                دخول المعلمين
              </a>
            </div>
          </div>

          {/* Hero Abstract Graphic (No Images) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
                {/* Center Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF] to-[#0A3E91] rounded-full opacity-20 animate-pulse border border-white/10"></div>
                <div className="absolute inset-8 bg-gradient-to-tl from-[#0A3E91] to-[#1E90FF] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

                {/* Floating Info Cards */}
                <div className="absolute top-0 right-10 bg-white p-5 rounded-2xl shadow-xl animate-float z-20 border-r-4 border-[#E0B043] flex items-center gap-4 min-w-[180px]">
                    <div className="bg-blue-50 p-2 rounded-lg">
                        <BookOpen className="text-[#0A3E91]" size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm">تعليم متطور</h3>
                        <p className="text-[10px] text-gray-500">مناهج حديثة</p>
                    </div>
                </div>

                <div className="absolute bottom-20 left-0 bg-white p-5 rounded-2xl shadow-xl animate-float z-30 border-r-4 border-[#1E90FF] flex items-center gap-4 min-w-[180px]" style={{ animationDelay: '1.5s' }}>
                    <div className="bg-blue-50 p-2 rounded-lg">
                        <ShieldCheck className="text-[#0A3E91]" size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm">بيئة آمنة</h3>
                        <p className="text-[10px] text-gray-500">قيم ومسؤولية</p>
                    </div>
                </div>

                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0A3E91] text-white rounded-full shadow-2xl z-10 flex flex-col items-center justify-center w-40 h-40 border-4 border-[#E0B043]/30">
                     <GraduationCap className="text-[#E0B043] mb-1" size={48} />
                     <span className="font-black text-xl">جيل</span>
                     <span className="text-xs text-blue-200">القيادة</span>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Modern Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </div>
  );
};
