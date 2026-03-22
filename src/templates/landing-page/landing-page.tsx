import { FeatureSection } from "./sections/feature-section/feature-section";
import { SupportSection } from "./sections/support-section/support-section";
import { CustomerStorySection } from "./sections/customer-story-section/customer-story-section";
import { HeroSection } from "./sections/hero-section/hero-section";

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  );
}
