"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const securityServices = [
  { name: "שירותי מוקד, סיור ובקרה", href: "/cars", highlight: true },
  { name: "מוקד וידאו אנליטיקה", href: "/analytical-cameras" },
  { name: "מערכות אזעקה", href: "/alarm-systems" },
  { name: "מצלמות אבטחה ושליטה", href: "/cameras" },
  { name: "מכתבי המלצה", href: "/recommendation-letters" },
  { name: "שירות אנליטיקה בענן", href: "/cloud-analytics" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // State חדש לקולפס במובייל

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-[#f27c21] shadow-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-[#f27c21] font-black text-3xl leading-none italic">▲</div>
          <div className="flex flex-col">
            <span className="font-black text-xl text-black leading-tight">מוקד תמנון</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Security Services</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-bold text-black hover:text-[#f27c21] transition-colors">ראשי</Link>
          
          {/* Dropdown Desktop */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 font-black text-black h-full border-b-4 transition-all ${isDropdownOpen ? 'border-[#f27c21]' : 'border-transparent'}`}>
              שירותי אבטחה
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full w-64 bg-white shadow-2xl border border-gray-100 py-2 rounded-b-xl"
                >
                  {securityServices.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href}
                      className={`block px-6 py-3 text-right text-[15px] font-bold hover:bg-gray-50 transition-colors ${item.highlight ? "text-[#f27c21]" : "text-black"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/insurance" className="font-bold text-black hover:text-[#f27c21] transition-colors">דרישות ביטוח</Link>
          <Link href="/contact" className="font-bold text-black hover:text-[#f27c21] transition-colors">צור קשר</Link>
          
          <a href="tel:1700505050" className="bg-[#f27c21] text-white p-2 rounded-full hover:scale-110 transition-transform">
            <Phone size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-black text-lg py-2">ראשי</Link>
              
              {/* Collapsible Mobile Item */}
              <div className="border-b border-gray-50 pb-2">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between font-bold text-black text-lg py-2"
                >
                  שירותי אבטחה
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-[#f27c21]' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50 rounded-lg mt-2"
                    >
                      <div className="flex flex-col py-2 pr-4 space-y-3">
                        {securityServices.map((item, idx) => (
                          <Link 
                            key={idx} 
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block font-bold py-1 ${item.highlight ? "text-[#f27c21]" : "text-black"}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" onClick={() => setIsOpen(false)} className="font-bold text-black text-lg py-2">צור קשר</Link>
              
              <a href="tel:1700505050" className="flex items-center gap-2 text-[#f27c21] font-bold py-4">
                <Phone size={18} /> 1-700-50-50-50
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}