import React from "react";
// import { motion } from "framer-motion";
import { motion } from "../../../src/utils/nonAnimatedComponents";
import CtaButton from "./CtaButton";

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-0 relative overflow-hidden">
      <motion.div
        className="absolute -inset-2 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl blur-xl z-0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            Veja como funciona o{" "}
            <span className="text-green-400">Negócio Viral</span>
          </h2>

          <div className="w-full px-4 sm:px-0 max-w-md mx-auto">
            <CtaButton
              text="QUERO VIRALIZAR MEU NEGÓCIO"
              mobileText="VIRALIZAR"
              size="large"
              className="w-full shadow-lg shadow-green-900/20"
              isPricingButton={false}
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/50 border border-green-500/20">
            {/* Video placeholder */}
            <div className="aspect-video w-full relative">
              {/* Play button overlay - larger for touch on mobile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-24 h-24 md:w-28 md:h-28 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-black/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-12 h-12 md:w-14 md:h-14 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>

              {/* Video thumbnail with text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                <div className="p-4 sm:p-6 text-white">
                  <p className="font-bold text-base sm:text-lg md:text-xl leading-tight">
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
            <div className="bg-black/70 p-4 text-sm flex justify-between text-gray-200">
              <span className="font-medium">11:32</span>
              <span className="flex items-center font-medium">
                <svg
                  className="w-4 h-4 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Assista agora
              </span>
            </div>
          </div>
        </motion.div>

        {/* Mobile CTA - repeated below video for easier access */}
        <motion.div
          className="mt-8 block sm:hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full px-4 sm:px-0">
            <CtaButton
              text="QUERO VIRALIZAR MEU NEGÓCIO"
              mobileText="VIRALIZAR AGORA MEU"
              size="large"
              className="w-full shadow-lg shadow-green-900/20"
              isPricingButton={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
