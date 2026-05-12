// app/contact/page.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaPaperPlane, FaWhatsapp 
} from "react-icons/fa";

export default function ContactPage() {
  
  return (
    <div className="flex flex-col w-full bg-white text-right font-sans" dir="rtl">
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              צרו <span className="text-[#f27c21]">קשר</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-medium">
              צוות המומחים של תמנון זמין עבורכם לכל שאלה, ייעוץ טכני או בקשה להצעת מחיר. אנחנו כאן כדי להעניק לכם שקט נפשי.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 border-r-8 border-[#f27c21] pr-6">
                תמנון שיווק מערכות התראה ומיגון בע"מ
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-[#f27c21]">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">כתובתנו</h4>
                    <p className="text-gray-600 font-medium">רח' הרצל 4, חיפה</p>
                    <p className="text-gray-400 text-sm">ת.ד. 44994, מיקוד 3144802</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-[#f27c21]">
                    <FaPhoneAlt size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">טלפון</h4>
                    <p className="text-gray-600 font-medium font-mono">04-8108400</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-[#f27c21]">
                    <FaFax size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">פקס</h4>
                    <p className="text-gray-600 font-medium font-mono">04-8627913</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-[#f27c21]">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">זמינות המוקד</h4>
                    <p className="text-gray-600 font-medium">מבצעי 24 שעות ביממה</p>
                    <p className="text-[#f27c21] text-sm font-bold">שירות ארצי רחב</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="tel:048108400" className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] text-white py-4 rounded-xl font-bold hover:bg-[#f27c21] transition-all shadow-lg">
                <FaPhoneAlt /> חייגו עכשיו
              </a>
              <a href="https://wa.me/97248108400" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg">
                <FaWhatsapp size={20} /> וואטסאפ
              </a>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative grayscale hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.472714243689!2d34.9961!3d32.8122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db00000000000%3A0x0!2z16jXlyDXl9eo16bXnCA0LCDXl9mZ16TXlA!5e0!3m2!1siw!2sil!4v1715500000000!5m2!1siw!2sil" 
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
               ></iframe>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-black text-[#1a1a1a] mb-8 flex items-center gap-3">
               שלחו לנו הודעה
               <FaPaperPlane className="text-[#f27c21] text-sm" />
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">שם מלא</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#f27c21] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">נייד</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#f27c21] outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">מייל*</label>
                <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#f27c21] outline-none transition-all" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">אזור מגורים</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#f27c21] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">סיבת פנייה</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#f27c21] outline-none transition-all">
                    <option>ייעוץ למערכת אבטחה</option>
                    <option>שירות טכני</option>
                    <option>אגף שמירה וניקיון</option>
                    <option>אחר</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">הודעה</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#f27c21] outline-none transition-all resize-none"></textarea>
              </div>

              <div className="flex items-center gap-3 py-2">
                <input type="checkbox" id="newsletter" className="w-5 h-5 accent-[#f27c21] cursor-pointer" />
                <label htmlFor="newsletter" className="text-sm text-gray-600 font-medium cursor-pointer">צרפו אותי לניוזלטר</label>
              </div>

              <button type="submit" className="w-full bg-[#f27c21] text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-black transition-all transform active:scale-95">
                שליחת הודעה
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer link */}
      <footer className="py-8 bg-gray-50 text-center border-t border-gray-100">
          <a href="/" className="text-[#f27c21] font-bold hover:underline font-medium italic">חזרה לעמוד הבית - מוקד תמנון</a>
      </footer>
    </div>
  );
}