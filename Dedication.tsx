
import React from 'react';
import { Heart, Code } from 'lucide-react';

export const Dedication: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0A3E91] to-[#06265c] py-16 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E0B043 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0B043] rounded-full filter blur-[100px] opacity-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E90FF] rounded-full filter blur-[100px] opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Main Content Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:bg-white/10 transition-colors duration-500">
            
            {/* Image Section */}
            <div className="shrink-0 relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#E0B043] to-transparent rounded-full opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-inner bg-gray-200">
                    <img 
                        src="https://avatar.iran.liara.run/public/boy?username=Waleed" 
                        alt="وليد مصطفى" 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
                <div className="absolute bottom-1 right-1 bg-[#E0B043] text-[#0A3E91] p-2.5 rounded-full shadow-lg border-2 border-[#0A3E91] transform hover:scale-110 transition-transform">
                    <Code size={22} strokeWidth={2.5} />
                </div>
            </div>

            {/* Text Section */}
            <div className="text-center md:text-right flex-1 space-y-5">
                
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-[#E0B043]/10 text-[#E0B043] px-4 py-1.5 rounded-full text-sm font-bold border border-[#E0B043]/20">
                        <Heart size={14} fill="currentColor" />
                        <span>لمسة وفاء</span>
                    </div>
                    <div>
                        <h3 className="text-blue-200 text-sm font-bold opacity-80 mb-1">تصميم وتطوير الطالب</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                            وليد مصطفى
                        </h2>
                    </div>
                </div>

                <div className="relative pt-2">
                    <p className="text-lg md:text-xl text-white/90 leading-loose font-light italic relative z-10">
                        "أهدي هذا العمل إلى مدرستي الحبيبة <span className="text-[#E0B043] font-bold">عاكف الفايز</span>، وإلى مديرها ومعلميها الكرام، تقديراً لجهودهم في بناء الأجيال. آملاً أن يكون هذا الموقع نافذة خير للجميع."
                    </p>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};
