import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  BonusBackground,
  BonusHeader,
  BonusForm,
  BonusFooter,
  FormData,
  BenefitItem,
} from "../components/Bonus";
import BonusPageTracker from "../components/tracking/BonusPageTracker";

export default function Bonus() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [remainingSpots, setRemainingSpots] = useState(7);

  // Simulate decreasing spots
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSpots((prev) => {
        if (prev > 3) return prev - 1;
        return prev;
      });
    }, 45000); // Decrease every 45 seconds

    return () => clearInterval(interval);
  }, []);

  const onSubmit = (_data: FormData) => {
    // Redirect to WhatsApp with message
    const message = encodeURIComponent(
      "Olá, gostaria de solicitar o presente exclusivo!!!"
    );
    window.location.href = `https://wa.me/5511919735222?text=${message}`;

    // Show confirmation message
    setFormSubmitted(true);
  };

  // Benefits data with enhanced copy
  const benefits: BenefitItem[] = [
    "Guia detalhado com estratégias práticas que funcionam de forma consistente",
    "Técnicas exclusivas utilizadas por especialistas de mercado",
    "Método passo a passo que elimina falhas e maximiza seus resultados",
    "Solução para os problemas que estão limitando o crescimento do seu negócio",
    "Bônus extra: checklist de implementação estruturada para resultados sólidos",
  ];

  // Timer expiration data (24h from now)
  const expirationTime = new Date();
  expirationTime.setDate(expirationTime.getDate() + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-emerald-950 text-white overflow-hidden">
      <AnimatePresence>
        <BonusBackground />

        {/* Main container */}
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <BonusHeader
            formSubmitted={formSubmitted}
            expirationTime={expirationTime}
            remainingSpots={remainingSpots}
          />

          <BonusForm onSubmit={onSubmit} remainingSpots={remainingSpots} />

          <BonusFooter />
        </div>

        {/* Meta Pixel Tracker (invisible component) */}
        <BonusPageTracker
          formSubmitted={formSubmitted}
          remainingSpots={remainingSpots}
          benefits={benefits}
          expirationTime={expirationTime}
        />
      </AnimatePresence>
    </div>
  );
}
