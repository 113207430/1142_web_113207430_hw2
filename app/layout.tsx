import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import "@fontsource/noto-serif-tc/700.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "✨🌈你的死後世界長怎樣🌈✨",
  description: "心理測驗",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      lang="zh-TW"
      translate="no"
    >
      <body className="h-screen flex justify-center items-center py-7 box-border" 
      style={{ 
    backgroundImage: "url('/backgrounds/l.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"}} >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}