// app/alarm-systems/page.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, FaBullhorn, FaMicrochip, FaPhoneAlt, 
  FaWifi, FaCheckCircle, FaUserShield, FaFileAlt, FaBolt,
  FaArrowLeft
} from "react-icons/fa";
import { MdOutlineSensors, MdSettingsRemote } from "react-icons/md";

export default function AlarmSystemsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#f27c21] selection:text-white" dir="rtl">
      
      {/* Hero Section - Ultra Clean */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-orange-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[50%] bg-[#f27c21]/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-right w-full">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-[#f27c21]" />
              <span className="text-[#f27c21] font-bold tracking-tighter uppercase text-sm">Security Standards</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              מערכות <br />
              <span className="text-[#f27c21]">אזעקה</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-xl font-medium leading-tight">
              הגנה היקפית חכמה המשלבת הרתעה, גילוי מדויק והתרעה מיידית למוקד וללקוח.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Goals - White Minimalist Cards */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <FaShieldAlt />, title: "יצירת הרתעה", desc: "הימצאות מערכת אזעקה מרתיעה גנבים מחדירה למרחב המוגן." },
            { icon: <MdOutlineSensors />, title: "גילוי חדירה", desc: "זיהוי חדירה למרחב אותו אנו מבקשים למגן בזמן אמת." },
            { icon: <FaBullhorn />, title: "התרעה קולית", desc: "שימוש בצופרים ליצירת הרתעה והתרעה לסביבה הקרובה." },
            { icon: <FaPhoneAlt />, title: "הודעה על חדירה", desc: "דיווח למוקד וללקוח דרך קו טלפון, סלולר, משדר אלחוטי או G.P.R.S." },
            { icon: <FaBolt />, title: "ניטור תשתיות", desc: "התראה על ניתוק זרם החשמל או קווי הטלפון במבנה." },
            { icon: <MdSettingsRemote />, title: "ניהול אזורים", desc: "חלוקה לאזורי הגנה המאפשרת דיווח על מיקום מדויק של האירוע." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border border-black/5 rounded-[2rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-[#f27c21]/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-[#f27c21] transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
              <p className="text-black/50 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Architecture - Minimalist Grid */}
      <section className="py-24 bg-[#fcfcfc] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-black mb-10 leading-none">מבנה המערכת ותשתית</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="text-[#f27c21] text-3xl shrink-0 font-black italic opacity-20 italic">01</div>
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase italic">הרכזת (Control Unit)</h4>
                    <p className="text-black/60 font-medium text-sm leading-relaxed">
                      ה"מוח" של המערכת. אליה מתוכנתים הגלאים והיא מחוברת לחשמל, טלפון וצופרים. כוללת מצבר גיבוי להפסקות חשמל.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[#f27c21] text-3xl shrink-0 font-black italic opacity-20 italic">02</div>
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase italic">גלאים (Sensors)</h4>
                    <p className="text-black/60 font-medium text-sm leading-relaxed">
                      מגוון גלאי נפח, מגנטים ושבר זכוכית המחוברים כאזורים נפרדים לצורך זיהוי מיקום מדויק.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-white border border-black/5 rounded-3xl flex justify-between items-center group hover:border-[#f27c21] transition-colors">
                <div>
                  <h4 className="font-black text-xl">מערכות קוויות</h4>
                  <p className="text-sm text-black/40">חיווט פיזי מלא בין הרכזת לגלאים</p>
                </div>
                <FaArrowLeft className="text-[#f27c21] -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              <div className="p-8 bg-white border border-black/5 rounded-3xl flex justify-between items-center group hover:border-[#f27c21] transition-colors">
                <div>
                  <h4 className="font-black text-xl">מערכות אלחוטיות</h4>
                  <p className="text-sm text-black/40">תקשורת אלחוטית מלאה עם סוללה עצמאית</p>
                </div>
                <FaWifi className="text-[#f27c21]" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Table - Modern Typography */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-center font-black text-4xl mb-20 tracking-tighter">דגמי מערכות נפוצים</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b-2 border-black text-sm uppercase font-black">
                <th className="py-4 pb-6 px-4">מותג / יצרן</th>
                <th className="py-4 pb-6 px-4">דגמים נבחרים</th>
                <th className="py-4 pb-6 px-4">יכולות מרכזיות</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              <tr>
                <td className="py-8 px-4 font-black text-xl italic">PIMA</td>
                <td className="py-8 px-4 text-sm font-medium leading-relaxed">קפטיין, הנטר פרו (8-96), פימא 1337</td>
                <td className="py-8 px-4 text-xs text-black/40 uppercase">עד 144 אזורים | תקן 1337 לעסקים</td>
              </tr>
              <tr>
                <td className="py-8 px-4 font-black text-xl italic">OREVE</td>
                <td className="py-8 px-4 text-sm font-medium">PW8, RUNNER16</td>
                <td className="py-8 px-4 text-xs text-black/40 uppercase">עד 16 אזורי גילוי</td>
              </tr>
              <tr>
                <td className="py-8 px-4 font-black text-xl italic">VISSONIC</td>
                <td className="py-8 px-4 text-sm font-medium">פאוארמקס+, פאוארמקס-פרו, פאוור-מאסטר</td>
                <td className="py-8 px-4 text-xs text-black/40 uppercase">אלחוטיות דו-כיוונית | עד 30 אזורים</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action - High Contrast */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-5xl mx-auto bg-black text-white rounded-[3rem] p-16 text-center shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f27c21] rounded-full blur-[120px] opacity-20" />
          <FaUserShield className="mx-auto text-[#f27c21] mb-8 text-6xl" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight italic">צריכים התאמה לביטוח?</h2>
          <p className="text-white/60 mb-12 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            היועצים שלנו מנוסים בהבנת דוחות סוקר חברות הביטוח והתאמת המערכת לדרישות המחמירות ביותר בשטח.
          </p>
          <button className="bg-white text-black hover:bg-[#f27c21] hover:text-white font-black px-14 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
            תאמו פגישת ייעוץ מקצועית
          </button>
        </div>
      </section>

    </div>
  );
}