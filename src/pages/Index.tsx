import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";

const Index = () => {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <AuthoritySection />
        <ProblemsSection />
        <MethodSection />
        <ServicesSection />
        <PortfolioSection />
        <SocialProofSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
