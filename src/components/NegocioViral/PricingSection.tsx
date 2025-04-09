import React from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import { useModal } from "../../contexts/ModalContext";

interface PricingSectionProps {
  onModalOpen?: (modalName: string) => void;
  onModalClose?: (modalName: string) => void;
  onCheckoutClick?: (planId: string, price: number) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  onModalOpen,
  // onModalClose,
  // onCheckoutClick,
}) => {
  const { openModal } = useModal();

  // The correct handler for opening the modal
  const handleModalOpen = () => {
    if (onModalOpen) {
      onModalOpen("pricing_modal");
    }
    openModal();
  };

  // // Handle closing modal with tracking
  // const handleCloseModal = () => {
  //   if (onModalClose) {
  //     onModalClose("pricing_modal");
  //   }
  //   closeModal();
  // };

  // // Handle checkout button click with tracking
  // const handleCheckoutClick = (planId: string, price: number) => {
  //   if (onCheckoutClick) {
  //     onCheckoutClick(planId, price);
  //   }
  //   // Your existing checkout logic
  // };

  // Payment methods with icons - Removed as we're now using SVG icons directly
  // const paymentMethods = [
  //   { id: 1, name: "Cartão de Crédito", icon: "💳" },
  //   { id: 2, name: "Boleto", icon: "🧾" },
  //   { id: 3, name: "Pix", icon: "📱" },
  // ];

  // Features included in the package
  const features = [
    "Ações de Marketing Que Geram Caixa Imediato",
    "4 Bônus Exclusivos de Alto Valor",
    "Acesso Vitalício ao Método Completo",
    "Atualizações Gratuitas Para Sempre",
    "Comunidade Exclusiva de Suporte",
    "Garantia de 7 Dias Incondicional",
  ];

  // Benefits that stand out
  const benefits = [
    {
      title: "Resultados Imediatos",
      description:
        "Você pode aplicar uma das ações hoje e já ver resultados amanhã",
    },
    {
      title: "Sem Dependência",
      description:
        "Você nunca mais vai precisar de anúncios pagos para vender mais",
    },
    {
      title: "Método Testado",
      description:
        "Estratégias que já funcionaram para mais de 1.500 empreendedores",
    },
  ];

  return (
    <section
      id="pricing-section"
      className="py-20 md:py-24 relative overflow-hidden"
    >
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

      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-green-500/10 to-green-600/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-green-600/20 to-green-400/20 px-6 py-2 rounded-full border border-green-500/30 text-green-400 text-sm font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm shadow-lg shadow-green-500/20"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 10px 15px -3px rgba(22, 163, 74, 0.1)",
                "0 15px 25px -5px rgba(22, 163, 74, 0.2)",
              ],
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.span
              className="mr-2"
              animate={{ rotate: [0, -10, 0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                type: "tween",
              }}
            >
              ⚡
            </motion.span>
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(74, 222, 128, 0)",
                  "0 0 8px rgba(74, 222, 128, 0.5)",
                  "0 0 0px rgba(74, 222, 128, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              Lote 1 - Preço Promocional
            </motion.span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Transforme seu{" "}
            <span className="text-gradient bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Negócio
            </span>{" "}
            Agora
            <span className="block text-2xl md:text-3xl mt-3 font-medium text-gray-200">
              e comece a vender{" "}
              <span className="text-green-400 font-bold">3x mais</span> em menos
              de 7 dias
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Estratégias que funcionam mesmo sem tráfego pago, sem audiência e
            sem experiência anterior em marketing.
          </p>
        </motion.div>

        {/* Main pricing container with new layout */}
        <div className="max-w-6xl mx-auto relative">
          {/* Backdrop glow effect */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 rounded-3xl blur-xl z-0"
            animate={{
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          {/* Main card with glassmorphism effect */}
          <motion.div
            className="relative overflow-hidden rounded-3xl backdrop-blur-sm border border-green-500/20 shadow-xl shadow-black/20 z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 py-6 px-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  repeatDelay: 4,
                }}
              />

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide leading-tight">
                    Método Completo Negócio Viral
                    <span className="block text-white/80 text-sm font-medium mt-1">
                      Diversas Ações + 4 Bônus + Acesso Vitalício
                    </span>
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
                    <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                    OFERTA EXPIRA HOJE
                  </div>
                  <motion.div
                    className="bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    50% OFF
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="bg-gradient-to-b from-[#131313]/80 to-black/80 backdrop-blur-md p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-10">
                {/* Left side - Features (5 columns on large screens) */}
                <div className="lg:col-span-4 space-y-8">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-6 flex items-center">
                      <span className="h-6 w-1 bg-green-500 rounded-full mr-3"></span>
                      O Que Você Recebe
                    </h4>

                    <div className="space-y-5">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-base md:text-lg font-medium text-white">
                              {feature}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side - Pricing (3 columns on large screens) */}
                <div className="lg:col-span-3">
                  <div className="bg-black rounded-3xl border border-[#00ff66]/30 p-0 shadow-xl overflow-hidden relative">
                    {/* Main pricing card with grid background across whole component */}
                    <div className="relative">
                      {/* Grid background that covers the entire component */}
                      <div className="absolute inset-0 z-0 bg-black">
                        {/* Evenly spaced grid with same number of vertical and horizontal lines */}
                        <div className="grid grid-cols-8 h-full w-full">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`col-${i}`}
                              className="border-r border-gray-700/30 h-full"
                            ></div>
                          ))}
                        </div>
                        <div className="grid grid-rows-8 h-full w-full">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`row-${i}`}
                              className="border-b border-gray-700/30 w-full"
                            ></div>
                          ))}
                        </div>

                        {/* Concentrated corner glow effects */}
                        <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-[#00ff66]/8 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] bg-[#00ff66]/8 rounded-full blur-2xl"></div>
                      </div>

                      {/* Price section */}
                      <div className="relative py-6 px-8 text-center border-b border-green-500/10 z-10">
                        {/* Original price with strikethrough - made more prominent */}
                        <motion.p
                          className="text-red-500 text-base md:text-lg font-bold"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          De{" "}
                          <span className="line-through text-lg md:text-xl">
                            R$ 997,00
                          </span>
                          {/* Discount tag */}
                          <motion.span
                            className="inline-block ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md"
                            initial={{ rotate: 0 }}
                            animate={{
                              rotate: [-5, 5, -5],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "mirror",
                            }}
                          >
                            -50%
                          </motion.span>
                        </motion.p>

                        {/* Main price display */}
                        <div
                          id="main-pricing-display"
                          className="flex items-center justify-center mt-2 relative"
                        >
                          {/* Starburst background effect */}
                          <motion.div
                            className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-500/5 to-green-300/5 blur-lg z-0"
                            animate={{
                              scale: [0.9, 1.1, 0.9],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />

                          <div className="flex items-start relative z-10">
                            <span className="text-white text-2xl font-medium mt-2 mr-1">
                              R$
                            </span>
                            <div className="flex items-baseline">
                              <motion.span
                                className="text-[#00ff66] text-7xl font-bold leading-none"
                                animate={{
                                  textShadow: [
                                    "0 0 10px rgba(0, 255, 102, 0.2)",
                                    "0 0 20px rgba(0, 255, 102, 0.6)",
                                    "0 0 10px rgba(0, 255, 102, 0.2)",
                                  ],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                }}
                              >
                                497
                              </motion.span>
                              <span className="text-[#00ff66] text-3xl font-bold">
                                ,00
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-white text-sm -mt-1">à vista</p>

                        {/* Installment option */}
                        <div className="text-xl font-medium text-white mt-5">
                          ou 12x de{" "}
                          <motion.span
                            className="text-[#00ff66]"
                            animate={{
                              opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            R$ 41,42
                          </motion.span>
                        </div>
                      </div>

                      {/* Timer badge - styled like the reference image */}
                      <div className="flex justify-center -mt-3 relative z-10">
                        <motion.div
                          className="bg-[#1a1a1a] border border-[#ffa500]/60 text-[#ffa500] rounded-full px-6 py-2 inline-flex items-center gap-2 shadow-lg shadow-black/40 z-10 relative overflow-hidden"
                          animate={{
                            boxShadow: [
                              "0 5px 15px rgba(255, 165, 0, 0)",
                              "0 5px 15px rgba(255, 165, 0, 0.3)",
                              "0 5px 15px rgba(255, 165, 0, 0)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          {/* Background pulse effect */}
                          <motion.div
                            className="absolute inset-0 bg-[#ffa500]/10 rounded-full"
                            animate={{
                              scale: [0.85, 1.15, 0.85],
                              opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />

                          <motion.svg
                            className="w-5 h-5 relative z-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </motion.svg>

                          <motion.span
                            className="font-medium relative z-10"
                            animate={{
                              textShadow: [
                                "0 0 0px rgba(255, 165, 0, 0)",
                                "0 0 10px rgba(255, 165, 0, 0.7)",
                                "0 0 0px rgba(255, 165, 0, 0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            LOTE 1 - Últimas vagas
                          </motion.span>

                          {/* Countdown line animation */}
                          <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                            style={{ width: "100%" }}
                            animate={{
                              width: ["100%", "0%"],
                            }}
                            transition={{
                              duration: 60,
                              ease: "linear",
                              repeat: Infinity,
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* CTA Button - styled exactly like the reference image */}
                      <div className="px-6 py-6 relative z-10">
                        <CtaButton
                          id="pricing-cta-button"
                          text="QUERO GARANTIR MINHA VAGA"
                          size="small"
                          withShine={true}
                          withArrow={true}
                          withPulse={true}
                          isPricingButton={true}
                          className="w-full py-4 sm:py-5 text-base sm:text-lg font-bold shadow-xl shadow-green-900/30 mx-auto"
                          onClick={() => handleModalOpen()}
                        />
                        <p className="text-center mt-3 text-gray-400 text-xs sm:text-sm">
                          Acesso imediato após a confirmação do pagamento
                        </p>
                      </div>

                      {/* Batch pricing urgency section - replacing the guarantee section */}
                      <div className="mx-6 mb-6 bg-gradient-to-br from-yellow-900/30 to-yellow-800/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-600/20 relative z-10 overflow-hidden">
                        {/* Animated gradient background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-yellow-500/5"
                          animate={{
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                          }}
                        />

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              <div className="h-12 w-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-yellow-600/20">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                  />
                                </svg>
                              </div>
                            </div>

                            <h5 className="text-white font-bold text-xl">
                              Próximo lote
                            </h5>
                          </div>

                          <div className="flex-1 mt-3 sm:mt-0">
                            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                              <motion.div
                                className="flex items-center gap-2 text-sm border-l border-yellow-600/30 pl-3 text-red-300"
                                initial={{ opacity: 0.8 }}
                                animate={{
                                  opacity: [0.8, 1, 0.8],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                }}
                              >
                                <span className="font-medium l text-xl">
                                  Lote 2:
                                </span>
                                <span className="font-bold l text-xl">
                                  R$ 997,00
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress indicator for batch filling */}
                      <div className="mx-6 mb-8 relative z-10">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>Lote 1</span>
                          <span>88% preenchido</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[88%]"
                            animate={{
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        </div>
                      </div>

                      {/* Payment methods - removed Boleto */}
                      <div className="pb-6 px-6 relative z-10">
                        <p className="text-gray-400 text-xs mb-3 text-center">
                          Formas de pagamento:
                        </p>
                        <div className="flex justify-center gap-10">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 flex items-center justify-center mb-1">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-full h-full text-blue-400"
                                fill="currentColor"
                              >
                                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                              </svg>
                            </div>
                            <span className="text-xs text-gray-400">
                              Cartão
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 flex items-center justify-center mb-1">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-full h-full text-green-400"
                                fill="currentColor"
                              >
                                <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zm-1-5H8v2h8v-2zm-4-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
                              </svg>
                            </div>
                            <span className="text-xs text-gray-400">Pix</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing value - bold and prominent */}
                      <div className="flex flex-col items-center mb-3 relative z-10">
                        <div className="flex flex-col items-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <motion.h3
            className="text-center text-xl md:text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-400">Por que</span> investir no Negócio
            Viral?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-800/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.6)" }}
              >
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 transform translate-x-10 -translate-y-10 rotate-45 opacity-10" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-medium text-gray-300 mb-5">
            <span className="text-green-400 font-bold text-2xl">
              +200 mil empresários
            </span>{" "}
            já transformaram seus negócios
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Lojistas",
              "Consultores",
              "Esteticistas",
              "Advogados",
              "Médicos",
              "Tecnologia",
              "Prestadores de Serviço",
              "Franqueador",
            ].map((profile, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-green-800/20 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-300">{profile}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative inline-block w-full sm:w-auto px-4 sm:px-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <CtaButton
              text="QUERO GARANTIR MINHA VAGA"
              size="large"
              withShine={true}
              withArrow={true}
              withPulse={true}
              isPricingButton={true}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold shadow-2xl shadow-green-900/30"
              onClick={() => handleModalOpen()}
            />

            {/* Subtle pulsing circle behind button */}
            <motion.div
              className="absolute -inset-3 bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-full blur-xl -z-10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          <motion.p
            className="text-gray-400 text-sm mt-4"
            animate={{
              color: [
                "rgb(156, 163, 175)",
                "rgb(252, 211, 77)",
                "rgb(156, 163, 175)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <span className="font-bold text-lg">Preço de Lote 1</span> • Próximo
            lote: R$ 997,00
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
