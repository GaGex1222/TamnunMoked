"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // ייבוא Link למעבר דפים
import { FaFacebook, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaPlay, FaTimes, FaArrowLeft } from "react-icons/fa";
import { 
  HiOutlineShieldCheck, HiOutlineVideoCamera, HiOutlineStatusOnline, 
} from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";

export default function LandingPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
            <Link 
              href="/contact"
              className="inline-block bg-[#f27c21] text-white px-10 py-4 rounded-md font-black text-xl shadow-lg hover:bg-black transition-all"
            >
              הצטרפו עכשיו
            </Link>
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
                whileHover={{ scale: 1.1 }}
                className="w-32 md:w-44 h-24 relative flex items-center justify-center cursor-pointer"
              >
                <img src={partner.src} alt={partner.name} className="max-w-full max-h-full object-contain p-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-4">הפתרונות המקצועיים שלנו</h2>
          <p className="text-gray-500 text-lg font-medium">מעטפת הגנה מושלמת המותאמת אישית לצרכים שלך</p>
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
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow font-medium">{s.desc}</p>
              <Link 
                href={s.href}
                className="w-full bg-white border-2 border-[#f27c21] text-[#f27c21] py-3 rounded-xl font-bold text-center group-hover:bg-[#f27c21] group-hover:text-white transition-all shadow-sm"
              >
                {s.btnText}
              </Link>
            </motion.div>
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

      {/* Updated Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#1a1a1a] text-white overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f27c21]/5 -skew-x-12 transform translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 space-y-8 text-center md:text-right">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black text-[#f27c21] mb-6">צריכים אבטחה ברמה אחרת?</h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
                  המומחים שלנו ממתינים לכם. בין אם מדובר בבית פרטי, עסק קטן או ארגון ענק – אנחנו נבנה עבורכם את מערך המיגון המושלם.
                  <br className="hidden md:block" />
                  <span className="font-bold text-white">אל תתפשרו על הביטחון שלכם.</span>
                </p>
              </motion.div>

              <div className="flex flex-col md:flex-row items-center gap-6 justify-start">
                <Link 
                  href="/contact"
                  className="group flex items-center gap-3 bg-[#f27c21] text-white px-12 py-5 rounded-full font-black text-2xl shadow-[0_0_20px_rgba(242,124,33,0.3)] hover:bg-white hover:text-black transition-all"
                >
                  צור קשר עכשיו
                  <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" size={18} />
                </Link>
                
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-gray-400 text-sm">זמינים במוקד המבצעי</span>
                  <a href="tel:*9090" className="text-2xl font-black hover:text-[#f27c21] transition-colors">*9090</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-10 flex justify-center md:justify-start gap-8">
                <a href="https://www.facebook.com/TamnunSecurity" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={28} /></a>
                <a href="https://www.linkedin.com/company/tamnun-security" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={28} /></a>
                <a href="https://www.youtube.com/@tamnunsecurity" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaYoutube size={28} /></a>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 hidden lg:flex justify-center"
            >
              <div className="bg-[#f27c21] w-72 h-72 rounded-full flex items-center justify-center p-4 shadow-[0_0_50px_rgba(242,124,33,0.2)]">
                <div className="border-4 border-white/20 w-full h-full rounded-full flex items-center justify-center">
                  <MdOutlineSecurity size={120} className="text-white animate-pulse" />
                </div>
              </div>
            </motion.div>

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
            <button className="absolute top-8 left-8 text-white hover:text-[#f27c21]"><FaTimes size={40} /></button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} allowFullScreen></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}