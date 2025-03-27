import React from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

interface MainContentProps {
  onCtaClick?: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ onCtaClick }) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative flex flex-col items-center justify-center flex-1 gap-8 py-6 md:py-12 z-10">
      {/* Main text content - centered */}
      <motion.div
        className="flex flex-col items-center justify-center w-full text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="relative mb-6 inline-block"
          variants={itemVariants}
        >
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-20"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>

        <motion.h2
          className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight max-w-4xl"
          variants={itemVariants}
        >
          Venda <span className="text-green-400">3x Mais</span> em 7 Dias
          Aplicando 10 Ações de Marketing Que Geram Caixa Imediato
          <span className="text-gray-300 block mt-3 text-xl md:text-2xl font-semibold">
            Sem anúncios, sem audiência e sem enrolação.
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed max-w-2xl"
          variants={itemVariants}
        >
          <span className="italic">
            Mesmo que você esteja começando do zero ou vendendo pouco hoje.
          </span>
          <span className="block mt-4 font-medium text-green-300">
            Estratégias aplicáveis em qualquer negócio – com potencial de gerar
            vendas nas próximas 24h, mesmo sem experiência.
          </span>
        </motion.p>

        <motion.div variants={itemVariants} className="w-full md:w-auto">
          <CtaButton
            text="QUERO VIRALIZAR MEU NEGÓCIO AGORA"
            onClick={onCtaClick}
            size="large"
            withShine={true}
            withArrow={true}
            className="shadow-sm shadow-green-500/20"
          />
        </motion.div>

        <motion.div
          className="mt-5 flex items-center justify-center space-x-5"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs text-white">Resultados em 7 dias</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs text-white">Garantia de 7 dias</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContent;
