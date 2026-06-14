import { DoctorTrustProfileTemplate } from "@/components/DoctorTrustProfileTemplate";
import { PublicPortfolioTemplate } from "@/components/PublicPortfolioTemplate";
import { publicTemplates } from "@/data/publicTemplates";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return publicTemplates.map((template) => ({
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

  if (!template) {
    notFound();
  }

  if (template.slug === "doctor-trust-profile") {
    return <DoctorTrustProfileTemplate />;
  }

  return <PublicPortfolioTemplate template={template} />;
}
