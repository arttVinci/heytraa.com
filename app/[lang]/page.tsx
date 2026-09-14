import { HomeView } from "@/features/home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return <HomeView />;
}
