import { CategoryCards } from "@/components/CategoryCards";
import { FAQ } from "@/components/FAQ";
import { FeaturedTemplates } from "@/components/FeaturedTemplates";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingPreview } from "@/components/PricingPreview";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryCards />
        <FeaturedTemplates />
        <HowItWorks />
        <Features />
        <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-10 sm:px-6 lg:grid-cols-[1.35fr_0.85fr] lg:px-8">
          <PricingPreview />
          <Testimonial />
        </section>
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
