import React from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

const PricingSection: React.FC = () => {
  // Payment methods with icons - Removed as we're now using SVG icons directly
  // const paymentMethods = [
  //   { id: 1, name: "Cartão de Crédito", icon: "💳" },
  //   { id: 2, name: "Boleto", icon: "🧾" },
  //   { id: 3, name: "Pix", icon: "📱" },
  // ];

  // Features included in the package
  const features = [
    "10 Ações de Marketing Que Geram Caixa Imediato",
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
            className="inline-block bg-gradient-to-r from-green-600/20 to-green-400/20 px-6 py-2 rounded-full border border-green-500/30 text-green-400 text-sm font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="mr-2">⚡</span>
            Oferta Por Tempo Limitado
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
                      10 Ações + 4 Bônus + Acesso Vitalício
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
                    45% OFF
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

                  {/* Testimonial */}
                  <motion.div
                    className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm rounded-xl p-5 border border-green-500/10 relative mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="absolute -top-3 -left-3 text-4xl text-green-500 opacity-60">
                      ❝
                    </div>
                    <p className="text-gray-300 italic mb-4 relative z-10">
                      "Apliquei a estratégia #3 e consegui fechar 5 novos
                      clientes em menos de 48 horas, sem gastar um centavo com
                      anúncios. O investimento se pagou no mesmo dia!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                        MC
                      </div>
                      <div>
                        <p className="text-white font-medium">Marcelo Costa</p>
                        <p className="text-xs text-gray-400">
                          Coach de Carreira, Rio de Janeiro
                        </p>
                      </div>
                    </div>
                  </motion.div>
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
                        {/* Original price with strikethrough */}
                        <p className="text-red-500 text-sm">
                          De <span className="line-through">R$ 997,00</span>
                        </p>

                        {/* Main price display */}
                        <div
                          id="main-pricing-display"
                          className="flex items-center justify-center mt-2"
                        >
                          <div className="flex items-start">
                            <span className="text-white text-2xl font-medium mt-2 mr-1">
                              R$
                            </span>
                            <div className="flex items-baseline">
                              <span className="text-[#00ff66] text-7xl font-bold leading-none">
                                497
                              </span>
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
                          <span className="text-[#00ff66]">R$ 41,42</span>
                        </div>
                      </div>

                      {/* Timer badge - styled like the reference image */}
                      <div className="flex justify-center -mt-3 relative z-10">
                        <div className="bg-[#1a1a1a] border border-[#ffa500]/60 text-[#ffa500] rounded-full px-6 py-2 inline-flex items-center gap-2 shadow-lg shadow-black/40 z-10">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-medium">
                            Oferta expira em breve
                          </span>
                        </div>
                      </div>

                      {/* CTA Button - styled exactly like the reference image */}
                      <div className="px-6 py-6 relative z-10">
                        <CtaButton
                          id="pricing-cta-button"
                          text="GARANTIR MINHA VAGA AGORA"
                          mobileText="GARANTIR VAGA"
                          size="large"
                          withShine={true}
                          withArrow={true}
                          withPulse={true}
                          isPricingButton={true}
                          className="w-full py-4 sm:py-5 text-base sm:text-lg font-bold shadow-xl shadow-green-900/30"
                        />
                        <p className="text-center mt-3 text-gray-400 text-xs sm:text-sm">
                          Acesso imediato após a confirmação do pagamento
                        </p>
                      </div>

                      {/* Guarantee section */}
                      <div className="mx-6 mb-6 bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm rounded-lg p-4 border border-green-800/10 flex items-center gap-3 relative z-10">
                        <div className="h-12 w-12 bg-[#00df4a] rounded-full flex-shrink-0 flex items-center justify-center text-white">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-white font-bold">
                            Garantia de 7 Dias
                          </h5>
                          <p className="text-gray-400 text-sm">
                            Devolução total do investimento se não ficar
                            satisfeito
                          </p>
                        </div>
                      </div>

                      {/* Payment methods */}
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
                                className="w-full h-full text-gray-400"
                                fill="currentColor"
                              >
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                              </svg>
                            </div>
                            <span className="text-xs text-gray-400">
                              Boleto
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
                        <div className="flex flex-col items-center">
                          <div className="flex">
                            <span className="text-gray-400 text-xl font-medium line-through opacity-60">
                              R$997
                            </span>
                            <div className="relative ml-2">
                              <div className="absolute -right-3 -top-2 flex items-center justify-center bg-green-500 text-[10px] font-bold text-white rounded-full w-12 h-12 animate-pulse">
                                -50%
                              </div>
                            </div>
                          </div>
                          <div
                            id="pricing-value"
                            className="flex items-baseline mb-2"
                          >
                            <span className="text-gray-400 mr-1 text-lg">
                              R$
                            </span>
                            <span className="text-white text-5xl font-bold">
                              497
                            </span>
                          </div>
                          <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 px-4 py-1 rounded-full border border-green-500/30 text-green-400 text-sm font-medium">
                            <span className="mr-1">🔥</span>
                            Por tempo limitado!
                          </div>
                        </div>
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
            Mais de{" "}
            <span className="text-green-400 font-bold">
              1.500+ empreendedores
            </span>{" "}
            já transformaram seus negócios
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Lojistas",
              "Consultores",
              "Coaches",
              "Infoprodutores",
              "Prestadores de Serviço",
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
              text="QUERO COMEÇAR A VENDER 3X MAIS AGORA"
              mobileText="QUERO VENDER 3X MAIS"
              size="large"
              withShine={true}
              withArrow={true}
              withPulse={true}
              isPricingButton={true}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold shadow-2xl shadow-green-900/30"
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

          <p className="text-gray-400 text-sm mt-4">
            Acesso imediato após pagamento • Oferta por tempo limitado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
