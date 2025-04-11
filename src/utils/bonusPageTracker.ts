import { StandardEvent, useMetaPixel } from "../contexts/MetaPixelContext";
import { getSourceParam } from "./urlParams";

/**
 * Event names for tracking in the Bonus page (in Brazilian Portuguese)
 */
export const BonusPageEvents = {
  // Page views and navigation
  PAGE_VIEW: "bonus_visualizacao_pagina",
  PAGE_LOADED: "bonus_pagina_carregada",
  PAGE_EXIT: "bonus_saida_pagina",

  // Form interactions
  FORM_FOCUS: "bonus_foco_formulario",
  FORM_FIELD_COMPLETE: "bonus_campo_formulario_completo",
  FORM_SUBMIT: "bonus_envio_formulario",
  FORM_SUBMIT_SUCCESS: "bonus_sucesso_formulario",
  FORM_SUBMIT_ERROR: "bonus_erro_formulario",

  // Scroll tracking
  SCROLL_DEPTH_25: "bonus_rolagem_25_porcento",
  SCROLL_DEPTH_50: "bonus_rolagem_50_porcento",
  SCROLL_DEPTH_75: "bonus_rolagem_75_porcento",
  SCROLL_DEPTH_100: "bonus_rolagem_100_porcento",

  // Feature interactions
  FEATURE_VIEWED: "bonus_recursos_visualizados",
  BENEFIT_VIEWED: "bonus_beneficios_visualizados",

  // Timer related
  COUNTDOWN_VIEWED: "bonus_contador_visualizado",
  COUNTDOWN_COMPLETED: "bonus_contador_completo",

  // Limited spots indicator
  SPOTS_INDICATOR_VIEWED: "bonus_indicador_vagas_visualizado",
  SPOTS_DECREASED: "bonus_vagas_diminuidas",

  // Button interactions
  BUTTON_CLICK: "bonus_clique_botao",
  CTA_BUTTON_CLICK: "bonus_clique_botao_cta",

  // WhatsApp redirect
  WHATSAPP_REDIRECT: "bonus_redirecionamento_whatsapp",

  // Source tracking events
  SOURCE_ACCESSED_PAGE: "bonus_acesso_por_origem",
  INSTAGRAM_ACCESSED_PAGE: "bonus_acesso_por_instagram",
  FACEBOOK_ACCESSED_PAGE: "bonus_acesso_por_facebook",
  EMAIL_ACCESSED_PAGE: "bonus_acesso_por_email",
  ADS_ACCESSED_PAGE: "bonus_acesso_por_anuncio",
};

/**
 * Enhanced tracking utility for the Bonus page
 */
