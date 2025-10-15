import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo-moderno",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OloResort - Experience a unique accommodation experience in Levi, Lapland",
  description: "Your dream vacation awaits in Levi, Kittilä, in the embrace of the fells and under the blazing northern lights. Stay in a wonderful OloResort Suite and choose unforgettable experiences from our carefully curated selection of activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${museoModerno.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
