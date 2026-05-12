// app/security-cameras/page.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FaCamera, FaCogs, FaTools, FaChartLine, FaUserShield, 
  FaMobileAlt, FaBatteryFull, FaMountain, FaLightbulb,
  FaLink,
  FaVideo
} from "react-icons/fa";
import { 
  HiOutlineClipboardList, HiOutlineVideoCamera, 
  HiOutlineStatusOnline, HiOutlineCheckCircle, HiOutlineDesktopComputer
} from "react-icons/hi";
import { MdOutlineSecurity, MdOutlinePhotoSizeSelectSmall } from "react-icons/md";

export default function SecurityCamerasPage() {
  
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const steps = [
    {
      title: "1. אפיון צרכי הלקוח",
      desc: "הבנת הצרכים הממשיים שלכם היא הבסיס למערכת יעילה:",
      items: [
        "הגדרת מטרות המיגון",
        "אופי המצלמות (גלויות, מוסלקות, PTZ)",
        "זמן הקלטה מבוקש (גודל כונן קשיח)",
        "סוג טכנולוגיה (אנלוגי, TURBO, A-HD, דיגיטלי)",
        "המשכיות עסקית גם בהפסקת חשמל",
        "חיבור לצפייה מרחוק (אינטרנט קווי/סלולארי)"
      ],
      icon: <HiOutlineClipboardList size={40} className="text-[#f27c21]" />
    },
    {
      title: "2. אפיון השטח",
      desc: "בדיקה פיזית של האתר להבטחת כיסוי מקסימלי:",
      items: [
        "גודל השטח ותנאי הסביבה",
        "גובה התקנה אופטימלי",
        "היתכנות טכנית להעברת כבילה",
        "ניתוח מידת התאורה באתר",
        "התאמה לתנאי פנים או חוץ"
      ],
      icon: <FaMountain size={30} className="text-[#f27c21]" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white text-right font-sans" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f27c21] to-gray-800"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-white text-center md:text-right">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              מערכות <span className="text-[#f27c21]">מצלמות אבטחה</span> ושליטה
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              חברת תמנון משווקת ומתקינה מצלמות כבר למעלה מעשור, תוך עבודה עם המותגים המובילים בשוק העולמי והתאמה מדויקת לצרכי הלקוח הישראלי.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-sm">אישור חברות הביטוח</span>
               <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-sm">מותגי איכות בינלאומיים</span>
               <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-sm">בדיקות טכניות מחמירות</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 border-r-8 border-[#f27c21] pr-6">הדרך שלנו ללקוח מרוצה</h2>
            <p className="text-lg text-gray-600 max-w-3xl font-medium">
              השוק מוצף בסוגים רבים של מצלמות. בתמנון, אנו מאמינים כי המטרה היא לקוח מרוצה לטווח ארוך, ולכן כל מוצר עובר בדיקות מחמירות המבטיחות התאמה מושלמת לאופי האתר.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">{step.title}</h3>
                <p className="text-[#f27c21] font-bold mb-6">{step.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                      <HiOutlineCheckCircle className="text-[#f27c21] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Installation */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-[#f27c21] p-4 rounded-2xl shadow-lg shadow-[#f27c21]/20">
                <FaChartLine size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">3. תמחור - עלות מול תועלת</h3>
                <p className="text-gray-400 font-medium">אנו מאמינים בחשיבות עליונה בהתאמת המוצר והעלויות למידות הלקוח, תוך שמירה על יחס עלות-תועלת אופטימלי.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-[#f27c21] p-4 rounded-2xl shadow-lg shadow-[#f27c21]/20">
                <FaTools size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">4. התקנה מקצועית</h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  תכנון מסגרת זמן הפרויקט, עמידה בלוחות זמנים ואפשרות להתקנות סמויות לפי הצורך.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 flex flex-col justify-center">
             <div className="text-[#f27c21] font-black text-xl mb-6">לאחר ההתקנה: הדרכה מלאה</div>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <FaMobileAlt className="text-gray-500" />
                   <span className="text-gray-200">התקנת אפליקציות לצפייה מרחוק</span>
                </div>
                <div className="flex items-center gap-3">
                   <FaUserShield className="text-gray-500" />
                   <span className="text-gray-200">הגדרת הרשאות משתמשים</span>
                </div>
                <div className="flex items-center gap-3">
                   <HiOutlineDesktopComputer className="text-gray-500" />
                   <span className="text-gray-200">הדרכה על הקלטות ושיחזור אירועים</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Recommendation: Moked Roeh */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center border-4 border-[#f27c21] p-12 rounded-[40px] relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-8 py-2">
            <FaLink className="text-[#f27c21] text-4xl" />
          </div>
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6">אנו ממליצים על חיבור ל"מוקד רואה"</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            חיבור המערכות למוקד המבצעי של חברת תמנון מאפשר לנו לספק לכם שירות אבטחה טוב הרבה יותר. המוקד מבצע סנכרון מלא בין מערכת האזעקה למערכת המצלמות בזמן אמת.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-black text-white px-12 py-5 rounded-xl font-black text-xl shadow-xl hover:bg-[#f27c21] transition-all transform hover:scale-105"
          >
            לייעוץ עם מומחה מיגון
          </button>
        </div>
      </section>

      {/* Icons Footer Info */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center gap-2">
            <FaVideo size={40} />
            <span className="text-xs font-bold">PTZ Cameras</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaBatteryFull size={40} />
            <span className="text-xs font-bold">UPS Support</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HiOutlineStatusOnline size={40} />
            <span className="text-xs font-bold">Remote Monitoring</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaLightbulb size={40} />
            <span className="text-xs font-bold">IR Night Vision</span>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-white text-center border-t border-gray-100">
          <a href="/" className="text-[#f27c21] font-bold hover:underline">חזרה לעמוד הבית - מוקד תמנון</a>
      </footer>
    </div>
  );
}