export const useBonusPageTracking = () => {
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

  // Check if source is from ads
  const isPaidSource = () => {
    const source = getTrafficSource();
    return source === "ads";
  };

  // Enhance tracking data with source information
  const enhanceDataWithSource = (data: Record<string, unknown> = {}) => {
    const source = getTrafficSource();
    return {
      ...data,
      source,
      origem: source, // Portuguese version
      is_paid_source: isPaidSource(),
      origem_paga: isPaidSource(), // Portuguese version
      page: "pagina_bonus", // Portuguese version
      timestamp: new Date().toISOString(),
    };
  };

  // Enhanced custom event tracking with source information
  const trackCustomEvent = (
    eventName: string,
    data: Record<string, unknown> = {}
  ) => {
    const enhancedData = enhanceDataWithSource(data);

    // Track the custom event with enhanced data
    originalTrackCustomEvent(eventName, enhancedData);

    // If this is a paid source and a conversion event, also track as standard event
    if (isPaidSource() && isConversionEvent(eventName)) {
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

    // Also track as custom event for consistent analytics
    originalTrackCustomEvent(
      `evento_padrao_${eventName.toLowerCase()}`,
      enhancedData
    );
  };

  // Check if an event should be treated as a conversion
  const isConversionEvent = (eventName: string): boolean => {
    const conversionEvents = [
      BonusPageEvents.FORM_SUBMIT,
      BonusPageEvents.FORM_SUBMIT_SUCCESS,
      BonusPageEvents.CTA_BUTTON_CLICK,
      BonusPageEvents.WHATSAPP_REDIRECT,
    ];

    return conversionEvents.includes(eventName);
  };

  // Map custom events to standard Meta Pixel events
  const mapToStandardEvent = (eventName: string): StandardEvent | null => {
    const eventMap: Record<string, StandardEvent> = {
      [BonusPageEvents.PAGE_VIEW]: "PageView",
      [BonusPageEvents.FORM_SUBMIT]: "Lead",
      [BonusPageEvents.FORM_SUBMIT_SUCCESS]: "Lead",
      [BonusPageEvents.CTA_BUTTON_CLICK]: "Lead",
      [BonusPageEvents.WHATSAPP_REDIRECT]: "CompleteRegistration",
    };

    return eventMap[eventName] || null;
  };

  // Track page view with detailed information
  const trackPageView = (additionalData?: Record<string, unknown>) => {
    trackCustomEvent(BonusPageEvents.PAGE_VIEW, {
      titulo: document.title, // Portuguese version
      url: window.location.href,
      referencia: document.referrer, // Portuguese version
      ...additionalData,
    });

    // Also track standard PageView event
    trackStandardEvent("PageView", {
      title: document.title,
      url: window.location.href,
      referrer: document.referrer,
      ...additionalData,
    });
  };

  // Track form interactions
  const trackFormInteraction = (
    action: "focus" | "field_complete" | "submit" | "success" | "error",
    fieldName?: string,
    additionalData?: Record<string, unknown>
  ) => {
    const eventMap: Record<string, string> = {
      focus: BonusPageEvents.FORM_FOCUS,
      field_complete: BonusPageEvents.FORM_FIELD_COMPLETE,
      submit: BonusPageEvents.FORM_SUBMIT,
      success: BonusPageEvents.FORM_SUBMIT_SUCCESS,
      error: BonusPageEvents.FORM_SUBMIT_ERROR,
    };

    trackCustomEvent(eventMap[action], {
      nome_campo: fieldName, // Portuguese version
      ...additionalData,
    });

    // Track standard events for key form actions if this is a paid source
    if (isPaidSource() && (action === "submit" || action === "success")) {
      trackStandardEvent("Lead", {
        field_name: fieldName,
        nome_campo: fieldName, // Portuguese version
        ...additionalData,
      });
    }
  };

  // Track scroll depth
  const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
    const eventMap: Record<number, string> = {
      25: BonusPageEvents.SCROLL_DEPTH_25,
      50: BonusPageEvents.SCROLL_DEPTH_50,
      75: BonusPageEvents.SCROLL_DEPTH_75,
      100: BonusPageEvents.SCROLL_DEPTH_100,
    };

    trackCustomEvent(eventMap[depth], {
      profundidade_rolagem: depth, // Portuguese version
      porcentagem_rolagem: `${depth}%`, // Portuguese version
    });
  };

  // Track button clicks
  const trackButtonClick = (
    buttonName: string,
    additionalData?: Record<string, unknown>
  ) => {
    // Determine if this is the main CTA button
    const isCTA =
      buttonName.toLowerCase().includes("cta") ||
      buttonName.toLowerCase().includes("submit") ||
      buttonName.toLowerCase().includes("solicitar") ||
      buttonName.toLowerCase().includes("receber");

    // Track appropriate event based on button type
    if (isCTA) {
      trackCustomEvent(BonusPageEvents.CTA_BUTTON_CLICK, {
        nome_botao: buttonName, // Portuguese version
        ...additionalData,
      });

      // Also track lead for CTA buttons from paid sources
      if (isPaidSource()) {
        trackStandardEvent("Lead", {
          content_name: buttonName,
          nome_conteudo: buttonName, // Portuguese version
          ...additionalData,
        });
      }
    } else {
      trackCustomEvent(BonusPageEvents.BUTTON_CLICK, {
        nome_botao: buttonName, // Portuguese version
        ...additionalData,
      });
    }
  };

  // Track WhatsApp redirect
  const trackWhatsAppRedirect = (additionalData?: Record<string, unknown>) => {
    trackCustomEvent(BonusPageEvents.WHATSAPP_REDIRECT, {
      ...additionalData,
    });

    // Track as CompleteRegistration for paid sources
    if (isPaidSource()) {
      trackStandardEvent("CompleteRegistration", {
        ...additionalData,
      });
    }
  };

  // Track feature card interactions
  const trackFeatureViewed = (
    featureTitle: string,
    additionalData?: Record<string, unknown>
  ) => {
    trackCustomEvent(BonusPageEvents.FEATURE_VIEWED, {
      titulo_recurso: featureTitle, // Portuguese version
      ...additionalData,
    });
  };

  // Track benefit list interactions
  const trackBenefitViewed = (
    benefitText: string,
    additionalData?: Record<string, unknown>
  ) => {
    trackCustomEvent(BonusPageEvents.BENEFIT_VIEWED, {
      texto_beneficio: benefitText, // Portuguese version
      ...additionalData,
    });
  };

  // Track countdown timer visibility and completion
  const trackCountdownTimer = (
    action: "viewed" | "completed",
    additionalData?: Record<string, unknown>
  ) => {
    const eventMap: Record<string, string> = {
      viewed: BonusPageEvents.COUNTDOWN_VIEWED,
      completed: BonusPageEvents.COUNTDOWN_COMPLETED,
    };

    trackCustomEvent(eventMap[action], {
      ...additionalData,
    });
  };

  // Track remaining spots indicator
  const trackSpotsIndicator = (
    action: "viewed" | "decreased",
    spotsRemaining: number,
    additionalData?: Record<string, unknown>
  ) => {
    const eventMap: Record<string, string> = {
      viewed: BonusPageEvents.SPOTS_INDICATOR_VIEWED,
      decreased: BonusPageEvents.SPOTS_DECREASED,
    };

    trackCustomEvent(eventMap[action], {
      vagas_restantes: spotsRemaining, // Portuguese version
      ...additionalData,
    });
  };

  return {
    trackPageView,
    trackFormInteraction,
    trackScrollDepth,
    trackButtonClick,
    trackWhatsAppRedirect,
    trackFeatureViewed,
    trackBenefitViewed,
    trackCountdownTimer,
    trackSpotsIndicator,
    trackCustomEvent,
    trackStandardEvent,

    // Original track function for backward compatibility
    trackEvent,

    // Helper methods
    getTrafficSource,
    isPaidSource,
  };
};

export default useBonusPageTracking;
