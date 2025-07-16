import CallToActionSection from "./call-to-action-section";
import DiscoverSection from "./discover-section";
import FeaturesSection from "./features-section";
import FooterSection from "./footer-section";
import HeroSection from "./hero-section";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
