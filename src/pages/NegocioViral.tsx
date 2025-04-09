import { useEffect, useCallback, useRef } from "react";
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
import WhatsAppButton from "../components/NegocioViral/WhatsAppButton";
import "../styles/NegocioViralScrollbar.css";
import backgroundimage from "../assets/negocioViral/bg3.png";
import backgroundimagemobile from "../assets/negocioViral/bg3.png";
import useNegocioViralTracking from "../utils/negocioViralTracker";
import { useMetaPixel } from "../contexts/MetaPixelContext";
import SectionViewTracker from "../components/tracking/SectionViewTracker";
import ScrollDepthTracker from "../components/tracking/ScrollDepthTracker";

export default function NegocioViral() {
  // Get tracking functions
  const tracking = useNegocioViralTracking();
  const { trackStandardEvent } = useMetaPixel();
  const initialPageViewTracked = useRef(false);

  // Track page view ONCE on initial page load only
  useEffect(() => {
    // Only track if we haven't tracked this page view yet
    if (!initialPageViewTracked.current) {
      // Track standard Meta Pixel ViewContent event
      trackStandardEvent("ViewContent", {
        content_name: "Negocio Viral",
        content_category: "sales_page",
        content_ids: ["negocioviral_page"],
        content_type: "product",
      });

      // Track custom page load event
      tracking.trackCustomEvent("page_loaded", {
        page: "negocio_viral",
        referrer: document.referrer,
        url: window.location.href,
      });

      // Mark as tracked
      initialPageViewTracked.current = true;
    }
  }, []); // Empty dependency array - only runs once on mount

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

  // Track when a section becomes visible
  const handleSectionVisible = useCallback(
    (sectionName: string) => {
      tracking.trackSectionView(sectionName);
    },
    [tracking]
  );

  // Track scroll depth
  const handleScrollThreshold = useCallback(
    (threshold: number) => {
      tracking.trackScrollDepth(threshold as 25 | 50 | 75 | 100);
    },
    [tracking]
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#131313]">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton
        phoneNumber="+551131350879"
        message="Olá! Estou interessado no curso Negócio Viral e gostaria de saber mais informações!"
      />

      {/* Add ScrollDepthTracker component */}
      <ScrollDepthTracker
        thresholds={[25, 50, 75, 100]}
        onThresholdReached={handleScrollThreshold}
      />

      {/* Countdown Timer - Fixed at the top */}
      <CountdownTimer
        initialMinutes={10}
        onExpire={() =>
          tracking.trackCustomEvent("timer_expired", {
            page: "negocio_viral",
          })
        }
      />

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
              <MainContent
                onCtaClick={(buttonName) =>
                  tracking.trackButtonClick(buttonName, "hero_section", {
                    position: "top",
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Container for all sections with full-width background */}
      <div className="bg-[#131313] w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Introduction section */}
          <SectionViewTracker
            sectionName="introduction"
            onVisible={handleSectionVisible}
          >
            <IntroductionSection />
          </SectionViewTracker>

          {/* Benefits section */}
          <SectionViewTracker
            sectionName="benefits"
            onVisible={handleSectionVisible}
          >
            <BenefitsSection />
          </SectionViewTracker>

          {/* Features section */}
          <SectionViewTracker
            sectionName="features"
            onVisible={handleSectionVisible}
          >
            <FeaturesSection />
          </SectionViewTracker>

          {/* Bonus section */}
          <SectionViewTracker
            sectionName="bonus"
            onVisible={handleSectionVisible}
          >
            <BonusSection />
          </SectionViewTracker>

          {/* Target audience section */}
          <SectionViewTracker
            sectionName="target_audience"
            onVisible={handleSectionVisible}
          >
            <TargetAudienceSection />
          </SectionViewTracker>

          {/* Testimonials section */}
          <SectionViewTracker
            sectionName="testimonials"
            onVisible={handleSectionVisible}
          >
            <TestimonialsSection
              onTestimonialInteraction={(testimonialId) =>
                tracking.trackCustomEvent("testimonial_interaction", {
                  testimonial_id: testimonialId,
                  page: "negocio_viral",
                })
              }
            />
          </SectionViewTracker>

          {/* Pricing section */}
          <SectionViewTracker
            sectionName="pricing"
            onVisible={handleSectionVisible}
          >
            <PricingSection
              onModalOpen={(modalName) =>
                tracking.trackModalInteraction("open", modalName)
              }
              onModalClose={(modalName) =>
                tracking.trackModalInteraction("close", modalName)
              }
              onCheckoutClick={(planId, price) => {
                // Track standard InitiateCheckout event
                tracking.trackPurchaseFunnel("InitiateCheckout", {
                  content_name: "Negocio Viral",
                  content_category: "sales_page",
                  content_ids: [planId],
                  value: price,
                  currency: "BRL",
                });

                // Also track custom checkout click event
                tracking.trackCustomEvent("click_checkout_button", {
                  plan_id: planId,
                  price: price,
                  currency: "BRL",
                });
              }}
            />
          </SectionViewTracker>

          {/* Guarantee section */}
          <SectionViewTracker
            sectionName="guarantee"
            onVisible={handleSectionVisible}
          >
            <GuaranteeSection
              onGuaranteeClick={() =>
                tracking.trackCustomEvent("guarantee_click", {
                  page: "negocio_viral",
                })
              }
            />
          </SectionViewTracker>

          {/* Coach section */}
          <SectionViewTracker
            sectionName="coach"
            onVisible={handleSectionVisible}
          >
            <CoachSection />
          </SectionViewTracker>

          {/* FAQ section */}
          <SectionViewTracker
            sectionName="faq"
            onVisible={handleSectionVisible}
          >
            <FaqSection
              onFaqExpand={(faqId) =>
                tracking.trackCustomEvent("faq_expanded", {
                  faq_id: faqId,
                  page: "negocio_viral",
                })
              }
            />
          </SectionViewTracker>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
