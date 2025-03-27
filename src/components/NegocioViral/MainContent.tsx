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
    <div className="relative flex flex-col md:flex-row flex-1 items-center justify-between md:items-start gap-8 md:gap-12 py-6 md:py-12">
      {/* Main text content - centered on mobile, left-aligned on desktop */}
      <motion.div
        className="flex flex-col items-center md:items-start justify-center w-full md:w-3/5 text-center md:text-left"
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
          <div className="relative px-4 py-1.5 bg-green-600/20 rounded-lg border border-green-500/30">
            <span className="text-green-400 text-sm md:text-base font-bold tracking-wide">
              NEGÓCIO VIRAL
            </span>
          </div>
        </motion.div>

        <motion.h2
          className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight"
          variants={itemVariants}
        >
          Venda <span className="text-green-400">3x Mais</span> em 7 Dias
          Aplicando 10 Ações de Marketing Que Geram Caixa Imediato
          <span className="text-gray-300 block mt-3 text-xl md:text-2xl font-semibold">
            Sem anúncios, sem audiência e sem enrolação.
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed max-w-xl"
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
          className="mt-5 flex items-center justify-center md:justify-start space-x-5"
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

      {/* Video/Image Section */}
      <motion.div
        className="w-full md:w-2/5 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="relative h-full rounded-xl overflow-hidden shadow-2xl bg-black/30 border border-green-500/10"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        >
          {/* Video placeholder - replace with actual video component */}
          <div className="aspect-video w-full relative">
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Video thumbnail with text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-4 text-white">
                <p className="font-bold text-sm md:text-base">
                  Ações reais que explodem o caixa — sem gastar 1 real com
                  tráfego
                </p>
              </div>
            </div>

            <img
              src="https://placehold.co/1280x720/111111/333333"
              alt="Vídeo de apresentação do Negócio Viral"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video attributes */}
          <div className="bg-black/50 p-3 text-xs flex justify-between text-gray-300">
            <span>11:32</span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Assista agora
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContent;
