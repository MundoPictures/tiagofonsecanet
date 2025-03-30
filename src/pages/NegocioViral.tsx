import { useEffect } from "react";
import Background from "../components/NegocioViral/Background";
import Header from "../components/NegocioViral/Header";
import MainContent from "../components/NegocioViral/MainContent";
import BenefitsSection from "../components/NegocioViral/BenefitsSection";
import TargetAudienceSection from "../components/NegocioViral/TargetAudienceSection";
import TestimonialsSection from "../components/NegocioViral/TestimonialsSection";
import PricingSection from "../components/NegocioViral/PricingSection";
import GuaranteeSection from "../components/NegocioViral/GuaranteeSection";
import CoachSection from "../components/NegocioViral/CoachSection";
import Footer from "../components/NegocioViral/Footer";
import CountdownTimer from "../components/NegocioViral/CountdownTimer";
import FaqSection from "../components/NegocioViral/FaqSection";
import IntroductionSection from "../components/NegocioViral/IntroductionSection";
import FeaturesSection from "../components/NegocioViral/FeaturesSection";
import BonusSection from "../components/NegocioViral/BonusSection";
import "../styles/NegocioViralScrollbar.css";
import backgroundimage from "../assets/negocioViral/bg3.png";
import backgroundimagemobile from "../assets/negocioViral/bg3.png";

export default function NegocioViral() {
  const handleCtaClick = () => {
    // Handle CTA button click
    console.log("CTA clicked");
    // You can add navigation, form display, etc. here
  };

  // Add/remove the class to html element on mount/unmount
  useEffect(() => {
    // Add class when component mounts
    document.documentElement.classList.add("negocio-viral-page");

    // Add body background color
    document.body.style.backgroundColor = "#131313";

    // Remove class when component unmounts
    return () => {
      document.documentElement.classList.remove("negocio-viral-page");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#131313]">
      {/* Countdown Timer - Fixed at the top */}
      <CountdownTimer initialMinutes={10} />

      {/* Hero section with background */}
      <div className="relative min-h-screen md:min-h-screen">
        {/* Background with image */}
        <Background
          imageUrl={backgroundimage}
          mobileImageUrl={backgroundimagemobile}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen pt-10 sm:pt-16 md:pt-28 lg:pt-32 px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            {/* Header with logo */}
            <Header />

            {/* Main content with text and CTA - optimized for mobile and desktop */}
            <div className="mt-2 md:mt-12 lg:mt-16">
              <MainContent onCtaClick={handleCtaClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Container for all sections with full-width background */}
      <div className="bg-[#131313] w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Introduction section */}
          <IntroductionSection onCtaClick={handleCtaClick} />

          {/* Benefits section */}
          <BenefitsSection />

          {/* Features section */}
          <FeaturesSection />

          {/* Bonus section */}
          <BonusSection />

          {/* Target audience section */}
          <TargetAudienceSection onCtaClick={handleCtaClick} />

          {/* Testimonials section */}
          <TestimonialsSection />

          {/* Pricing section */}
          <PricingSection onCtaClick={handleCtaClick} />

          {/* Guarantee section */}
          <GuaranteeSection onCtaClick={handleCtaClick} />

          {/* Coach section */}
          <CoachSection />

          {/* FAQ section */}
          <FaqSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
