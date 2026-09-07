import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarNavbar, BackgroundGrid } from "@/shared/components/layout";
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
        {/* Modern Vector Architectural Grid with Crosshairs */}
        <BackgroundGrid />

        {/* Main Application Shell Layout */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-2.5 sm:px-[23px] lg:px-[39px] xl:px-[47px] pt-20 lg:pt-10 pb-24 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch flex-1">
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
