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

  const partners = [
    { name: "Alhua", src: "/alhua.png" },
    { name: "Energizer", src: "/energizer.png" },
    { name: "Flowless", src: "/flowless.png" },
    { name: "Hashmal", src: "/hashmal.png" },
    { name: "Health", src: "/health.png" },
    { name: "Holmes Place", src: "/holmesplace.png" },
    { name: "Ikea", src: "/ikea.png" },
    { name: "Zim", src: "/zim.png" },
  ];

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

      {/* Partners Section */}
{/* Partners Section */}

      {/* Services Section */}
{/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-4">הפתרונות המקצועיים שלנו</h2>
          <p className="text-gray-500 text-lg">מעטפת הגנה מושלמת המותאמת אישית לצרכים שלך</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <MdOutlineSecurity size={48} />, title: "שירותי מוקד וסיור", desc: "ניידות סיור בפריסה ארצית הנותנות מענה מיידי לכל קריאה מהמוקד המאויש 24/7.", href: "/cars", btnText: "לפרטי הסיור" },
            { icon: <HiOutlineVideoCamera size={48} />, title: "מצלמות אבטחה", desc: "התקנת מערכות צילום חכמות המאפשרות צפייה מרחוק ושליטה מלאה מכל מקום.", href: "/cameras", btnText: "לצפייה בפתרונות" },
            { icon: <HiOutlineStatusOnline size={48} />, title: "וידאו אנליטיקה", desc: "טכנולוגיית זיהוי פנים ותנועה המנתחת אירועים ומתריעה על פעילות חשודה.", href: "/analytical-cameras", btnText: "גלו את הטכנולוגיה" },
            { icon: <HiOutlineShieldCheck size={48} />, title: "מערכות אזעקה", desc: "מערכות גילוי פריצה מתקדמות המחוברות ישירות למוקד להגנה היקפית.", href: "/alarm-systems", btnText: "למערכות המיגון" }
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col h-full border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="text-[#f27c21] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              
              <h3 className="font-black text-2xl mb-4 text-[#1a1a1a]">{s.title}</h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow font-medium">
                {s.desc}
              </p>

              <motion.a
                href={s.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white border-2 border-[#f27c21] text-[#f27c21] py-3 rounded-xl font-bold text-center group-hover:bg-[#f27c21] group-hover:text-white transition-all shadow-sm"
              >
                {s.btnText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

            <section className="py-16 bg-white overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-widest mb-2">השמות הגדולים שבוחרים בנו</h2>
            <div className="w-24 h-1 bg-[#f27c21] mx-auto"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: (index * 0.1) + Math.random() * 0.2,
                  duration: 0.5 
                }}
                whileHover={{ 
                  scale: 1.1,
                  filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))"
                }}
                className="w-32 md:w-44 h-24 relative flex items-center justify-center transition-all cursor-pointer"
              >
                <img 
                  src={partner.src} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain p-2"
                />
              </motion.div>
            ))}
          </div>
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