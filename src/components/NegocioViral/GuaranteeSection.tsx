import React from "react";
// import { motion } from "framer-motion";
import { motion } from "../../../src/utils/nonAnimatedComponents";
import CtaButton from "./CtaButton";

interface GuaranteeSectionProps {
  onGuaranteeClick?: () => void;
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  onGuaranteeClick,
}) => {
  // Handler for guarantee interactions
  const handleGuaranteeClick = () => {
    if (onGuaranteeClick) {
      onGuaranteeClick();
    }
    // Any existing guarantee click logic
  };

  return (
    <div
      className="py-20 md:py-24 relative"
      id="guarantee-section"
      onClick={handleGuaranteeClick}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-500/10 blur-[100px]"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Large 7 with guarantee text */}
          <motion.div
            className="md:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative text-center">
              {/* Background glow effect */}
              <motion.div
                className="absolute -inset-10 bg-green-500 blur-3xl rounded-full opacity-20 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Green 7 */}
              <motion.div
                className="relative text-green-400 text-[12rem] md:text-[18rem] font-bold leading-none select-none"
                style={{ textShadow: "0 0 60px rgba(74, 222, 128, 0.6)" }}
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                whileHover={{ scale: 1.05 }}
              >
                7
              </motion.div>

              {/* Text overlaid on the 7 */}
              <div className="absolute bottom-8 md:bottom-14 left-0 right-0 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-white uppercase text-xs tracking-[0.2em] font-bold mb-2 opacity-80">
                    G A R A N T I A
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight">
                    DIAS DE
                    <br />
                    GARANTIA
                  </h3>
                  <div className="flex justify-center mt-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.3 + star * 0.1,
                            duration: 0.3,
                            type: "spring",
                          }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Seal effect */}
              <motion.div
                className="absolute top-0 right-0 md:-right-10 w-24 h-24 md:w-32 md:h-32"
                initial={{ rotate: -15, opacity: 0, scale: 0.7 }}
                animate={{ rotate: -15, opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-dotted border-green-500"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-green-600 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs md:text-sm font-bold">
                        100%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 md:p-8 bg-gradient-to-br from-green-900/10 to-transparent rounded-2xl border border-green-800/20 shadow-xl">
              <motion.h2
                className="text-green-400 text-2xl md:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                IMPORTANTE: TESTE O MÉTODO POR 7 DIAS.
              </motion.h2>

              <div className="space-y-6 text-white text-lg">
                <motion.p
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Você pode entrar, começar a aplicar as ações, aumentar suas
                  vendas e se por acaso perceber que não está pronto para
                  transformar seu negócio agora, basta enviar um e-mail em até 7
                  dias após a compra que eu devolvo{" "}
                  <span className="text-green-400 font-bold">
                    100% do seu investimento
                  </span>
                  .
                </motion.p>

                <motion.p
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Essa é a confiança que tenho na solução que vou apresentar a
                  você.
                </motion.p>

                <motion.div
                  className="font-bold leading-relaxed bg-black/30 p-4 rounded-lg border border-green-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p>
                    Eu confio tanto neste método que se você seguir as ações e
                    não tiver resultados significativos, eu devolvo 100% do seu
                    dinheiro.
                  </p>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <motion.div
                className="flex flex-wrap gap-4 items-center mt-8 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {[
                  { icon: "shield", text: "Sem perguntas" },
                  { icon: "badge", text: "Garantia incondicional" },
                  { icon: "money", text: "Reembolso total" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-black/30 px-4 py-2 rounded-lg border border-green-900/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {item.icon === "shield" && (
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      )}
                      {item.icon === "badge" && (
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      )}
                      {item.icon === "money" && (
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      )}
                      {item.icon === "money" && (
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        ></path>
                      )}
                    </svg>
                    <span className="text-sm text-white">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <CtaButton
                  text="QUERO GARANTIR SEM RISCO"
                  mobileText="QUERO GARANTIR HOJE"
                  size="medium"
                  className="mx-auto"
                  isPricingButton={false}
                />

                <p className="text-center mt-4 text-gray-400 text-sm">
                  Vagas limitadas - Comece hoje mesmo a transformar seu negócio
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
