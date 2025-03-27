import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CtaButton from "./CtaButton";

interface TestimonialsSectionProps {
  onCtaClick?: () => void;
}

// Sample testimonials data with different heights to create visual interest
const testimonials = [
  {
    id: 1,
    imageSrc: "https://placehold.co/600x900/222222/444444",
    alt: "Depoimento 1",
    size: "tall", // taller image
    rating: 5,
    text: "Fiz a Ação 3 do Negócio Viral e vendi R$4.280 em 2 dias — sem anúncio e só com a base que eu já tinha.",
    author: "Amanda R., loja de semijoias",
  },
  {
    id: 2,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 2",
    size: "medium",
    rating: 5,
    text: "Pensei que fosse mais um curso, mas é execução pura. É como se alguém entrasse no meu negócio e mostrasse onde tá o dinheiro.",
    author: "João P., designer freelancer",
  },
  {
    id: 3,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 3",
    size: "medium",
    rating: 5,
    text: "Apliquei a estratégia de urgência e vendi em 1 dia o que normalmente vendo em uma semana. Método simples e eficaz!",
    author: "Ana C., infoprodutora",
  },
  {
    id: 4,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 4",
    size: "medium",
    rating: 5,
    text: "Minha loja física estava às moscas. Com o método de reativação de clientes, fiz R$3.400 em 3 dias sem gastar com anúncios.",
    author: "Carlos M., lojista",
  },
  {
    id: 5,
    imageSrc: "https://placehold.co/600x900/222222/444444",
    alt: "Depoimento 5",
    size: "tall",
    rating: 5,
    text: "Sem seguidores nem tráfego, consegui 8 novos clientes em uma semana usando apenas a técnica da Oferta Irresistível!",
    author: "Patricia L., fisioterapeuta",
  },
  {
    id: 6,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 6",
    size: "medium",
    rating: 5,
    text: "O script de fechamento foi um divisor de águas. Minha taxa de conversão de chamadas para vendas dobrou!",
    author: "Roberto S., coach financeiro",
  },
  {
    id: 7,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 7",
    size: "medium",
    rating: 5,
    text: "Achava que precisava de muito tráfego, mas com o Negócio Viral descobri como vender melhor para quem já me conhece. Faturei R$5.800 em 7 dias.",
    author: "Juliana R., arquiteta",
  },
  {
    id: 8,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 8",
    size: "medium",
    rating: 5,
    text: "Mesmo tendo um negócio pequeno, consegui implementar as ações e vender 3x mais que no mês anterior logo na primeira semana.",
    author: "Fernando T., consultor de TI",
  },
  {
    id: 9,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 9",
    size: "medium",
    rating: 5,
    text: "O melhor investimento que já fiz. Recuperei 12x o valor do programa só na primeira campanha que fiz com as técnicas aprendidas.",
    author: "Camila V., dona de loja online",
  },
  {
    id: 10,
    imageSrc: "https://placehold.co/600x900/222222/444444",
    alt: "Depoimento 10",
    size: "tall",
    rating: 5,
    text: "Método revolucionário! Consegui vender meu serviço sem precisar aparecer ou criar conteúdo. Perfeito para introvertidos como eu.",
    author: "Marcelo S., desenvolvedor",
  },
  {
    id: 11,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 11",
    size: "medium",
    rating: 5,
    text: "Transformação completa em 7 dias! Apliquei as 10 ações e pela primeira vez tive uma semana com 5 dígitos de faturamento.",
    author: "Tatiana L., terapeuta",
  },
  {
    id: 12,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 12",
    size: "medium",
    rating: 5,
    text: "Método incrível para quem tem um bom produto mas não sabe vender. Minhas vendas aumentaram 230% em menos de um mês.",
    author: "Lucas P., produtor de conteúdo",
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onCtaClick,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="depoimentos"
      className="bg-[#131313] w-full py-20 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-green-500 blur-[100px]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-500 blur-[100px]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 inline-flex items-center px-4 py-1 bg-green-900/20 rounded-full border border-green-500/20">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-green-400 text-sm font-semibold">
              PROVAS REAIS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Resultados <span className="text-green-400">Comprovados</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Veja o que nossos alunos estão dizendo sobre o método e as vendas
            que conseguiram aplicando as ações do Negócio Viral
          </p>
        </motion.div>

        {/* Counter stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: "Empreendedores Atendidos", value: "12.000+" },
            { label: "Média de Aumento", value: "185%" },
            { label: "Satisfação", value: "98%" },
            { label: "Implementação", value: "87%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-black/30 p-4 rounded-lg border border-green-900/20"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-green-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full shadow-md shadow-green-600/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todos os resultados
          </motion.button>
          {["Produtos digitais", "Serviços", "Lojas físicas"].map(
            (filter, index) => (
              <motion.button
                key={filter}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-full transition-colors shadow-md"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(22, 163, 74, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                {filter}
              </motion.button>
            )
          )}
        </motion.div>

        {/* Testimonials masonry-like grid with animations */}
        <motion.div
          ref={ref}
          className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 mb-16 space-y-4 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-green-500/30 hover:scale-[1.02] hover:-translate-y-1 relative group border border-green-500/10"
              variants={itemVariants}
              style={{
                transformOrigin:
                  index % 2 === 0 ? "left center" : "right center",
              }}
            >
              <img
                src={testimonial.imageSrc}
                alt={testimonial.alt}
                className="w-full h-auto object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-[#131313]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-sm mb-1 font-semibold">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-300 text-xs">
                    {testimonial.author} • Aluno(a) do Desafio
                  </p>
                </div>
              </div>

              {/* Always visible success badge */}
              <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                Sucesso
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
