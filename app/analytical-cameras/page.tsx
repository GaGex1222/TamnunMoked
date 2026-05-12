// app/video-analytics/page.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FaCheckCircle, FaVideo, FaMicrophoneAlt, FaDesktop, 
  FaServer, FaProjectDiagram, FaYoutube, FaRobot 
} from "react-icons/fa";
import { 
  HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineSearchCircle,
  HiOutlineEye, HiOutlineAdjustments
} from "react-icons/hi";
import { MdOutlineSecurity, MdSettingsInputComponent } from "react-icons/md";

export default function VideoAnalyticsPage() {
  
  const scrollToContact = () => {
    // במידה ויש פוטר/צור קשר בעמוד הראשי
    window.location.href = "/#contact";
  };

  return (
    <div className="flex flex-col w-full bg-white text-right font-sans" dir="rtl">
      
      {/* Hero Section - Video Analytics */}
      <section className="relative bg-[#1a1a1a] py-20 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-l from-[#f27c21] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-[#f27c21] text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
              טכנולוגיית המיגון של המחר
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              מוקד <span className="text-[#f27c21]">וידאו אנליטיקה</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              פלטפורמת אבטחה דו-כיוונית מבוססת ניתוח וידאו לזיהוי וגילוי תנועה בשטחים סטריליים בתנאים משתנים.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 border-r-4 border-[#f27c21] pr-4">מה זה מוקד וידאו אנליטיקה?</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                מדובר בשירות חדשני שמשלב טכנולוגיה מתקדמת בתוך מערך האבטחה לצורך מניעת חדירה, פריצה, גניבה ווונדליזם.
              </p>
              <p>
                השירות מאפשר להחליף שמירה פיסית ו/או לשפר את האבטחה האלקטרונית באתר באמצעות אבטחה דיגיטלית מהימנה שמאושרת על ידי חברות הביטוח הגדולות. 
              </p>
              <p className="font-bold text-[#1a1a1a]">
                השירות מומלץ ללקוחות המבקשים למגן שטח גדול שמאופיין בתנאים קשים ומשתנים.
              </p>
            </div>
          </motion.div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col gap-6">
            <h3 className="text-xl font-black text-[#f27c21]">סוגי "חוקים" במערכות האנליטיקה:</h3>
            <ul className="space-y-4">
              {[
                { title: "שוטטות", icon: <HiOutlineSearchCircle className="text-[#f27c21] text-2xl"/> },
                { title: "חציית קו מצד אחד לצד שני", icon: <HiOutlineLightningBolt className="text-[#f27c21] text-2xl"/> },
                { title: "גדר וירטואלית", icon: <HiOutlineShieldCheck className="text-[#f27c21] text-2xl"/> }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  {item.icon}
                  <span className="font-bold text-gray-800">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-4 italic">יתרונות הוידאו אנליטיקה</h2>
            <div className="w-24 h-1 bg-[#f27c21] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "גילוי אוטומטי ואמין ביותר",
              "אמין יותר מאדם – מצלמה לא נרדמת או מתעייפת",
              "יכולת תצפית על שטחים מרובים בעת ובעונה אחת",
              "מיגון מתחם רחב וגדול בשטחו",
              "הבחנה בין חיות, אנשים ורכבים 24/7",
              "גמישות רבה בהגדרת הגילוי",
              "חיבור למערכת ייעודית במוקד תמנון הצופה ומנטרת 24/7",
              "מעקב אחר מספר רב של מטרות באמצעות חוקים מראש",
              "מיעוט אזעקות שווא ויכולת זיהוין ויזואלית",
              "זיהוי והבדלה בין אדם, חיה, רכב ומשאית"
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-[#f27c21] flex items-center gap-4"
              >
                <FaCheckCircle className="text-[#f27c21] shrink-0" />
                <span className="font-bold text-gray-700 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maximizing Capabilities & Survey */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto border-2 border-[#1a1a1a] rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-[#1a1a1a] text-white p-12 flex-1">
            <HiOutlineAdjustments size={50} className="text-[#f27c21] mb-6" />
            <h2 className="text-3xl font-black mb-6">מקסום יכולות המערכת</h2>
            <p className="text-gray-400 leading-relaxed font-medium">
              כדי להגיע ליעילות מקסימאלית, אנו מבצעים סקר אתר מדוקדק הכולל:
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#f27c21] rounded-full"></div> בדיקת תנאי שטח (תאורה, צמחייה)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#f27c21] rounded-full"></div> אפיון מיקום מצלמות ונתונים טכניים</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#f27c21] rounded-full"></div> קביעת שבילים למנגנון התראות וירטואלי</li>
            </ul>
          </div>
          <div className="p-12 flex-1 flex items-center bg-gray-50">
            <p className="text-xl font-bold text-gray-700 italic border-r-4 border-gray-200 pr-6">
              "זהו שלב קריטי בפרויקט והכרחי להצלחת הטמעת המערכת כחלק ממערכת הגנה מרחבית כוללת."
            </p>
          </div>
        </div>
      </section>

      {/* Control Software Section */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-[#f27c21] mb-8">תוכנת השליטה והבקרה במוקד תמנון</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <FaDesktop className="text-gray-500 mt-1 shrink-0" size={24} />
                  <p className="text-gray-300">מספקת מענה מתקדם למערכי שליטה מרובי ממשקים ולאתגרי אבטחה משולבים.</p>
                </div>
                <div className="flex gap-4">
                  <HiOutlineEye className="text-gray-500 mt-1 shrink-0" size={24} />
                  <p className="text-gray-300">מתריעה בזמן אמת ומזרימה מידע לבקרה לצורך ניתוח מהיר.</p>
                </div>
                <div className="flex gap-4">
                  <FaMicrophoneAlt className="text-gray-500 mt-1 shrink-0" size={24} />
                  <p className="text-gray-300">מאפשרת תגובה מהירה, שקטה או רועשת באמצעות כריזה ווקלית לאתר.</p>
                </div>
                <div className="flex gap-4">
                  <MdSettingsInputComponent className="text-gray-500 mt-1 shrink-0" size={24} />
                  <p className="text-gray-300">פלטפורמה המנהלת את כל מערך האבטחה באופן מלוכד, פשוט וגמיש.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-6 italic">מה כל מערכת כוללת?</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { t: "ארון תקשורת ייעודי", i: <FaServer /> },
                    { t: "מצלמות אנליטיקה", i: <FaVideo /> },
                    { t: "NVR ו-SWITCH POE", i: <MdSettingsInputComponent /> },
                    { t: "מערכת כריזה ורמקולים", i: <FaMicrophoneAlt /> },
                    { t: "אל פסק ארוך טווח", i: <HiOutlineLightningBolt /> },
                    { t: "תיק שטח (צילומי רחפן, חפיפת שטחים)", i: <FaProjectDiagram /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm border-b border-white/5 pb-2">
                       <span className="text-[#f27c21]">{item.i}</span>
                       <span>{item.t}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video / News Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#1a1a1a] mb-6">מוקד האנליטיקה בתקשורת</h2>
          <p className="text-lg text-gray-600 mb-10">
            כתבה בחדשות 13 על מוקד האנליטיקה שלנו בתמנון ועל שילוב תצפיתניות לשעבר בצה"ל במערך:
          </p>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 group">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/04gNrVKVFW4" // קישור סרטון הכתבה ביוטיוב
              title="כתבה חדשות 13 - מוקד תמנון"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-12">
            <button 
              onClick={scrollToContact}
              className="bg-[#f27c21] text-white px-12 py-5 rounded-full font-black text-xl shadow-xl hover:bg-black transition-all flex items-center gap-3 mx-auto"
            >
              לקבלת הצעה למערכת אנליטיקה
              <HiOutlineLightningBolt />
            </button>
          </div>
        </div>
      </section>

      {/* Footer link for SEO/Navigation */}
      <footer className="py-10 bg-gray-50 text-center border-t border-gray-100">
          <a href="/" className="text-[#f27c21] font-bold hover:underline">חזרה לעמוד הבית - מוקד תמנון</a>
      </footer>
    </div>
  );
}