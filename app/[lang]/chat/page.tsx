import type { Metadata } from "next";
import { GroupChatView } from "@/features/chat";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isId = lang === "id";

  return {
    title: isId
      ? "Grup Diskusi & Komentar | Putra Rizky Nugraha"
      : "Community Group Chat & Comments | Putra Rizky Nugraha",
    description: isId
      ? "Ruang publik terbuka untuk berdiskusi, memberikan feedback seputar portofolio dan proyek, serta bertukar insight teknologi bersama Putra Rizky."
      : "Open public community discussion room to leave feedback, discuss systems & projects, and share tech insights with Putra Rizky.",
  };
}

export default async function ChatPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return <GroupChatView />;
}
