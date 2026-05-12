// app/ai-cloud/page.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FaCloud, FaMicrochip, FaServer, FaShieldAlt, FaSave, 
  FaWallet, FaExpandArrowsAlt, FaCogs, FaYoutube 
} from "react-icons/fa";
import { 
  HiOutlineLightningBolt, HiOutlineGlobeAlt, HiOutlineBan,
  HiOutlineRefresh, HiOutlineVideoCamera
} from "react-icons/hi";

export default function AiCloudPage() {
  
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const cloudBenefits = [
    {
      title: "אבטחת נתונים מקסימלית",
      desc: "הענן מוגן ברמת אבטחה גבוהה ביותר ומגובה כנגד כשלים בכל פרמטר במערכת.",
      icon: <FaShieldAlt className="text-[#f27c21]" />
    },
    {
      title: "ללא צורך בטכנאי",
      desc: "הפיכת המצלמה לחכמה מתבצעת מרחוק ללא צורך בהגעת טכנאי לאתר הלקוח.",
      icon: <HiOutlineBan className="text-[#f27c21]" />
    },
    {
      title: "חיסכון בעלויות ציוד",
      desc: "הלקוח אינו צריך לשלם בגין התקנת ציוד אנליטיקה יקר באתר - הכל קורה בענן.",
      icon: <FaWallet className="text-[#f27c21]" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white text-right font-sans" dir="rtl">
      
      {/* Hero Section - AI CLOUD */}
      <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#f27c21] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#f27c21] text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
              <FaCloud /> בלעדי למוקד תמנון
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              AI CLOUD <br />
              <span className="text-[#f27c21]">אנליטיקה בענן</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              מוקד תמנון הינו מוקד האבטחה היחיד בארץ שמחזיק ברשותו שרת ענן פרטי, ישראלי, הממוקם בחדר השרתים של המוקד ומתוחזק על ידינו ללא מיקור חוץ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Technology Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-6">להפוך כל מצלמה לבינה מלאכותית</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                שירות <span className="text-[#f27c21] font-bold">"AI CLOUD"</span> הוא פיתוח ייחודי המאפשר לנו להפוך כל מצלמת רשת (אנלוגית או דיגיטלית) למצלמת אנליטיקה מתקדמת.
              </p>
              <p>
                המערכת מנטרת את המצלמות 24 שעות ביממה, מוודאת תקינות, כיסוי והסתה. ברגע דריכת המערכת, היא מזהה חדירת אדם או רכב ומציגה תמונה בזמן אמת לתצפיתן במוקד.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border-r-4 border-[#f27c21]">
                <p className="italic font-bold text-[#1a1a1a]">
                  "השקענו מחשבה עמוקה והשקעה כספית ניכרת כדי לאפשר לכם את חזית הטכנולוגיה ללא צורך ברכישת ציוד קצה יקר."
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            {cloudBenefits.map((benefit, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Services */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 underline decoration-[#f27c21] underline-offset-8">יתרונות השירות למוקד וללקוח</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "שמירת אירועים", d: "שמירה בטוחה של כל האירועים המתקבלים על גבי שרת המוקד.", i: <FaSave /> },
              { t: "חיסכון כספי", d: "מניעת הוצאה גדולה על רכישת ציוד אנליטיקה פיזי לאתר.", i: <FaWallet /> },
              { t: "גמישות פרויקט", d: "יכולת לשנות ולהרחיב את מידות הפרויקט בקלות ובמהירות.", i: <FaExpandArrowsAlt /> },
              { t: "סנכרון מלא", d: "חיבור למערכות כריזה, פתיחת שערים ותאורה מרחוק.", i: <FaCogs /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center"
              >
                <div className="text-[#f27c21] text-4xl mb-6 flex justify-center">{item.i}</div>
                <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                <p className="text-gray-400 text-sm">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action / Features List */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-[40px] p-10 md:p-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
             <h2 className="text-3xl font-black text-[#1a1a1a] mb-8">סיכול ומניעה בזמן אמת</h2>
             <ul className="space-y-4">
                {[
                  "שחזור אירועים במהירות הבזק מרחוק",
                  "כריזה לשטח וסיכול כוונת המפגע",
                  "הכוונת כוחות לנקודת האירוע המדויקת",
                  "ניטור תקינות מצלמות 24/7 ללא הפסקה"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                    <HiOutlineLightningBolt className="text-[#f27c21] text-xl" />
                    {text}
                  </li>
                ))}
             </ul>
          </div>
          <div className="flex-1 text-center md:text-right bg-[#f27c21] p-10 rounded-3xl text-white shadow-2xl shadow-[#f27c21]/30">
              <FaServer size={50} className="mb-6 opacity-50" />
              <h3 className="text-2xl font-black mb-4">שרת ענן ישראלי פרטי</h3>
              <p className="text-white/90 leading-relaxed font-medium">
                השרת שלנו נמצא כאן בישראל, בתוך המוקד המבצעי. זה אומר מהירות מקסימלית, שליטה מלאה על הנתונים ואפס תלות בחברות חיצוניות.
              </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaYoutube className="text-red-600 text-4xl" />
            <h2 className="text-3xl font-black text-[#1a1a1a]">צפו בטכנולוגיה בפעולה</h2>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ahpEPCwo5e0" // ניתן להחליף בסרטון ספציפי לענן אם קיים
              title="AI CLOUD Technology - Moked Tamnoon"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-12">
            <button 
              onClick={scrollToContact}
              className="bg-black text-white px-12 py-5 rounded-full font-black text-xl shadow-xl hover:bg-[#f27c21] transition-all flex items-center gap-3 mx-auto"
            >
              הפוך את המצלמות שלך לחכמות עכשיו
              <HiOutlineLightningBolt />
            </button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-gray-50 text-center border-t border-gray-100">
          <a href="/" className="text-[#f27c21] font-bold hover:underline">חזרה לעמוד הבית - מוקד תמנון</a>
      </footer>
    </div>
  );
}