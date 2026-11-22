import { permanentRedirect } from "next/navigation";

export default async function LegacyResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/science`);
}
