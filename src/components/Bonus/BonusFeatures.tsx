import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFire,
  FaRegClock,
  FaTrophy,
  FaUnlock,
} from "react-icons/fa";
import { FeatureItem, BenefitItem } from "./types";

type BonusFeaturesProps = {
  features: FeatureItem[];
  benefits: BenefitItem[];
};

export const BonusFeatures = ({ features, benefits }: BonusFeaturesProps) => {
  return (
    <>
      {/* Features Section */}
      <div className="mt-16 mb-20">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
            O Que Está Incluído
          </h2>
          <p className="text-gray-300">
            Tudo o que você precisa para impulsionar seu negócio ao próximo
            nível
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-7 border border-emerald-600/20 hover:border-emerald-500/40 transition-all relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(16, 185, 129, 0.3)",
              }}
            >
              {/* Feature glow effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600/20 to-emerald-400/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5,
                }}
              />

              <div className="text-5xl mb-5 relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.7,
                  }}
                >
                  {feature.icon}
                </motion.div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 mb-24 max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-b from-gray-900 to-emerald-950/90 p-8 md:p-10 rounded-2xl border border-emerald-500/30 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
          }}
        >
          {/* Moving light effect */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.5) 0%, transparent 50%)",
            }}
            animate={{
              left: ["0%", "100%", "0%"],
              top: ["0%", "100%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          />

          {/* Pulse effect */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="w-3 h-3 rounded-full bg-emerald-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FaUnlock className="text-emerald-400 text-xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
                O Que Você Vai Receber
              </h3>
            </div>

            <div className="space-y-5 relative z-10">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <FaCheckCircle className="text-emerald-400 text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action button */}
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a
                href="#form"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(16, 185, 129, 0)",
                    "0px 0px 20px rgba(16, 185, 129, 0.5)",
                    "0px 0px 0px rgba(16, 185, 129, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FaFire className="text-yellow-300" />
                <span>Garantir Meu Acesso</span>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center">
                <FaTrophy className="text-yellow-400 text-2xl mb-2" />
                <p className="text-sm text-gray-300">Método Exclusivo</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaRegClock className="text-emerald-400 text-2xl mb-2" />
                <p className="text-sm text-gray-300">Conteúdo Completo</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl mb-2">🔒</span>
                <p className="text-sm text-gray-300">100% Seguro</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl mb-2">🚀</span>
                <p className="text-sm text-gray-300">Estratégias Eficazes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
