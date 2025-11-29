
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

// Reusing the SVG Concept locally or imports if preferred, but for simplicity defining inline here too
const MoeLogoSmall = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 140 C40 140 70 150 100 140 C130 150 160 140 160 140 V80 C160 80 130 90 100 80 C70 90 40 80 40 80 V140 Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M100 80 V140" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
      <path d="M100 80 V50" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
      <path d="M100 30 L90 50 H110 L100 30 Z" fill="currentColor" />
    </svg>
  );

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-[#E0B043]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
                 <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 p-2">
                    <MoeLogoSmall className="text-[#E0B043] w-full h-full" />
                 </div>
                 <div>
                    <h3 className="text-white text-xl font-bold">مدرسة عاكف الفايز</h3>
                    <p className="text-xs text-gray-400">مديرية تربية لواء قصبة عمان</p>
                 </div>
            </div>
            <p className="text-sm leading-7 mb-6 opacity-80 text-justify">
              مدرسة حكومية رائدة تابعة لوزارة التربية والتعليم. نسعى لتقديم تعليم نوعي وبناء شخصية قيادية لطلابنا وفق أحدث المعايير التربوية والقيم الوطنية.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/akefschool?locale=ar_AR" target="_blank" rel="noreferrer" className="bg-[#1E90FF] p-2.5 rounded-full text-white hover:scale-110 transition-transform hover-shake shadow-lg hover:shadow-blue-500/50">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2.5 rounded-full text-white hover:scale-110 transition-transform hover-shake shadow-lg hover:shadow-pink-500/50">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-r-4 border-[#E0B043] pr-3">روابط مهمة</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-[#E0B043] transition-colors hover:translate-x-[-5px] inline-block">الصفحة الرئيسية</a></li>
              <li><a href="#about" className="hover:text-[#E0B043] transition-colors hover:translate-x-[-5px] inline-block">عن المدرسة</a></li>
              <li><a href="https://moe.gov.jo/" target="_blank" rel="noreferrer" className="hover:text-[#E0B043] transition-colors hover:translate-x-[-5px] inline-block">وزارة التربية والتعليم</a></li>
              <li><a href="#contact" className="hover:text-[#E0B043] transition-colors hover:translate-x-[-5px] inline-block">تقديم شكوى / اقتراح</a></li>
            </ul>
          </div>

          {/* Column 3: Recent Tags */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 border-r-4 border-[#E0B043] pr-3">وسوم نشطة</h4>
             <div className="flex flex-wrap gap-2">
                {['#الخطة_التطويرية', '#بيئة_الطلبة', '#الإدارة_والقيادة', '#البرلمان_الطلابي', '#لمدرستي_أنتمي', '#التعليم_المهني'].map(tag => (
                    <span key={tag} className="bg-gray-800 text-xs px-3 py-1 rounded-md hover:bg-[#0A3E91] hover:text-white transition-colors cursor-default border border-gray-700">
                        {tag}
                    </span>
                ))}
             </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمدرسة عاكف الفايز الأساسية للبنين.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
             <span>تصميم وتطوير:</span>
             <span className="text-[#E0B043] font-bold">وليد مصطفى</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
