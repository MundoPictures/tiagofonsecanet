import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: "Funciona mesmo sem investir em tráfego pago?",
      answer:
        "Sim! Todas as ações do método foram criadas para gerar resultado sem depender de tráfego pago, redes sociais ou audiência. Se quiser turbinar com tráfego depois, ótimo — mas não é obrigatório.",
    },
    {
      question: "Preciso ter uma audiência ou lista de contatos?",
      answer:
        "Não precisa. Algumas ações funcionam até mesmo com quem está começando do zero. Outras potencializam o que você já tem, mesmo que seja pequeno.",
    },
    {
      question: "Isso é um curso ou uma mentoria?",
      answer:
        "É um método direto com 10 ações de marketing práticas, explicadas passo a passo. Você assiste, aplica e vê resultado. Sem enrolação teórica.",
    },
    {
      question: "Em quanto tempo posso ver resultado?",
      answer:
        "Tem gente que vê venda no mesmo dia que aplica a primeira ação. Outras estratégias funcionam em 3 a 7 dias. Mas o objetivo aqui é gerar caixa imediato.",
    },
    {
      question: "Serve pro meu tipo de negócio?",
      answer:
        "Sim. Produto físico, digital, serviço, loja online, consultoria, até quem vende pelo WhatsApp. Se você vende algo, esse método é pra você.",
    },
    {
      question: "Como recebo o acesso?",
      answer:
        "Assim que o pagamento for confirmado, você recebe tudo por e-mail. O acesso é imediato e vitalício.",
    },
    {
      question: "E se eu não gostar?",
      answer:
        "Você tem 7 dias de garantia incondicional. Se não curtir por qualquer motivo, é só mandar um e-mail que devolvemos 100% do seu dinheiro. Simples assim.",
    },
  ];

  return (
    <section className="py-20 bg-[#131313] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 text-green-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Ficou com dúvidas?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas <span className="text-green-400">Frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-black/30 rounded-xl border border-green-900/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 h-7 w-7 rounded-full border border-green-500/50 flex items-center justify-center transition-transform duration-300 ${
                    activeIndex === index ? "bg-green-500/20 rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-gray-300 border-t border-gray-800/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
