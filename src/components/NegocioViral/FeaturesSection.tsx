// import { motion } from "framer-motion";
import { motion } from "../../../src/utils/nonAnimatedComponents";

const features = [
  {
    icon: "fire",
    title: "Gatilhos de Ação Imediata",
    description:
      "Aprenda por que esperar por oportunidades mata suas vendas — e como virar o jogo com ações diretas.",
  },
  {
    icon: "bolt",
    title: "Fatos Brutalmente Interessantes",
    description:
      "A técnica que prende a atenção de qualquer público e faz seu produto se tornar impossível de ignorar.",
  },
  {
    icon: "target",
    title: "Venda Diária na Prática",
    description:
      "Descubra como vender todos os dias sem depender de seguidores ou calendário de postagens.",
  },
  {
    icon: "repeat",
    title: "Mentalidade Geradora de Caixa",
    description:
      "Treine sua mente para pensar como quem lucra todos os dias — e construa fontes reais de faturamento.",
  },
  {
    icon: "guide",
    title: "Explosão de Vendas em Qualquer Nicho",
    description:
      "Use ações comprovadas para multiplicar seu faturamento — servem para qualquer produto ou serviço.",
  },
  {
    icon: "fire",
    title: "Estratégias que Destravaram Milhares de Negócios",
    description:
      "Barreiras mínimas de entrada, combos irresistíveis, promoções relâmpago e muito mais para aplicar já.",
  },
  {
    icon: "bolt",
    title: "Método Exclusivo para Prestadores de Serviço",
    description:
      "Saiba como lotar sua agenda com estratégias simples, práticas e de aplicação imediata.",
  },
  {
    icon: "target",
    title: "Aumente Seu Ticket com Combos Imbatíveis",
    description:
      "Combine serviços e crie ofertas que seu cliente não consegue recusar.",
  },
  {
    icon: "repeat",
    title: "Diagnóstico que Vende por Você",
    description:
      "Aprenda a aplicar um método magnético que cria desejo e conduz o cliente até o 'sim'.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#131313] to-[#0a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full text-green-500/5"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="0,0 100,0 0,100" />
        </svg>
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
            O que você vai ter acesso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comece a aplicar <span className="text-green-400">ainda hoje</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estratégias práticas que você pode implementar imediatamente no seu
            negócio para começar a ver resultados em 24 horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/30 rounded-xl p-6 border border-green-900/30 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-900/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-green-600 to-green-500 w-12 h-12 rounded-lg flex items-center justify-center shadow-md shrink-0 mr-4">
                  {feature.icon === "fire" && (
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
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      ></path>
                    </svg>
                  )}
                  {feature.icon === "bolt" && (
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
                  )}
                  {feature.icon === "target" && (
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  )}
                  {feature.icon === "repeat" && (
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                  )}
                  {feature.icon === "guide" && (
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-green-900/20 rounded-2xl p-8 border border-green-800/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <div className="md:w-16 flex-shrink-0 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                O diferencial é a prática
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                <span className="italic">Nada de teoria</span>. Apenas o que
                funciona na prática, com passo a passo claro.
              </p>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Estratégias que qualquer pessoa consegue aplicar",
                  "Funciona com produto físico, digital ou serviço",
                  "Método sem audiência e sem precisar aparecer",
                  "Ações pensadas pra gerar urgência, desejo e fechamento",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
