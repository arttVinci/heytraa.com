import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { SidebarNavbar, BackgroundGrid } from "@/shared/components/layout";
import { ThemeInitializer } from "@/shared/components/layout/theme-initializer";
import { AssistantChat } from "@/features/assistant";
import { ClickSpark } from "@/shared/components/click-spark";
import { SmoothCursor } from "@/shared/components/smooth-cursor";
import { LanguageProvider } from "@/shared/context/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heytraa.com"),
  title: "Putra Rizky (@traa_rzkyy) - Software Engineer & Services",
  description:
    "Personal portfolio, engineering journey, and digital services by Putra Rizky Nugraha. Full-Stack Developer, Golang Clean Architecture, Next.js, and AI Integration.",
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  openGraph: {
    title: "Putra Rizky (@traa_rzkyy) - Software Engineer & Services",
    description:
      "Personal portfolio, engineering journey, and digital services by Putra Rizky Nugraha. Full-Stack Developer, Golang Clean Architecture, Next.js, and AI Integration.",
    url: "https://heytraa.com",
    siteName: "heytraa.com",
    images: [
      {
        url: "/images/logo-text.png",
        width: 1200,
        height: 630,
        alt: "heytraa.com logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Putra Rizky (@traa_rzkyy) - Software Engineer & Services",
    description:
      "Full-Stack Developer, Golang Clean Architecture, Next.js, and AI Integration.",
    images: ["/images/logo-text.png"],
    creator: "@traa_rzkyy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] dark:bg-[#090e17] text-[#2D3342] dark:text-[#F5F8F9] selection:bg-[#689F99] selection:text-white relative transition-colors duration-300">
        <ThemeInitializer />
        <LanguageProvider>
          <SmoothCursor />
          <BackgroundGrid />
          <ClickSpark />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-2.5 sm:px-[23px] lg:px-[39px] xl:px-[47px] pt-20 lg:pt-10 pb-28 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch flex-1">
            <SidebarNavbar />
            <main className="flex-1 w-full min-w-0">{children}</main>
          </div>
          <AssistantChat />
        </LanguageProvider>
      </body>
    </html>
  );
}
