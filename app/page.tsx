// app/page.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// שימוש ב-React Icons עבור רשתות חברתיות ואייקונים כלליים
import { FaFacebook, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaPlay, FaTimes } from "react-icons/fa";
import { 
  HiOutlineShieldCheck, HiOutlineVideoCamera, HiOutlineStatusOnline, 
  HiOutlineLightningBolt, HiOutlineUserGroup, HiOutlineLocationMarker,
  HiOutlineBadgeCheck, HiOutlineMail
} from "react-icons/hi";
import { MdOutlineSecurity, MdOutlineCleaningServices } from "react-icons/md";

export default function LandingPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const videos = [
    { id: "YZnw_ecUZbg", title: "מרכז הבקרה בפעולה" },
    { id: "42NuhauZmi4", title: "תגובת צוותי הסיור" },
    { id: "2pHio2CmO_I", title: "טכנולוגיית מיגון מתקדמת" },
    { id: "8sat9M7b04A", title: "סיכול פריצה בזמן אמת" }
  ];

  return (
    <div className="flex flex-col w-full bg-white text-right font-sans" dir="rtl">
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight">
              הביטחון שלך בידיים של <br/>
              <span className="text-[#f27c21]">מוקד תמנון</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              אבטחה, מיגון וסיור רכבים בטכנולוגיה המתקדמת ביותר. 
              מענה מבצעי מיידי 24/7 לבתים פרטיים, עסקים ומוסדות.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-[#f27c21] text-white px-10 py-4 rounded-md font-black text-xl shadow-lg hover:bg-black transition-all"
            >
              הצטרפו עכשיו
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/04gNrVKVFW4" 
                title="מוקד תמנון - סרטון תדמית"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <MdOutlineSecurity size={60} />, title: "שירותי מוקד, סיור ובקרה", desc: "ניידות סיור בפריסה ארצית הנותנות מענה מיידי לכל קריאה מהמוקד המבצעי המאויש 24/7.", href: "#" },
            { icon: <HiOutlineVideoCamera size={60} />, title: "מצלמות אבטחה ושליטה", desc: "התקנת מערכות צילום מתקדמות המאפשרות צפייה מרחוק ושליטה מלאה על הנעשה בעסק או בבית.", href: "#" },
            { icon: <HiOutlineStatusOnline size={60} />, title: "מוקד וידאו אנליטיקה", desc: "טכנולוגיית זיהוי חכמה המנתחת אירועים בזמן אמת ומתריעה על פעילות חשודה באופן אוטומטי.", href: "#" },
            { icon: <HiOutlineShieldCheck size={60} />, title: "מערכות אזעקה", desc: "מערכות אזעקה וגילוי פריצה המחוברות ישירות למוקד המבצעי להגנה היקפית מקסימלית.", href: "#" }
          ].map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              whileHover={{ scale: 1.02 }}
              className="relative p-10 flex flex-col items-center text-center group transition-all border border-transparent hover:border-gray-50"
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-200 group-hover:border-[#f27c21]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-200 group-hover:border-[#f27c21]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-200 group-hover:border-[#f27c21]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-200 group-hover:border-[#f27c21]" />

              <div className="text-gray-300 group-hover:text-[#f27c21] mb-6 transition-colors">{s.icon}</div>
              <h3 className="font-black text-xl mb-4 text-[#1a1a1a]">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">{s.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Results From the Field Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-4 italic">תוצאות מהשטח</h2>
            <p className="text-gray-500 font-bold">צפו בסיכולים ופעילויות המוקד בזמן אמת</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <motion.div 
                key={video.id}
                whileHover={{ y: -5 }}
                className="cursor-pointer group"
                onClick={() => setActiveVideo(video.id)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-[#f27c21] transition-all">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                    <div className="bg-[#f27c21] p-3 rounded-full text-white shadow-xl">
                      <FaPlay size={24} />
                    </div>
                  </div>
                </div>
                <h4 className="mt-3 font-bold text-[#1a1a1a] text-center group-hover:text-[#f27c21]">{video.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-[#f27c21] mb-4">צרו קשר</h2>
                <p className="text-gray-400 text-lg">אנחנו כאן לכל שאלה, ייעוץ או תכנון של מערך האבטחה שלכם.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-4 rounded-lg group-hover:bg-[#f27c21] transition-colors">
                    <FaEnvelope size={24} className="text-[#f27c21] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">דואר אלקטרוני</p>
                    <a href="mailto:office@tamnun.co.il" className="text-xl font-bold hover:text-[#f27c21] transition-colors">office@tamnun.co.il</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-4 rounded-lg group-hover:bg-[#f27c21] transition-colors">
                    <FaPhone size={24} className="text-[#f27c21] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">מוקד מבצעי 24/7</p>
                    <a href="tel:*9090" className="text-xl font-bold hover:text-[#f27c21] transition-colors">*9090</a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-6">עקבו אחרינו ברשתות:</p>
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/TamnunSecurity" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1877f2] transition-all transform hover:scale-110">
                    <FaFacebook size={32} />
                  </a>
                  <a href="https://www.linkedin.com/company/tamnun-security" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0a66c2] transition-all transform hover:scale-110">
                    <FaLinkedin size={32} />
                  </a>
                  <a href="https://www.youtube.com/@tamnunsecurity" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff0000] transition-all transform hover:scale-110">
                    <FaYoutube size={32} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-[#f27c21]">נחזור אליכם בהקדם</h3>
              <div className="space-y-5">
                <div className="space-y-2">
                    <label className="text-xs text-gray-400 mr-2">שם מלא</label>
                    <input type="text" className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-[#f27c21] outline-none transition-all focus:bg-white/20" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-gray-400 mr-2">טלפון ליצירת קשר</label>
                    <input type="tel" className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-[#f27c21] outline-none transition-all focus:bg-white/20" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-gray-400 mr-2">הודעה (אופציונלי)</label>
                    <textarea rows={3} className="w-full p-4 bg-white/10 rounded-xl border border-white/20 focus:border-[#f27c21] outline-none transition-all focus:bg-white/20"></textarea>
                </div>
                <button className="w-full bg-[#f27c21] py-4 rounded-xl font-black text-xl hover:bg-white hover:text-black transition-all shadow-lg mt-4 transform active:scale-95">
                  שליחת פרטים
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            <button className="absolute top-8 left-8 text-white hover:text-[#f27c21] transition-colors"><FaTimes size={40} /></button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}