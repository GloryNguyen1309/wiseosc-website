import { ApproachSection } from "./sections/approach-section";
import { ProcessSection } from "@/app/(main)/sections/process-section";
import { TestimonialsSection } from "@/app/(main)/sections/testimonials-section";
import { CTASection } from "@/app/(main)/sections/cta-section";
import HeroSection from "./sections/hero-section";
import ServicesSection from "./sections/services-section";
import FeaturedWorkSection from "./sections/featured-work-section";
import { TechStackSection } from "./sections/tech-stack-section";
import WorkSection from "./sections/work-section";
import TrustedBySection from "./sections/trusted-by-section";
import AchievementsSection from "./sections/achievements-section";
import VoiceOfOurClientsSection from "./sections/voice-of-our-clients-section";
import OurWorkSection from "./sections/our-work-section";
import AboutCommitment from "./sections/about-commitment";
import { FreeTrialCampaignProvider } from "@/components/free-trial-home-modal";
import { getCertificatePublicPaths } from "@/lib/certificates";

export default function Home() {
  const certificates = getCertificatePublicPaths();

  return (
    <FreeTrialCampaignProvider>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection certificates={certificates} />
        <AchievementsSection />
        <AboutCommitment />

        {/* Process Section */}
        {/* <ProcessSection /> */}

        {/* Services Section */}
        <ServicesSection />

        <TrustedBySection />
        <img
          src="/team-banner.jpg"
          alt="Wise Accelerate Team"
          className="object-cover w-full h-auto"
        />

        {/* Approach Section */}
        <ApproachSection />

        <VoiceOfOurClientsSection />

        <OurWorkSection />

        {/* CTA Section */}
        <section className="py-16 bg-[#01071A]">
          <CTASection />
        </section>

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Featured Work Section */}
        {/* <FeaturedWorkSection /> */}

        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}

        {/* Work Section */}
        {/* <WorkSection /> */}

        {/* Footer */}
      </main>
    </FreeTrialCampaignProvider>
  );
}
