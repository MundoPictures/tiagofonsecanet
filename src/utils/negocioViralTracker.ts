import { StandardEvent, useMetaPixel } from "../contexts/MetaPixelContext";
import { getSourceParam } from "./urlParams";

/**
 * Event names for tracking in the Negocio Viral page - translated to Brazilian Portuguese
 */
export const NegocioViralEvents = {
  // Page sections viewed
  VIEW_INTRODUCTION: "visualizou_secao_introducao",
  VIEW_BENEFITS: "visualizou_secao_beneficios",
  VIEW_FEATURES: "visualizou_secao_recursos",
  VIEW_BONUS: "visualizou_secao_bonus",
  VIEW_TARGET_AUDIENCE: "visualizou_secao_publico_alvo",
  VIEW_TESTIMONIALS: "visualizou_secao_depoimentos",
  VIEW_PRICING: "visualizou_secao_precos",
  VIEW_GUARANTEE: "visualizou_secao_garantia",
  VIEW_COACH: "visualizou_secao_professor",
  VIEW_FAQ: "visualizou_secao_faq",

  // User interactions
  OPEN_MODAL: "abriu_modal",
  CLOSE_MODAL: "fechou_modal",
  CLICK_CTA: "clicou_botao_cta",
  CLICK_CHECKOUT: "clicou_botao_checkout",
  CLICK_GUARANTEE: "clicou_garantia",
  TESTIMONIAL_INTERACTION: "interagiu_depoimento",
  SCROLL_DEPTH_25: "rolagem_25_porcento",
  SCROLL_DEPTH_50: "rolagem_50_porcento",
  SCROLL_DEPTH_75: "rolagem_75_porcento",
  SCROLL_DEPTH_100: "rolagem_100_porcento",

  // Countdown timer event
  TIMER_EXPIRED: "temporizador_expirado",

  // Video engagement events
  VIDEO_CLICK: "clicou_video",
  VIDEO_START: "iniciou_video",
  VIDEO_PROGRESS: "progresso_video",
  VIDEO_PROGRESS_10: "progresso_video_10_porcento",
  VIDEO_PROGRESS_25: "progresso_video_25_porcento",
  VIDEO_PROGRESS_50: "progresso_video_50_porcento",
  VIDEO_PROGRESS_75: "progresso_video_75_porcento",
  VIDEO_COMPLETE: "completou_video",

  // Form interactions
  FORM_START: "iniciou_formulario",
  FORM_STEP_COMPLETE: "completou_etapa_formulario",
  FORM_SUBMIT: "enviou_formulario",
  FORM_ERROR: "erro_formulario",

  // Purchase funnel
  ADD_TO_CART: "adicionou_ao_carrinho",
  INITIATE_CHECKOUT: "iniciou_checkout",
  PURCHASE_COMPLETE: "compra_concluida",

  // Source tracking events
  SOURCE_ACCESSED_PAGE: "acessou_pagina_por_origem",
  BIO_ACCESSED_PAGE: "AcessouPaginaPorBio",
  REEL_ACCESSED_PAGE: "AcessouPaginaPorReel",
  STORY_ACCESSED_PAGE: "AcessouPaginaPorStory",
  ADS_ACCESSED_PAGE: "AcessouPaginaPorAnuncio",
  YT_ACCESSED_PAGE: "AcessouPaginaPorYT",
  STS_ACCESSED_PAGE: "AcessouPaginaPorSTS",
};

// Map from English event names to Portuguese event names for backward compatibility
const eventTranslationMap: Record<string, string> = {
  // Section views
  view_introduction_section: "visualizou_secao_introducao",
  view_benefits_section: "visualizou_secao_beneficios",
  view_features_section: "visualizou_secao_recursos",
  view_bonus_section: "visualizou_secao_bonus",
  view_target_audience_section: "visualizou_secao_publico_alvo",
  view_testimonials_section: "visualizou_secao_depoimentos",
  view_pricing_section: "visualizou_secao_precos",
  view_guarantee_section: "visualizou_secao_garantia",
  view_coach_section: "visualizou_secao_professor",
  view_faq_section: "visualizou_secao_faq",

  // User interactions
  open_modal: "abriu_modal",
  close_modal: "fechou_modal",
  modal_open: "abriu_modal",
  modal_close: "fechou_modal",
  button_click: "clicou_botao",
  click_cta_button: "clicou_botao_cta",
  click_checkout_button: "clicou_botao_checkout",
  guarantee_click: "clicou_garantia",
  testimonial_interaction: "interagiu_depoimento",
  scroll_depth_25_percent: "rolagem_25_porcento",
  scroll_depth_50_percent: "rolagem_50_porcento",
  scroll_depth_75_percent: "rolagem_75_porcento",
  scroll_depth_100_percent: "rolagem_100_porcento",

  // Timer
  timer_expired: "temporizador_expirado",

  // Video events
  video_click: "clicou_video",
  video_start: "iniciou_video",
  video_progress: "progresso_video",
  video_complete: "completou_video",

  // Form interactions
  form_submit: "enviou_formulario",
  form_error: "erro_formulario",

  // Purchase funnel
  add_to_cart: "adicionou_ao_carrinho",
  initiate_checkout: "iniciou_checkout",
  purchase_complete: "compra_concluida",

  // Source events
  source_accessed_page: "acessou_pagina_por_origem",
  page_loaded: "pagina_carregada",

  // WhatsApp
  whatsapp_click: "clicou_whatsapp",

  // FAQ
  faq_expanded: "expandiu_faq",

  // Footer
  footer_link_click: "clicou_link_rodape",
};

