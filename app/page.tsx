import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CertificationsTicker } from "@/components/certifications-ticker"
import { FaqSection } from "@/components/faq-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <CertificationsTicker />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
