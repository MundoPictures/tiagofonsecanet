import React from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

interface IntroductionSectionProps {
  onCtaClick?: () => void;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  onCtaClick,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#131313] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-20 right-10 text-[200px] font-bold text-green-500 transform rotate-12 opacity-5">
          $
        </div>
        <div className="absolute bottom-20 left-10 text-[150px] font-bold text-green-500 transform -rotate-12 opacity-5">
          $
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              Se você tem um bom produto, mas sente que as vendas não acompanham
              o seu esforço...{" "}
              <span className="text-green-400">você não está sozinho.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <motion.div
            className="bg-black/30 p-6 md:p-8 rounded-2xl border border-gray-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              A verdade sobre negócios que falham
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                A maioria dos negócios não quebra por falta de qualidade. Eles
                quebram por{" "}
                <span className="text-green-400 font-semibold">
                  falta de fluxo, clientes e caixa
                </span>
                .
              </p>
              <p>
                Você não precisa de mais tráfego. <br />
                Não precisa de seguidor. <br />E muito menos de mais teoria.
              </p>
              <p className="font-bold text-white">
                Você precisa de caixa.
                <br />E precisa disso rápido.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-green-900/20 p-6 md:p-8 rounded-2xl border border-green-800/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-green-400">Negócio Viral</span>: a solução
              prática
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Foi assim que nasceu o{" "}
                <span className="text-green-400 font-semibold">
                  Negócio Viral
                </span>
                : um método com 10 ações de marketing direto que funcionam em
                qualquer cenário — físico ou digital, serviço ou produto.
              </p>
              <p>São estratégias validadas, que já:</p>
              <ul className="space-y-3">
                {[
                  "Zeraram estoques",
                  "Triplicaram faturamentos",
                  "Tiraram negócios do buraco",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-white font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="font-bold text-white">
                Tudo isso sem gastar R$1 em tráfego.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-white mb-8">
            Não dá mais pra trabalhar duro e fechar o mês no vermelho.
            <br />
            <span className="text-green-400">
              Você precisa de ações simples, práticas e diretas que funcionam
              agora.
            </span>
          </p>

          <CtaButton
            text="QUERO ENTRAR NO NEGÓCIO VIRAL E VENDER TODOS OS DIAS"
            onClick={onCtaClick}
            size="large"
            className="max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
