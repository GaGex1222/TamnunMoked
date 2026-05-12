import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// הגדרת פונט Heebo שתומך בעברית
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "מוקד תמנון | אבטחה, מיגון וסיור",
  description: "פתרונות אבטחה מתקדמים, מוקד מבצעי וסיור רכבים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full antialiased`}>
      <body className={`${heebo.className} min-h-full flex flex-col bg-white text-black`}>
        
        {/* Navbar component עם ה-Dropdown */}
        <Navbar />
        
        {/* התוכן הראשי של כל דף */}
        <main className="flex-grow">
          {children}
        </main>

        {/* פוטר מעוצב */}
        <footer className="bg-[#1a1a1a] text-white py-12 border-t-4 border-[#f27c21]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tighter">
                מוקד<span className="text-[#f27c21]">תמנון</span>
              </span>
            </div>
            <p className="text-gray-400 font-medium italic">
              © 2026 מוקד תמנון - ביטחון בראש שקט. כל הזכויות שמורות.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}