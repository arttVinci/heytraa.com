export interface LocalizedString {
  id: string;
  en: string;
}

export interface SocialProfile {
  name: string;
  handle: string;
  url: string;
  iconName: "linkedin" | "github";
}

export interface ContactChannel {
  id: string;
  label: LocalizedString;
  value: string;
  href: string;
  isCopyable?: boolean;
  tag: LocalizedString;
}

export interface ContactData {
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    subtitle: LocalizedString;
  };
  directInfo: {
    email: string;
    location: LocalizedString;
    timezone: string;
    availability: LocalizedString;
    responseTime: LocalizedString;
  };
  socialProfiles: SocialProfile[];
}

export const contactData: ContactData = {
  hero: {
    eyebrow: {
      id: "Hubungi & Kolaborasi",
      en: "Get in Touch & Connect",
    },
    title: {
      id: "Mari Diskusikan Proyek, Jasa, atau Ide Kolaborasi Anda",
      en: "Let's Discuss Your Project, Services, or Collaboration",
    },
    subtitle: {
      id: "Punya ide produk baru, kebutuhan arsitektur backend Golang berkinerja tinggi, sistem web Next.js, atau integrasi AI? Kirim pesan langsung atau terhubung melalui profil profesional saya.",
      en: "Have a new project idea, high-throughput Golang backend requirements, a Next.js web application, or AI integrations? Send a message directly or connect via my professional profiles.",
    },
  },
  directInfo: {
    email: "traarzkyy97@gmail.com",
    location: {
      id: "Bekasi, Jawa Barat, Indonesia",
      en: "Bekasi, West Java, Indonesia",
    },
    timezone: "WIB (UTC+7)",
    availability: {
      id: "Terbuka untuk Freelance & Kontrak Teknis",
      en: "Open for Freelance & Technical Contracts",
    },
    responseTime: {
      id: "Respons cepat biasanya dalam < 24 jam",
      en: "Fast response usually within < 24 hours",
    },
  },
  socialProfiles: [
    {
      name: "LinkedIn",
      handle: "Putra Rizky Nugraha",
      url: "https://www.linkedin.com/in/putra-rizky-nugraha",
      iconName: "linkedin",
    },
    {
      name: "GitHub",
      handle: "@arttVinci",
      url: "https://github.com/arttVinci",
      iconName: "github",
    },
  ],
};
