
import React from 'react';
import { SCHEDULE_DATA } from '../constants';
import { Clock } from 'lucide-react';

export const Schedule: React.FC = () => {
  return (
    <div className="py-20 bg-[#f0f4f8] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute right-10 top-10 w-64 h-64 border-8 border-[#0A3E91] rounded-full"></div>
            <div className="absolute left-10 bottom-10 w-40 h-40 bg-[#1E90FF] rounded-full"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-4 animate-bounce">
            <Clock className="text-[#E0B043]" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A3E91]">جدول الدوام المدرسي</h2>
          <p className="mt-4 text-gray-600">نظام الفترتين (صباحي / مسائي)</p>
        </div>

        {/* Main Schedule List */}
        <div className="space-y-4">
        {SCHEDULE_DATA.map((item, index) => (
            <div 
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between border-r-4 border-[#0A3E91] hover:border-[#E0B043] transition-all duration-500 transform hover:scale-[1.01] hover:shadow-lg slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
            >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="bg-blue-50 text-[#0A3E91] font-bold px-4 py-2 rounded-lg min-w-[100px] text-center">
                {item.time}
                </div>
                <div>
                <h4 className="text-lg font-bold text-gray-800">{item.period}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
                </div>
            </div>
            
            <div className="hidden md:block">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
            </div>
        ))}
        </div>

      </div>
    </div>
  );
};
