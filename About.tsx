
import React from 'react';
import { Target, Award, Users, User, Quote } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: <Target className="text-white" size={32} />,
      title: "الرؤية",
      text: "منتج تعلمي نوعي وفق رؤية وزارة التربية والتعليم.",
      color: "bg-[#1E90FF]"
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: "المجتمع",
      text: "تواصل إيجابي بين الإدارة والمعلمين والطلبة وأولياء الأمور.",
      color: "bg-[#E0B043]"
    },
    {
      icon: <Award className="text-white" size={32} />,
      title: "القيادة",
      text: "مدرسة قيادية رائدة ذات أداء متميز ومتفاعل.",
      color: "bg-[#0A3E91]"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A3E91] mb-6 inline-block relative">
                عن المدرسة
                <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-[#E0B043] rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                مدرسة عاكف الفايز الأساسية للبنين – مديرية تربية لواء قصبة عمان – الشميساني.
                نحن مدرسة تربوية تعليمية تفاعلية نؤمن بأن التعليم هو رحلة بناء للإنسان والقائد.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Principal Message Card */}
            <div className="relative">
                <div className="absolute top-[-20px] right-[-20px] w-20 h-20 bg-[#E0B043]/20 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A3E91]/5 rounded-bl-[100px] transition-all group-hover:bg-[#0A3E91]/10"></div>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                        {/* Principal Avatar Icon */}
                        <div className="shrink-0">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0A3E91] to-[#1E90FF] flex items-center justify-center shadow-lg border-4 border-white ring-2 ring-[#E0B043]">
                                <User className="text-white w-12 h-12" />
                            </div>
                        </div>

                        <div className="text-center md:text-right flex-1">
                            <Quote className="text-[#E0B043] w-8 h-8 mb-2 opacity-50 mx-auto md:mx-0" />
                            <h3 className="text-xl font-bold text-[#0A3E91] mb-1">مدير المدرسة</h3>
                            <p className="text-[#E0B043] font-bold text-sm mb-4">القائد عبد الله الشوبكي</p>
                            <p className="text-gray-600 italic leading-relaxed">
                                "نسعى لخلق بيئة تعليمية آمنة ومحفزة، تُنمي مهارات القيادة وتعزز القيم الأخلاقية لدى أبنائنا الطلبة، ليكونوا بناةً فاعلين في مستقبل هذا الوطن."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6">
                {cards.map((card, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-5 hover:translate-x-2 transition-transform duration-300 border border-gray-50"
                    >
                        <div className={`${card.color} p-4 rounded-xl shadow-lg shrink-0 transform rotate-3 group-hover:rotate-0 transition-all`}>
                            {card.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-800 mb-1">{card.title}</h4>
                            <p className="text-sm text-gray-500 leading-snug">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};
