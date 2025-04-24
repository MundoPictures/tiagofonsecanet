import React from "react";
// import { motion } from "framer-motion";
import { motion } from "../../../src/utils/nonAnimatedComponents";
import CtaButtonWithPhrase from "./CtaButtonWithPhrase";

const targetProfiles = [
  {
    title: "Donos de negócios físicos e digitais",
    description:
      "Pequenos empreendedores e lojistas que precisam aumentar o volume de vendas sem depender de anúncios pagos.",
    icon: "store",
  },
  {
    title: "Quem quer escapar do tráfego pago",
    description:
      "Pessoas cansadas de depender de algoritmos e altos custos para conseguir clientes e vendas.",
    icon: "noAds",
  },
  {
    title: "Infoprodutores e prestadores de serviço",
    description:
      "Profissionais liberais, coaches, consultores e criadores de conteúdo que precisam converter mais leads.",
    icon: "service",
  },
  {
    title: "Quem precisa vender pra ontem",
    description:
      "Empreendedores que já tentaram de tudo e precisam de resultados rápidos para salvar ou escalar o negócio.",
    icon: "clock",
  },
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#131313] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 text-green-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Pra quem é
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Esse método é <span className="text-green-400">pra você</span> se...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {targetProfiles.map((profile, index) => (
            <motion.div
              key={index}
              className="flex gap-4 bg-black/30 rounded-xl p-6 border border-green-800/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                {renderIcon(profile.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {profile.title}
                </h3>
                <p className="text-gray-300">{profile.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not For section */}
        <motion.div
          className="max-w-4xl mx-auto bg-black/40 rounded-2xl p-8 border border-red-900/20 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Animated red glow in the background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-red-700/5 rounded-2xl blur-md"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
            <div className="md:w-16 flex-shrink-0 bg-gradient-to-br from-red-600 to-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
              <motion.svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, 0, -15, 0],
                  opacity: [1, 0.8, 1],
                  filter: [
                    "drop-shadow(0 0 0 rgba(255, 255, 255, 0))",
                    "drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))",
                    "drop-shadow(0 0 0 rgba(255, 255, 255, 0))",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  animate={{
                    pathLength: [0, 1],
                    pathOffset: [0.3, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                ></motion.path>
              </motion.svg>
            </div>

            <div className="flex-1">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(248, 113, 113, 0)",
                    "0 0 5px rgba(248, 113, 113, 0.5)",
                    "0 0 0px rgba(248, 113, 113, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Não é para você se...
              </motion.h3>
              <div className="space-y-4">
                {[
                  "Está em busca de mais teoria sobre marketing ou vendas",
                  "Não está disposto a executar ações práticas no seu negócio",
                  "Prefere investir em anúncios e terceirizar tudo",
                  "Busca um resultado mágico sem nenhum esforço da sua parte",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="h-6 w-6 rounded-full bg-red-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Animated warning border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              border: "1px solid rgba(220, 38, 38, 0.3)",
              boxShadow: "0 0 0 0 rgba(220, 38, 38, 0.4)",
            }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(220, 38, 38, 0.4)",
                "0 0 0 3px rgba(220, 38, 38, 0.2)",
                "0 0 0 0 rgba(220, 38, 38, 0.4)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        {/* CTA Container */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Se você se identifica com algum dos perfis acima e está pronto para{" "}
            <span className="text-green-400 font-medium">
              agir e mudar seu negócio
            </span>
            , o Negócio Viral foi feito para você.
          </p>

          <CtaButtonWithPhrase
            text="QUERO ENTRAR NO NEGÓCIO VIRAL AGORA"
            mobileText="QUERO VENDER 3X MAIS"
            size="medium"
            className="mx-auto"
            isPricingButton={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

function renderIcon(iconName: string): React.ReactNode {
  switch (iconName) {
    case "store":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ></path>
        </svg>
      );
    case "noAds":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          ></path>
        </svg>
      );
    case "service":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      );
    case "clock":
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      );
    default:
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      );
  }
}

export default TargetAudienceSection;
