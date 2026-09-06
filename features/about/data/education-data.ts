export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  badge: string;
}

export const educationList: EducationItem[] = [
  {
    institution: "Universitas Terbuka (Open University)",
    degree: "S1 Sistem Informasi (Bachelor Degree)",
    period: "2024 - Sekarang",
    description:
      "Memperdalam landasan formal arsitektur sistem informasi, manajemen basis data terdistribusi, siklus hidup perangkat lunak, dan tata kelola teknologi informasi modern.",
    badge: "Undergraduate (Active)",
  },
  {
    institution: "SMKN 5 Kota Bekasi",
    degree: "Teknik Elektronika Industri",
    period: "2020 - 2023",
    description:
      "Mempelajari logika otomasi industri, pemrograman mikrokontroler & PLC, instrumentasi sensorik, keselamatan kelistrikan (K3), dan troubleshooting sirkuit (Nilai: 83).",
    badge: "Vocational High School",
  },
];
