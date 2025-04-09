import { StandardEvent, useMetaPixel } from "../contexts/MetaPixelContext";

/**
 * Event names for tracking in the Negocio Viral page
 */
export const NegocioViralEvents = {
  // Page sections viewed
  VIEW_INTRODUCTION: "view_introduction_section",
  VIEW_BENEFITS: "view_benefits_section",
  VIEW_FEATURES: "view_features_section",
  VIEW_BONUS: "view_bonus_section",
  VIEW_TARGET_AUDIENCE: "view_target_audience_section",
  VIEW_TESTIMONIALS: "view_testimonials_section",
  VIEW_PRICING: "view_pricing_section",
  VIEW_GUARANTEE: "view_guarantee_section",
  VIEW_COACH: "view_coach_section",
  VIEW_FAQ: "view_faq_section",

  // User interactions
  OPEN_MODAL: "open_modal",
  CLOSE_MODAL: "close_modal",
  CLICK_CTA: "click_cta_button",
  CLICK_CHECKOUT: "click_checkout_button",
  CLICK_GUARANTEE: "click_guarantee",
  TESTIMONIAL_INTERACTION: "testimonial_interaction",
  SCROLL_DEPTH_25: "scroll_depth_25_percent",
  SCROLL_DEPTH_50: "scroll_depth_50_percent",
  SCROLL_DEPTH_75: "scroll_depth_75_percent",
  SCROLL_DEPTH_100: "scroll_depth_100_percent",

  // Countdown timer event
  TIMER_EXPIRED: "timer_expired",

  // Video engagement (if you have videos)
  VIDEO_START: "video_start",
  VIDEO_25_PERCENT: "video_watched_25_percent",
  VIDEO_50_PERCENT: "video_watched_50_percent",
  VIDEO_75_PERCENT: "video_watched_75_percent",
  VIDEO_COMPLETE: "video_complete",

  // Form interactions
  FORM_START: "form_start",
  FORM_STEP_COMPLETE: "form_step_complete",
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",

  // Purchase funnel
  ADD_TO_CART: "add_to_cart", // Use StandardEvent instead
  INITIATE_CHECKOUT: "initiate_checkout", // Use StandardEvent instead
  PURCHASE_COMPLETE: "purchase_complete", // Use StandardEvent instead
};

/**
 * Hook to use tracking specifically for the Negocio Viral page
 */
export const useNegocioViralTracking = () => {
  const { trackEvent, trackCustomEvent, trackStandardEvent } = useMetaPixel();

  // Track viewing a specific section
  const trackSectionView = (
    sectionName: string,
    additionalData?: Record<string, unknown>
  ) => {
    trackCustomEvent(`view_${sectionName}_section`, {
      section_name: sectionName,
      page: "negocio_viral",
      ...additionalData,
    });
  };

  // Track a button click
  const trackButtonClick = (
    buttonName: string,
    buttonLocation: string,
    additionalData?: Record<string, unknown>
  ) => {
    trackCustomEvent("button_click", {
      button_name: buttonName,
      button_location: buttonLocation,
      page: "negocio_viral",
      ...additionalData,
    });
  };

  // Track modal interaction
  const trackModalInteraction = (
    action: "open" | "close",
    modalName: string,
    additionalData?: Record<string, unknown>
  ) => {
    trackCustomEvent(`modal_${action}`, {
      modal_name: modalName,
      page: "negocio_viral",
      ...additionalData,
    });
  };

  // Track scroll depth
  const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
    trackCustomEvent(`scroll_depth_${depth}_percent`, {
      page: "negocio_viral",
    });
  };

  // Track purchase funnel events using standard Meta Pixel events
  const trackPurchaseFunnel = (
    stage: "AddToCart" | "InitiateCheckout" | "Purchase" | "Lead",
    data?: Record<string, unknown>
  ) => {
    trackStandardEvent(stage as StandardEvent, {
      page: "negocio_viral",
      ...data,
    });
  };

  return {
    trackSectionView,
    trackButtonClick,
    trackModalInteraction,
    trackScrollDepth,
    trackPurchaseFunnel,
    trackCustomEvent,
    trackStandardEvent,
    // Original track function for backward compatibility
    trackEvent,
  };
};

export default useNegocioViralTracking;
