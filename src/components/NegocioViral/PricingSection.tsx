import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "./CtaButton";

interface PricingSectionProps {
  onCtaClick?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onCtaClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Payment methods with icons
  const paymentMethods = [
    { id: 1, name: "Cartão de Crédito", icon: "💳" },
    { id: 2, name: "Boleto", icon: "🧾" },
    { id: 3, name: "Pix", icon: "📱" },
  ];

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
    <section id="preco" className="py-20 relative overflow-hidden">
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
                  <div className="bg-black/30 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
                    <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                    OFERTA EXPIRA HOJE
                  </div>
                  <motion.div
                    className="bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    80% OFF
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
                  <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md rounded-xl border border-green-500/20 p-6 shadow-xl">
                    {/* Price comparison */}
                    <div className="mb-5 text-center">
                      <p className="text-gray-400 text-lg mb-1">
                        De <span className="line-through">R$497</span>
                      </p>

                      <div className="flex justify-center items-center">
                        <div className="relative">
                          <span className="text-white text-lg font-medium absolute -top-2 -left-4 md:-left-6">
                            R$
                          </span>
                          <motion.span
                            className="text-green-400 text-6xl md:text-7xl font-extrabold leading-none"
                            animate={{ scale: [1, 1.04, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            97
                          </motion.span>
                        </div>
                      </div>

                      <p className="text-white text-lg mt-1">à vista ou</p>

                      <div className="text-xl font-bold text-white mt-1">
                        12x de <span className="text-green-400">R$9,82</span>
                      </div>

                      {/* Timer badge */}
                      <motion.div
                        className="mt-6 mb-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-full px-4 py-2 inline-flex items-center gap-2"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg
                          className="w-5 h-5 text-yellow-400"
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
                        <span className="text-yellow-400 text-sm font-medium">
                          Oferta expira em breve
                        </span>
                      </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="mb-5"
                    >
                      <CtaButton
                        text="GARANTIR MINHA VAGA AGORA"
                        onClick={onCtaClick}
                        size="large"
                        withShine={true}
                        withArrow={true}
                        withPulse={true}
                        className="w-full py-5 text-lg shadow-lg shadow-green-900/20"
                      />
                      <p className="text-center text-gray-400 text-xs mt-2">
                        Acesso imediato após a confirmação do pagamento
                      </p>
                    </motion.div>

                    {/* Guarantee */}
                    <motion.div
                      className="bg-gradient-to-br from-green-900/10 to-green-900/5 backdrop-blur-sm rounded-lg p-4 border border-green-800/20 flex items-center gap-3 mb-5"
                      whileHover={{ y: -2 }}
                    >
                      <div className="h-10 w-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex-shrink-0 flex items-center justify-center text-white">
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
                    </motion.div>

                    {/* Payment methods */}
                    <div className="border-t border-green-900/20 pt-4 mt-5">
                      <p className="text-gray-400 text-xs mb-3 text-center">
                        Formas de pagamento:
                      </p>
                      <div className="flex justify-center gap-4">
                        {paymentMethods.map((method) => (
                          <div
                            key={method.id}
                            className="flex flex-col items-center"
                          >
                            <span className="text-2xl mb-1">{method.icon}</span>
                            <span className="text-xs text-gray-400">
                              {method.name}
                            </span>
                          </div>
                        ))}
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
            className="relative inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <CtaButton
              text="QUERO COMEÇAR A VENDER 3X MAIS AGORA"
              onClick={onCtaClick}
              size="large"
              withShine={true}
              withArrow={true}
              className="px-8 py-5 text-lg shadow-2xl shadow-green-900/20"
            />

            {/* Subtle pulsing circle behind button */}
            <motion.div
              className="absolute -inset-3 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full blur-xl -z-10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
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
