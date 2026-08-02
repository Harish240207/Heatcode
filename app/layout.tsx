import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEYOND THE MASK | A Cinematic Interactive Experience",
  description: "Experience greatness with our 15 FPS high-performance HTML5 Canvas cinematic landing page.",
  keywords: ["Cinematic", "Canvas", "React 19", "Next.js 15", "Interactive", "Awwwards"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#030305] text-white antialiased`}>
      <body className="overflow-hidden bg-[#030305] font-sans selection:bg-[#E50914] selection:text-white">
        {children}
      </body>
    </html>
  );
}
