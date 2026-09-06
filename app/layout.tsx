import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarNavbar } from "@/shared/components/layout";
import { AssistantChat } from "@/features/assistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Putra Rizky (@traa_rzkyy) - Software Engineer & Services",
  description:
    "Personal portfolio, engineering journey, and digital services by Putra Rizky Nugraha. Full-Stack Developer, Golang Clean Architecture, Next.js, and AI Integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-[#0284c7] selection:text-white relative">
        {/* Subtle Background Grid Kotak-Kotak with Ocean Blue Tint */}
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern bg-grid-mask opacity-80"
          aria-hidden="true"
        />

        {/* Ambient soft glow accents */}
        <div
          className="fixed top-[-5%] left-[25%] w-[550px] h-[550px] rounded-full bg-sky-300/15 blur-[140px] pointer-events-none z-0"
          aria-hidden="true"
        />
        <div
          className="fixed bottom-[-10%] right-[15%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[150px] pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Main Application Shell Layout */}
        <div className="relative z-10 w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-8 pb-24 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch flex-1">
          {/* Left Column: Profile Sidebar / Navbar */}
          <SidebarNavbar />

          {/* Right Column: Dynamic Page Content */}
          <main className="flex-1 w-full min-w-0">{children}</main>
        </div>

        {/* Floating AI Assistant Chat (Assistant heytraa) */}
        <AssistantChat />
      </body>
    </html>
  );
}
