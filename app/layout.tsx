import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OloResort - Luxury Glass Igloos in Levi, Lapland",
  description: "Experience a unique accommodation in Levi, in the enchanting nature of Lapland. Glass igloos, Northern Lights, and unforgettable Lapland experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-[#204ce5]">OloResort</div>
              <div className="hidden md:flex space-x-8">
                <a href="#accommodation" className="text-gray-700 hover:text-[#204ce5] transition">Accommodation</a>
                <a href="#activities" className="text-gray-700 hover:text-[#204ce5] transition">Activities</a>
                <a href="#itineraries" className="text-gray-700 hover:text-[#204ce5] transition">Travel Itineraries</a>
                <a href="#autumn" className="text-gray-700 hover:text-[#204ce5] transition">Autumn</a>
                <a href="#blog" className="text-gray-700 hover:text-[#204ce5] transition">Blog</a>
                <a href="#contact" className="text-gray-700 hover:text-[#204ce5] transition">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">OloResort</h3>
                <p className="text-gray-400">Luxury glass igloos in Levi, Lapland</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">Email: levi@oloresort.fi</p>
                <p className="text-gray-400">Sales: +358 44 901 4162</p>
                <p className="text-gray-400">Reception: +358 44 901 4164</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Address</h3>
                <p className="text-gray-400">Taalontie 46</p>
                <p className="text-gray-400">99130 Sirkka, Finland</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
