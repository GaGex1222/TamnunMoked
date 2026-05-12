// app/recommendations/page.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaSearchPlus, FaAward } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function RecommendationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // רשימת הקבצים לפי השמות שסיפקת
  const recommendations = [
    "1.webp", "2.webp", "3.jpg", "4.webp", "5.webp", 
    "6.webp", "7.webp", "8.webp", "9.webp", "10.webp", "11.webp"
  ];

  return (
    <div className="flex flex-col w-full bg-white text-right font-sans" dir="rtl">
      
      {/* Header Section */}
      <section className="bg-[#1a1a1a] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f27c21] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-right"
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="bg-[#f27c21] p-3 rounded-lg text-white shadow-lg">
                    <FaAward size={30} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white">מכתבי המלצה</h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-medium">
              הביטחון שלכם הוא המקצועיות שלנו. אנחנו גאים להציג חלק ממכתבי התודה וההמלצה שקיבלנו מלקוחותינו לאורך השנים - עסקים, מוסדות ולקוחות פרטיים.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {recommendations.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(file)}
                className="group cursor-pointer relative bg-white p-4 rounded-2xl shadow-sm border border-gray-200 hover:border-[#f27c21] hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[1/1.4] bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                  <img 
                    src={`/${file}`} 
                    alt={`מכתב המלצה ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="bg-[#f27c21] p-4 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform">
                        <FaSearchPlus size={24} />
                     </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-[#1a1a1a]">
                  <span className="font-bold text-sm">המלצה {index + 1}</span>
                  <HiOutlineDocumentText className="text-[#f27c21]" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Full Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 left-8 text-white hover:text-[#f27c21] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={`/${selectedImage}`} 
                alt="מכתב המלצה מוגדל"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-4 border-white/10"
              />
            </motion.div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-medium text-sm">
              לחץ בכל מקום כדי לסגור
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-6 italic">הצטרפו לאלפי הלקוחות המרוצים שלנו</h2>
            <p className="text-gray-500 mb-8 font-medium">אנחנו מחויבים לשירות מקצועי, אמין ומהיר 24/7.</p>
            <a 
              href="/#contact"
              className="inline-block bg-[#f27c21] text-white px-10 py-4 rounded-xl font-black text-xl shadow-lg hover:bg-black transition-all transform active:scale-95"
            >
              צרו קשר עכשיו
            </a>
        </div>
      </section>

      {/* Footer link */}
      <footer className="py-8 bg-gray-50 text-center border-t border-gray-100">
          <a href="/" className="text-[#f27c21] font-bold hover:underline">חזרה לעמוד הבית - מוקד תמנון</a>
      </footer>
    </div>
  );
}