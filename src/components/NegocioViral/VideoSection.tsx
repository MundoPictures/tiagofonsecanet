import React from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <motion.div
        className="absolute -inset-2 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl blur-xl z-0"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl mb-12 md:text-4xl font-bold text-white mb-4">
            Veja como funciona o{" "}
            <span className="text-green-400">Negócio Viral</span>
          </h2>

          <CtaButton text="QUERO VIRALIZAR MEU NEGÓCIO" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/30 border border-green-500/10">
            {/* Video placeholder */}
            <div className="aspect-video w-full relative">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>

              {/* Video thumbnail with text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-bold text-lg md:text-xl">
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
            <div className="bg-black/50 p-4 text-sm flex justify-between text-gray-300">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
