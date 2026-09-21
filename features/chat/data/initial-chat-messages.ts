import { GroupChatMessage } from "../types/chat-types";

export const INITIAL_GROUP_MESSAGES: GroupChatMessage[] = [
  {
    id: "seed-1",
    senderName: "Putra Rizky",
    senderRole: "Owner / Host",
    isOwner: true,
    avatarInitials: "PR",
    avatarColor: "bg-[#689F99] text-white",
    content:
      "Halo semuanya! Selamat datang di ruang diskusi heytraa.com. Silakan drop feedback, komentar seputar sistem/portofolio, atau sapa di sini!",
    timestamp: "09:15",
    isUser: false,
  },
  {
    id: "seed-2",
    senderName: "Dimas Pratama",
    senderRole: "Backend Developer",
    isOwner: false,
    avatarInitials: "DP",
    avatarColor: "bg-indigo-500 text-white",
    content:
      "Suka banget sama implementasi Clean Architecture di REST API Golang-nya, rapi dan modular.",
    timestamp: "10:30",
    isUser: false,
  },
  {
    id: "seed-3",
    senderName: "Sarah Amelia",
    senderRole: "UI/UX Designer",
    isOwner: false,
    avatarInitials: "SA",
    avatarColor: "bg-pink-500 text-white",
    content:
      "Desain dark mode & micro-interaction-nya smooth banget! Clean aesthetic-nya dapet pol.",
    timestamp: "11:42",
    isUser: false,
  },
  {
    id: "seed-4",
    senderName: "Arif Setiawan",
    senderRole: "Client",
    isOwner: false,
    avatarInitials: "AS",
    avatarColor: "bg-emerald-600 text-white",
    content:
      "Responsif dan transparan pas delivery project kemaren. Sukses terus buat SaaS Fixora & open-source tools-nya!",
    timestamp: "14:20",
    isUser: false,
  },
  {
    id: "seed-5",
    senderName: "Fajar Ramadhan",
    senderRole: "Fullstack Engineer",
    isOwner: false,
    avatarInitials: "FR",
    avatarColor: "bg-amber-500 text-white",
    content:
      "Kombinasi Go Fiber + Next.js + Qdrant emang top tier buat AI systems modern. Mantap bro traa!",
    timestamp: "16:05",
    isUser: false,
  },
  {
    id: "seed-6",
    senderName: "Rian Hidayat",
    senderRole: "Software Engineer",
    isOwner: false,
    avatarInitials: "RH",
    avatarColor: "bg-cyan-600 text-white",
    content:
      "Keren transisi dari electrical maintenance ke software engineering, komitmennya bener-bener tercermin di kualitas kode! Respect.",
    timestamp: "18:22",
    isUser: false,
  },
];
