import { DoctorTrustProfileTemplate } from "@/components/DoctorTrustProfileTemplate";
import { PremiumOnePageTemplate } from "@/components/PremiumOnePageTemplate";
import { premiumTemplates } from "@/data/premiumTemplates";
import { PublicPortfolioTemplate } from "@/components/PublicPortfolioTemplate";
import { publicTemplates } from "@/data/publicTemplates";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [...publicTemplates, ...premiumTemplates].map((template) => ({
    templateSlug: template.slug,
  }));
}

export default async function PublishedTemplatePage({
  params,
}: {
  params: Promise<{ templateSlug: string }>;
}) {
  const { templateSlug } = await params;
  const template = publicTemplates.find((item) => item.slug === templateSlug);
  const premiumTemplate = premiumTemplates.find((item) => item.slug === templateSlug);

  if (template?.slug === "doctor-trust-profile") {
    return <DoctorTrustProfileTemplate />;
  }

  if (premiumTemplate) {
    return <PremiumOnePageTemplate template={premiumTemplate} />;
  }

  if (!template) {
    notFound();
  }

  return <PublicPortfolioTemplate template={template} />;
}
