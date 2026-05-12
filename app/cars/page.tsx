// app/monitoring-and-patrol/page.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, FaClock, FaIdCard, FaDatabase, 
  FaCar, FaUserSecret, FaVideo, FaTint, 
  FaSatelliteDish, FaSignal, FaPhoneSlash, FaMapMarkerAlt
} from "react-icons/fa";
import { MdOutlineSecurity, MdMonitorHeart } from "react-icons/md";
import { RiBaseStationLine } from "react-icons/ri";

export default function MonitoringPatrolPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#f27c21] selection:text-white" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-orange-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[55%] bg-[#f27c21]/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-right w-full">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-[#f27c21]" />
              <span className="text-[#f27c21] font-bold tracking-tighter uppercase text-sm">Operational Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              מוקד, סיור <br />
              <span className="text-[#f27c21]">ובקרה</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-2xl font-medium leading-tight">
              מענה מבצעי 24/7 לבתים פרטיים ובתי עסק, המבוסס על טכנולוגיה מתקדמת וסיירים חמושים בפריסה רחבה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* מוקד מבצעי - המוח מאחורי הפעילות */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-black mb-8 border-r-4 border-[#f27c21] pr-6 italic uppercase">THE COMMAND CENTER</h2>
            <div className="space-y-6 text-lg text-black/70 font-medium">
              <p>מוקד תמנון פועל 24/7 כל ימות השנה, לרבות יום הכיפורים.</p>
              <div className="p-6 bg-orange-50 rounded-2xl border-r-4 border-[#f27c21]">
                <h4 className="font-black text-black mb-2 flex items-center gap-2">
                   <FaIdCard /> הסמכה מקצועית
                </h4>
                <p className="text-sm">מוקדני החברה ומנהל המוקד עוברים הסמכה מקצועית ב"יחידה לביטחון לאומי" ומחזיקים בתעודות "מפעיל מוקד" ו"מנהל מוקד".</p>
              </div>
              <p className="text-sm italic">מנהל המוקד אחראי על נהלים, אישורי חיבור, תקינות וכלל פעילות המוקד המבצעי.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <FaDatabase />, title: "בסיס נתונים", desc: "מיקום העסק, סיסמאות, שעות עבודה ואנשי קשר לאבחון מדויק." },
              { icon: <MdMonitorHeart />, title: "אבחון קריאות", desc: "שימוש בנתוני יועצי הביטחון לטיפול אופטימלי בכל אירוע." }
            ].map((box, i) => (
              <div key={i} className="p-8 border border-black/5 rounded-3xl bg-[#fcfcfc]">
                <div className="text-[#f27c21] text-2xl mb-4">{box.icon}</div>
                <h4 className="font-black mb-2">{box.title}</h4>
                <p className="text-xs text-black/50 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* רשימת שירותי המוקד - Grid טכנולוגי */}
      <section className="py-24 bg-black text-white rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-black mb-16 text-center text-[#f27c21]">סל שירותי המוקד</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {[
              "בקשת סיסמא בקריאה חריגה", "דו\"ח מערכת כבויה", "הפסקת חשמל",
              "נפילת מתח", "אזעקות ביותר מאזור אחד", "נפילת קו טלפון / חוסר אות GPRS",
              "שרות מוקד רואה (צפייה בזמן אירוע)", "שירות וידאו אנליטיקה", "איתור נזילות מים"
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-4 border-b border-white/10 pb-4 group"
              >
                <div className="w-2 h-2 bg-[#f27c21] rounded-full group-hover:scale-150 transition-transform" />
                <span className="font-bold text-lg italic uppercase">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* טבלת השוואת ערוצי תקשורת */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-x-auto">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter italic">Comparison: Communication Channels</h2>
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b-2 border-black text-xs font-black uppercase">
              <th className="py-6 px-4">פרמטר</th>
              <th className="py-6 px-4 text-[#f27c21]">GPRS</th>
              <th className="py-6 px-4">מתאם סלולרי</th>
              <th className="py-6 px-4">משדר RF</th>
              <th className="py-6 px-4">חייגן</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium divide-y divide-black/5">
            {[
              { label: "טווח", vals: ["ללא מוגבל", "ללא מוגבל", "מוגבל", "ללא מוגבל"] },
              { label: "תשתיות", vals: ["דורש שרת ו-SIM", "כיסוי סלולארי", "ממסר RF", "קו בזק/הוט"] },
              { label: "בקרה על הערוץ", vals: ["שוטפת (כל מס' דקות)", "לא קיימת", "אות בדיקה יומי", "אות בדיקה במרווחים גדולים"] },
              { label: "מידע מועבר", vals: ["מלא ברמת אזור", "מלא ברמת אזור", "מוגבלת", "מלא ברמת אזור"] },
              { label: "אמינות", vals: ["גבוהה", "בינונית", "בינונית", "טובה"] },
              { label: "עמידות לנטרול", vals: ["גבוהה מאוד", "גבוהה", "טובה", "חלשה"] },
              { label: "מהירות העברה", vals: ["מהירה", "נמוכה", "טובה", "נמוכה"] },
              { label: "עלות חודשית", vals: ["בינונית", "בינונית", "נמוכה - בינונית", "נמוכה"] }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-orange-50/30 transition-colors">
                <td className="py-6 px-4 font-black bg-white sticky right-0">{row.label}</td>
                {row.vals.map((v, j) => (
                  <td key={j} className={`py-6 px-4 ${j === 0 ? "text-[#f27c21] font-black" : "text-black/60"}`}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* מערך הסיור - כוח מבצעי */}
      <section className="py-24 bg-[#fcfcfc] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <FaCar className="text-[#f27c21] text-5xl mb-8" />
              <h2 className="text-4xl font-black mb-6">מערך הסיור המבצעי</h2>
              <p className="text-lg text-black/60 font-medium leading-relaxed mb-8">
                ניידות סיור בולטות בפריסה רחבה המאוישות על ידי סיירים חמושים בהתאם לתקינה המחמירה של משטרת ישראל.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt className="text-[#f27c21] shrink-0" />
                  <p className="text-sm font-bold">מעקב GPS מדויק ומערכות קשר אלחוטיות וסלולאריות.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <FaShieldAlt className="text-[#f27c21] shrink-0" />
                  <p className="text-sm font-bold">רכב כוננות זמין תמיד להחלפת ניידת תקולה.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white p-10 rounded-[3rem] shadow-xl border border-black/5 relative">
              <div className="absolute top-0 left-10 w-12 h-1 bg-[#f27c21]" />
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Operational Protocols</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex justify-between border-b border-black/5 pb-2"><span>חפיפה בהחלפת משמרת והעברת מידע</span> <FaCheckCircle className="text-green-500" /></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>פטרול ובדיקה יסודית בהגעה למבנה</span> <FaCheckCircle className="text-green-500" /></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>הפחתת קריאות שווא למקסום זמני תגובה</span> <FaCheckCircle className="text-green-500" /></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>העברת מידע יסודי למוקד לפי פרוטוקול</span> <FaCheckCircle className="text-green-500" /></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* נוהל קריאת אזעקה */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center border-2 border-black p-16 rounded-[4rem] relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 font-black text-xl italic uppercase">Alarm Protocol</div>
          <p className="text-xl font-bold leading-relaxed">
            בכל קריאה מחוץ לשעות הפעילות תישלח ניידת לאבחון. במקרה של אזעקה משני אזורים ויותר, יוזמן בעל הנכס למקום כאשר הסייר ימתין לו בשטח.
          </p>
        </div>
      </section>

    </div>
  );
}

// קומפוננטת עזר
function FaCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}