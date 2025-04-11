import React, { useEffect, useRef } from "react";
import {
  useBonusPageTracking,
  BonusPageEvents,
} from "../../utils/bonusPageTracker";
import useScrollTracker from "../../hooks/useScrollTracker";
import { useInView } from "react-intersection-observer";
import { BenefitItem } from "../../components/Bonus";

interface BonusPageTrackerProps {
  formSubmitted: boolean;
  remainingSpots: number;
  benefits: BenefitItem[];
  expirationTime: Date;
}

/**
 * Componente de rastreamento abrangente para a página Bonus
 * Este é um componente utilitário sem interface visual
 */
const BonusPageTracker: React.FC<BonusPageTrackerProps> = ({
  formSubmitted,
  remainingSpots,
  benefits,
  expirationTime,
}) => {
  const tracking = useBonusPageTracking();
  const countdownTracked = useRef(false);
  const spotsIndicatorTracked = useRef(false);
  const formSubmittedRef = useRef(formSubmitted);
  const remainingSpotsRef = useRef(remainingSpots);

  // Criar hooks de IntersectionObserver para várias seções
  const [formRef, _formInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [featuresRef] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [benefitsRef, benefitsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [countdownRef, countdownInView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const [spotsIndicatorRef, spotsIndicatorInView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  // Rastrear visualização da página ao montar o componente
  useEffect(() => {
    tracking.trackPageView();

    // Rastrear saída da página ao desmontar
    return () => {
      tracking.trackCustomEvent(BonusPageEvents.PAGE_EXIT, {
        tempo_na_pagina: Math.round((Date.now() - performance.now()) / 1000),
        formulario_enviado: formSubmittedRef.current,
      });
    };
  }, []);

  // Rastrear envio do formulário
  useEffect(() => {
    formSubmittedRef.current = formSubmitted;

    if (formSubmitted) {
      tracking.trackFormInteraction("success");
      tracking.trackWhatsAppRedirect({
        formulario_enviado: true,
      });
    }
  }, [formSubmitted, tracking]);

  // Rastrear mudanças nas vagas restantes
  useEffect(() => {
    if (remainingSpots !== remainingSpotsRef.current) {
      tracking.trackSpotsIndicator("decreased", remainingSpots, {
        vagas_anteriores: remainingSpotsRef.current,
      });
      remainingSpotsRef.current = remainingSpots;
    }
  }, [remainingSpots, tracking]);

  // Rastrear visualização do contador regressivo
  useEffect(() => {
    if (countdownInView && !countdownTracked.current) {
      tracking.trackCountdownTimer("viewed", {
        tempo_expiracao: expirationTime.toISOString(),
        horas_restantes: Math.floor(
          (expirationTime.getTime() - new Date().getTime()) / (1000 * 60 * 60)
        ),
      });
      countdownTracked.current = true;
    }
  }, [countdownInView, expirationTime, tracking]);

  // Rastrear visualização do indicador de vagas
  useEffect(() => {
    if (spotsIndicatorInView && !spotsIndicatorTracked.current) {
      tracking.trackSpotsIndicator("viewed", remainingSpots);
      spotsIndicatorTracked.current = true;
    }
  }, [spotsIndicatorInView, remainingSpots, tracking]);

  // Rastrear visualização da seção de benefícios
  useEffect(() => {
    if (benefitsInView) {
      benefits.forEach((benefit, index) => {
        tracking.trackBenefitViewed(benefit, {
          indice_beneficio: index,
        });
      });
    }
  }, [benefitsInView, benefits, tracking]);

  // Inicializar rastreamento de rolagem
  useScrollTracker([25, 50, 75, 100], (threshold) => {
    tracking.trackScrollDepth(threshold as 25 | 50 | 75 | 100);
  });

  return (
    <>
      {/* Estas divs são apenas portadores de referência para o IntersectionObserver e não renderizam nada */}
      <div
        ref={formRef}
        style={{ display: "none" }}
        data-testid="bonus-tracker-form"
      ></div>
      <div
        ref={featuresRef}
        style={{ display: "none" }}
        data-testid="bonus-tracker-features"
      ></div>
      <div
        ref={benefitsRef}
        style={{ display: "none" }}
        data-testid="bonus-tracker-benefits"
      ></div>
      <div
        ref={countdownRef}
        style={{ display: "none" }}
        data-testid="bonus-tracker-countdown"
      ></div>
      <div
        ref={spotsIndicatorRef}
        style={{ display: "none" }}
        data-testid="bonus-tracker-spots"
      ></div>
    </>
  );
};

export default BonusPageTracker;
