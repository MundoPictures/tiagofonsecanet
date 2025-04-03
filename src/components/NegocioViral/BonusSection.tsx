import React from "react";
import { motion } from "framer-motion";

const bonuses = [
  {
    id: 1,
    title: "Calendário de Caixa",
    description:
      "O plano exato de 7 dias pra ativar vendas rápidas com cronograma pronto para aplicar.",
    icon: "calendar",
    value: "R$ 197",
    color: "green",
  },
  {
    id: 2,
    title: "Scripts de Conversão",
    description:
      "Frases e mensagens prontas para abordar, engajar e fechar vendas na hora.",
    icon: "message",
    value: "R$ 97",
    color: "blue",
  },
  {
    id: 3,
    title: "Grupo no WhatsApp",
    description:
      "Tire dúvidas, compartilhe resultados e receba suporte direto ao aplicar as estratégias.",
    icon: "chat",
    value: "R$ 127",
    color: "purple",
  },
  {
    id: 4,
    title: "Bônus Oculto",
    description:
      "Liberado após a sua primeira ação de venda implementada. Uma surpresa que potencializa seus resultados.",
    icon: "gift",
    value: "R$ 197",
    color: "green",
  },
];

const BonusSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#131313] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-64 h-64 text-green-500 transform translate-x-1/3 -translate-y-1/4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.294,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.306,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-64 h-64 text-green-500 transform -translate-x-1/3 translate-y-1/4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.294,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.306,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"></path>
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
            Exclusivo nesta oferta
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-green-400">Bônus Especiais</span> de Fundador
          </h2>

          {/* Updated value display with yellow background and animation for mobile */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 py-3 bg-yellow-500 rounded-lg shadow-lg mb-2">
              <div className="text-center">
                <p className="text-black font-bold text-lg">
                  Valor Total: R$ 497,00
                </p>
                <p className="text-black font-bold text-xl">Você leva GRÁTIS</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mt-2"
            >
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              className="bg-gradient-to-br from-black to-gray-900 rounded-xl overflow-hidden shadow-lg border border-green-500/10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Color accent corner */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 ${getColorClass(
                  bonus.color
                )} transform translate-x-8 -translate-y-8 rotate-45 opacity-20`}
              />

              <div className="p-6 md:p-8 flex gap-5">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-16 h-16 ${getIconBgClass(
                    bonus.color
                  )} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  {renderIcon(bonus.icon)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {bonus.title}
                    </h3>
                    <span className="text-sm font-medium text-center w-[100px] px-3 py-1 bg-green-900/50 text-green-400 rounded-full">
                      {bonus.value}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{bonus.description}</p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Incluído no pacote</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-black/30 p-6 rounded-xl border border-green-500/20">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-green-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-white">
                Atenção! Oferta por tempo limitado
              </h3>
            </div>
            <p className="text-gray-300">
              Estes bônus são exclusivos para a turma de fundadores e serão
              removidos em breve. Após o lançamento, o acesso a estes materiais
              será vendido separadamente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Utility functions
function getColorClass(color: string): string {
  switch (color) {
    case "green":
      return "bg-green-500";
    case "blue":
      return "bg-blue-500";
    case "purple":
      return "bg-purple-500";
    default:
      return "bg-green-500";
  }
}

function getIconBgClass(color: string): string {
  switch (color) {
    case "green":
      return "bg-gradient-to-br from-green-600 to-green-500";
    case "blue":
      return "bg-gradient-to-br from-blue-600 to-blue-500";
    case "purple":
      return "bg-gradient-to-br from-purple-600 to-purple-500";
    default:
      return "bg-gradient-to-br from-green-600 to-green-500";
  }
}

function renderIcon(iconName: string): React.ReactNode {
  switch (iconName) {
    case "calendar":
      return (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      );
    case "message":
      return (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          ></path>
        </svg>
      );
    case "chat":
      return (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          ></path>
        </svg>
      );
    case "gift":
      return (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v13m0-13V6a2 2 0 112.83 2.83l-2.83 2.83a2 2 0 01-2.83.12V8.5H7a2 2 0 110-4h1.17M19 12H5"
          ></path>
        </svg>
      );
    default:
      return (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          ></path>
        </svg>
      );
  }
}

export default BonusSection;
