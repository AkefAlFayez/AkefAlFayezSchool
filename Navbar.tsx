
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Custom Ministry of Education Style Logo Component
const MoeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" stroke="#0A3E91" strokeWidth="4" className="opacity-10" />
    
    {/* Open Book Base */}
    <path d="M40 140 C40 140 70 150 100 140 C130 150 160 140 160 140 V80 C160 80 130 90 100 80 C70 90 40 80 40 80 V140 Z" fill="white" stroke="#0A3E91" strokeWidth="6" strokeLinejoin="round"/>
    <path d="M100 80 V140" stroke="#0A3E91" strokeWidth="4" strokeLinecap="round"/>
    <path d="M50 95 H90" stroke="#E0B043" strokeWidth="3" strokeLinecap="round" className="opacity-50"/>
    <path d="M110 95 H150" stroke="#E0B043" strokeWidth="3" strokeLinecap="round" className="opacity-50"/>
    <path d="M50 110 H90" stroke="#E0B043" strokeWidth="3" strokeLinecap="round" className="opacity-50"/>
    <path d="M110 110 H150" stroke="#E0B043" strokeWidth="3" strokeLinecap="round" className="opacity-50"/>

    {/* Torch / Pen Concept */}
    <path d="M100 80 V50" stroke="#E0B043" strokeWidth="6" strokeLinecap="round"/>
    <path d="M100 30 L90 50 H110 L100 30 Z" fill="#E0B043" stroke="#E0B043" strokeWidth="2" strokeLinejoin="round"/>
    
    {/* Rays / Glory */}
    <path d="M100 20 V10" stroke="#0A3E91" strokeWidth="3" strokeLinecap="round"/>
    <path d="M130 30 L135 25" stroke="#0A3E91" strokeWidth="3" strokeLinecap="round"/>
    <path d="M70 30 L65 25" stroke="#0A3E91" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'الرئيسية', href: '#home' },
    { title: 'عن المدرسة', href: '#about' },
    { title: 'الأنشطة', href: '#news' },
    { title: 'الدوام', href: '#schedule' },
    { title: 'تواصل معنا', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section - Ministry Logo */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
                <MoeLogo className="w-16 h-16" />
             </div>
             <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold tracking-wide mb-0.5">وزارة التربية والتعليم</span>
                <span className="text-xl md:text-2xl font-black text-[#0A3E91] tracking-tight leading-none">مدرسة عاكف الفايز</span>
                <span className="text-[10px] text-[#E0B043] font-bold mt-1">الأساسية للبنين - الشميساني</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-600 hover:text-[#0A3E91] px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-blue-50 relative group"
                >
                  {link.title}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#E0B043] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <div className="pr-4 border-r border-gray-200 mr-4 h-8 flex items-center">
                <a 
                    href="https://darsak.gov.jo/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A3E91] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#082a63] transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                    تسجيل
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0A3E91] hover:text-[#1E90FF] p-2 rounded-md focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2 text-right">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-[#0A3E91] hover:bg-blue-50 block px-4 py-3 rounded-xl text-base font-bold transition-all"
              >
                {link.title}
              </a>
            ))}
            <a 
                href="https://darsak.gov.jo/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-4 bg-[#0A3E91] text-white px-4 py-3 rounded-xl text-base font-bold"
            >
                تسجيل الدخول
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