/**
 * Enhanced tracking that includes source information
 */
export const useNegocioViralTracking = () => {
  const {
    trackEvent,
    trackCustomEvent: originalTrackCustomEvent,
    trackStandardEvent: originalTrackStandardEvent,
  } = useMetaPixel();

  // Get source from URL parameter
  const getTrafficSource = () => {
    const source = getSourceParam();
    return source || "direct";
  };

  // Check if the source is from paid ads
  const isPaidSource = () => {
    const source = getTrafficSource();
    return source === "ads";
  };

  // Enhance data with source information
  const enhanceDataWithSource = (data: Record<string, unknown> = {}) => {
    const source = getTrafficSource();
    return {
      ...data,
      source,
      origem: source, // Portuguese version
      is_paid_source: source === "ads",
      e_origem_paga: source === "ads", // Portuguese version
      page: "negocio_viral",
      pagina: "negocio_viral", // Portuguese version
    };
  };

  // Get the Portuguese version of an event name
  const getPortugueseEventName = (eventName: string): string => {
    // If the event already has a Portuguese name in our map, use it
    if (eventTranslationMap[eventName.toLowerCase()]) {
      return eventTranslationMap[eventName.toLowerCase()];
    }

    // If the event starts with "video_", translate it
    if (eventName.startsWith("video_")) {
      const suffix = eventName.replace("video_", "");
      if (suffix === "click") return "clicou_video";
      if (suffix === "start") return "iniciou_video";
      if (suffix === "progress") return "progresso_video";
      if (suffix === "complete") return "completou_video";
      return `video_${suffix}`;
    }

    // No translation found, return original
    return eventName;
  };

  // Enhanced custom event tracking with source information and Portuguese names
  const trackCustomEvent = (
    eventName: string,
    data: Record<string, unknown> = {}
  ) => {
    const enhancedData = enhanceDataWithSource(data);
    const ptEventName = getPortugueseEventName(eventName);

    // Track the custom event with source information
    originalTrackCustomEvent(ptEventName, enhancedData);

    // Also track original event name for backward compatibility during transition
    if (ptEventName !== eventName) {
      originalTrackCustomEvent(eventName, enhancedData);
    }

    // If this is from ads, also track standard events for key actions
    if (isPaidSource() && isConversionEvent(eventName)) {
      // Map custom events to standard events if applicable
      const standardEvent = mapToStandardEvent(eventName);
      if (standardEvent) {
        originalTrackStandardEvent(standardEvent, enhancedData);
      }
    }
  };

  // Enhanced standard event tracking with source information
  const trackStandardEvent = (
    eventName: StandardEvent,
    data: Record<string, unknown> = {}
  ) => {
    const enhancedData = enhanceDataWithSource(data);
    originalTrackStandardEvent(eventName, enhancedData);

    // Also track as custom event for consistency in analytics
    originalTrackCustomEvent(
      `evento_padrao_${eventName.toLowerCase()}`,
      enhancedData
    );
  };

  // Check if an event is a conversion-related event that should be tracked as standard event
  const isConversionEvent = (eventName: string): boolean => {
    const ptEventName = getPortugueseEventName(eventName);

    const conversionEvents = [
      "clicou_botao_cta",
      "abriu_modal",
      "clicou_botao_checkout",
      "iniciou_checkout",
      "compra_concluida",
      "enviou_formulario",
      "clicou_garantia",
      "completou_video",
      // Include English versions for backward compatibility
      "click_cta_button",
      "open_modal",
      "click_checkout_button",
      "initiate_checkout",
      "purchase_complete",
      "form_submit",
      "guarantee_click",
      "video_complete",
    ];

    return (
      conversionEvents.includes(ptEventName.toLowerCase()) ||
      conversionEvents.includes(eventName.toLowerCase())
    );
  };

  // Map custom events to standard Meta Pixel events
  const mapToStandardEvent = (eventName: string): StandardEvent | null => {
    const ptEventName = getPortugueseEventName(eventName);

    const eventMap: Record<string, StandardEvent> = {
      // Portuguese events
      clicou_botao_cta: "Lead",
      abriu_modal: "ViewContent",
      clicou_botao_checkout: "InitiateCheckout",
      iniciou_checkout: "InitiateCheckout",
      compra_concluida: "Purchase",
      enviou_formulario: "CompleteRegistration",
      clicou_garantia: "ViewContent",
      completou_video: "ViewContent",
      // English events for backward compatibility
      click_cta_button: "Lead",
      open_modal: "ViewContent",
      click_checkout_button: "InitiateCheckout",
      initiate_checkout: "InitiateCheckout",
      purchase_complete: "Purchase",
      form_submit: "CompleteRegistration",
      guarantee_click: "ViewContent",
      video_complete: "ViewContent",
    };

    return (
      eventMap[ptEventName.toLowerCase()] ||
      eventMap[eventName.toLowerCase()] ||
      null
    );
  };

  // Track viewing a specific section
  const trackSectionView = (
    sectionName: string,
    additionalData?: Record<string, unknown>
  ) => {
    trackCustomEvent(`visualizou_secao_${sectionName}`, {
      section_name: sectionName,
      nome_secao: sectionName, // Portuguese version
      ...additionalData,
    });
  };

  // Track a button click
  const trackButtonClick = (
    buttonName: string,
    buttonLocation: string,
    additionalData?: Record<string, unknown>
  ) => {
    trackCustomEvent("clicou_botao", {
      button_name: buttonName,
      nome_botao: buttonName, // Portuguese version
      button_location: buttonLocation,
      localizacao_botao: buttonLocation, // Portuguese version
      ...additionalData,
    });

    // Track as lead for paid sources
    if (isPaidSource()) {
      trackStandardEvent("Lead", {
        content_name: buttonName,
        content_category: buttonLocation,
        ...additionalData,
      });
    }
  };

  // Track modal interaction
  const trackModalInteraction = (
    action: "open" | "close",
    modalName: string,
    additionalData?: Record<string, unknown>
  ) => {
    const ptAction = action === "open" ? "abriu" : "fechou";
    trackCustomEvent(`${ptAction}_modal`, {
      modal_name: modalName,
      nome_modal: modalName, // Portuguese version
      ...additionalData,
    });
  };

  // Track scroll depth
  const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
    trackCustomEvent(`rolagem_${depth}_porcento`);
  };

  // Track purchase funnel events using standard Meta Pixel events
  const trackPurchaseFunnel = (
    stage: "AddToCart" | "InitiateCheckout" | "Purchase" | "Lead",
    data?: Record<string, unknown>
  ) => {
    // Map stage to Portuguese name for custom event
    const ptStageMap: Record<string, string> = {
      AddToCart: "adicionou_ao_carrinho",
      InitiateCheckout: "iniciou_checkout",
      Purchase: "compra_concluida",
      Lead: "lead_gerado",
    };

    // Track standard event
    trackStandardEvent(stage as StandardEvent, data);

    // Also track custom event with Portuguese name
    if (ptStageMap[stage]) {
      trackCustomEvent(ptStageMap[stage], data || {});
    }
  };

  // Track video events
  const trackVideoEvent = (
    eventType: string,
    videoData: Record<string, unknown> = {}
  ) => {
    // Map to Portuguese event type
    const ptEventTypeMap: Record<string, string> = {
      click: "clicou",
      start: "iniciou",
      progress: "progresso",
      complete: "completou",
    };

    const ptEventType = ptEventTypeMap[eventType] || eventType;
    trackCustomEvent(`${ptEventType}_video`, videoData);
  };

  return {
    trackSectionView,
    trackButtonClick,
    trackModalInteraction,
    trackScrollDepth,
    trackPurchaseFunnel,
    trackVideoEvent,
    trackCustomEvent,
    trackStandardEvent,
    // Original track function for backward compatibility
    trackEvent,

    // Expose helper methods
    getTrafficSource,
    isPaidSource,
  };
};

export default useNegocioViralTracking;
