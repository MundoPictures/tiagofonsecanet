import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import tiago2 from "../../assets/negocioViral/tiago2.png";

const MainContent: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative flex flex-col justify-center py-0 md:py-2 z-10 max-w-full md:max-w-[70%] lg:max-w-[55%] px-4 md:px-0">
      {/* Main text content - centered on mobile, left-aligned on desktop */}
      <motion.div
        className="flex flex-col items-center md:items-start justify-center w-full text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6 leading-tight"
          variants={itemVariants}
        >
          Venda <span className="text-green-400">3x Mais</span> em 7 Dias
          Aplicando as Ações de Marketing Que Geram Caixa Imediato
          <span className="text-gray-200 block mt-3 md:mt-3 text-xl sm:text-xl md:text-2xl font-semibold">
            Sem anúncios, sem audiência e sem enrolação.
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-200 text-base md:text-base mb-6 md:mb-8 leading-relaxed w-full"
          variants={itemVariants}
        >
          <span className="italic">
            Mesmo que você esteja começando do zero ou vendendo pouco hoje.
          </span>
          <span className="block mt-3 md:mt-4 font-medium text-green-300">
            Estratégias aplicáveis em qualquer negócio – com potencial de gerar
            vendas nas próximas 24h, mesmo sem experiência.
          </span>
        </motion.p>

        <motion.div variants={itemVariants} className="w-full md:w-auto">
          <CtaButton
            text="QUERO VIRALIZAR MEU NEGÓCIO"
            mobileText="QUERO VIRALIZAR MEU NEGÓCIO"
            size="medium"
            withShine={true}
            withArrow={true}
            withPulse={true}
            isPricingButton={false}
            className="shadow-xl shadow-green-500/20 hover:shadow-green-500/30 text-base md:text-base w-full md:w-auto"
          />
        </motion.div>

        <motion.div
          className="mt-4 md:mt-5 flex items-center justify-center md:justify-start space-x-5 md:space-x-5 w-full"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 md:w-5 md:h-5 text-green-500 mr-2 md:mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-medium text-white">
              Resultados em 7 dias
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 md:w-5 md:h-5 text-green-500 mr-2 md:mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-medium text-white">
              Garantia de 7 dias
            </span>
          </div>
        </motion.div>

        {/* Mobile image - only visible on mobile, placed below the button */}
        <motion.div
          className="mt-6 block md:hidden w-full"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Mobile-specific image with glow effect */}
          <div className="relative w-[85%] mx-auto">
            {/* Enhanced glow behind Tiago */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-green-500/30 via-green-400/15 to-transparent rounded-full filter blur-xl opacity-70 scale-110" />

            <img
              src={tiago2}
              alt="Tiago"
              className="w-full h-auto object-contain drop-shadow-2xl"
              onLoad={() => setIsLoaded(true)}
              style={{
                filter: "drop-shadow(0 0 15px rgba(74, 222, 128, 0.5))",
                transform: "scale(0.95)",
                maxHeight: "min(70vh, 500px)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContent;
