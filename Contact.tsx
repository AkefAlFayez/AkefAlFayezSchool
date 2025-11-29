
import React from 'react';
import { MapPin, Phone, Send, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info & Map */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A3E91] mb-6 hover-shake inline-block">تواصل معنا</h2>
            <p className="text-gray-600 mb-8">
              يسعدنا استقبال استفساراتكم وشكاويكم. نحن هنا لخدمتكم.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 hover-shake transition-all duration-300">
                <div className="bg-[#E0B043] p-3 rounded-full text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A3E91] text-lg">العنوان</h4>
                  <p className="text-gray-600">عمّان – الشميساني – خلف المستشفى التخصصي - شارع البيروني</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 hover-shake transition-all duration-300">
                <div className="bg-[#1E90FF] p-3 rounded-full text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A3E91] text-lg">الهاتف</h4>
                  <p className="text-gray-600 dir-ltr text-right" style={{ direction: 'ltr' }}>+962 7 8286 1959</p>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=مدرسة+عاكف+الفايز+الأساسية+للبنين&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="موقع المدرسة"
              ></iframe>
            </div>
          </div>

          {/* Google Form Link Section */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-200 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0A3E91] mb-6 text-center">أرسل ملاحظة أو شكوى</h3>
            
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="bg-white p-6 rounded-full shadow-md mb-2 group cursor-pointer hover:shadow-lg transition-all">
                    <FileText className="text-[#E0B043] group-hover:scale-110 transition-transform duration-300" size={64} />
                </div>

                <p className="text-gray-600 leading-relaxed max-w-md">
                    حرصاً منا على متابعة ملاحظاتكم بدقة وسرية، يرجى تعبئة النموذج الإلكتروني الرسمي المخصص للمقترحات والشكاوى من خلال الرابط أدناه.
                </p>

                <div className="w-full pt-4">
                     <a 
                        href="https://forms.gle/962628TFQdo5UN6r9" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full bg-[#0A3E91] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#082a63] transition-all hover-shake flex items-center justify-center gap-2 text-lg"
                     >
                        إرسال للموقع
                        <Send size={20} />
                     </a>
                     <p className="text-xs text-gray-400 mt-3">سيتم تحويلك إلى نموذج Google Forms</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
