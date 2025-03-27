import React from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

interface PricingSectionProps {
  onCtaClick?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onCtaClick }) => {
  const paymentMethods = [
    {
      id: 1,
      name: "Cartão de Crédito",
      img: "https://placehold.co/50x30/333333/FFFFFF",
    },
    { id: 2, name: "Boleto", img: "https://placehold.co/50x30/333333/FFFFFF" },
    { id: 3, name: "Pix", img: "https://placehold.co/50x30/333333/FFFFFF" },
  ];

  return (
    <section id="preco" className="py-20 bg-[#131313] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-[150px]"></div>
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
            Investimento de Fundador
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preço Especial por{" "}
            <span className="text-green-400">Tempo Limitado</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Menos de R$10 por dia para transformar o seu caixa e nunca mais
            depender de tráfego pago
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-b from-black to-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-green-900/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.15)" }}
        >
          {/* Card header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 py-4 px-6 text-center relative overflow-hidden">
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-20"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                ease: "easeInOut",
                repeatDelay: 3,
              }}
            />
            <h3 className="text-white text-xl font-bold uppercase tracking-wide relative z-10">
              Método Completo - Negócio Viral
            </h3>
          </div>

          <div className="p-8 md:p-10">
            {/* Promo box */}
            <div className="bg-green-900/20 rounded-xl p-6 mb-8 border border-green-900/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h4 className="text-white text-lg font-bold mb-2">
                    Aproveite a Oferta de Lançamento!
                  </h4>
                  <p className="text-gray-300">
                    10 Ações + 4 Bônus + Acesso Vitalício
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                    Oferta Expira em Breve
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-400 text-xl line-through mr-3">
                  De R$497
                </span>
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">
                  80% OFF
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-white text-lg font-medium mb-4">
                  Por apenas
                </h4>
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-2">
                    <span className="text-white text-2xl font-bold">
                      12x de
                    </span>
                    <div className="flex items-start ml-2">
                      <span className="text-white text-2xl font-bold self-start mt-2">
                        R$
                      </span>
                      <span className="text-green-400 text-6xl font-bold leading-none">
                        9
                      </span>
                      <div className="flex flex-col items-start">
                        <span className="text-green-400 text-2xl font-bold">
                          ,82
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-300 text-lg">ou R$97 à vista</span>
                </div>
              </div>

              <div className="mb-8">
                <CtaButton
                  text="QUERO GARANTIR MINHA VAGA AGORA"
                  onClick={onCtaClick}
                  size="large"
                  className="w-full"
                />
                <p className="text-gray-400 text-sm mt-3">
                  Acesso imediato e pagamento 100% seguro
                </p>
              </div>

              {/* Guarantee */}
              <div className="bg-black/30 rounded-xl p-5 mb-6 border border-green-800/10">
                <div className="flex items-center mb-3 justify-center">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <h5 className="text-white font-bold">
                    Garantia Incondicional de 7 Dias
                  </h5>
                </div>
                <p className="text-gray-300 text-sm">
                  Se por qualquer motivo você não gostar do método, basta enviar
                  um email em até 7 dias após a compra e devolveremos 100% do
                  seu dinheiro.
                </p>
              </div>

              {/* Payment methods */}
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-xs mb-3">
                  Formas de pagamento aceitas:
                </p>
                <div className="flex gap-4 justify-center">
                  {paymentMethods.map((method) => (
                    <img
                      key={method.id}
                      src={method.img}
                      alt={method.name}
                      className="h-6 opacity-70"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three reasons to join now */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            className="text-center text-xl md:text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-400">3 Motivos</span> para Entrar Agora:
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Resultados Imediatos",
                description:
                  "Você pode aplicar uma das ações hoje e já ver vendas amanhã",
              },
              {
                title: "Fim da Dependência",
                description:
                  "Vai sair da dependência de tráfego e conteúdo para sempre",
              },
              {
                title: "Oferta Limitada",
                description:
                  "Essa é a oferta de fundador — depois o preço sobe e os bônus saem do ar",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="bg-black/30 rounded-xl p-6 border border-green-800/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-white font-bold">{reason.title}</h4>
                </div>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CtaButton
            text="ESTOU PRONTO PARA VENDER SEM ANÚNCIOS"
            onClick={onCtaClick}
            size="large"
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
