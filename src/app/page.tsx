import HeroSection from "./(components)/HeroSection";
import ServicesSection from "./(components)/ServicesSection";
import FeaturesSection from "./(components)/FeaturesSection";
import ExtrasSection from "./(components)/ExtrasSection";
import ContactSection from "./(components)/ContactSection";
import Footer from "./(components)/Footer";

export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen w-full">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ExtrasSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
