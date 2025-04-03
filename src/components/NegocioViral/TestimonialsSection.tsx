import React from "react";
import { motion } from "framer-motion";

interface TestimonialsSectionProps {}

// Sample testimonials data with different heights to create visual interest
const testimonials = [
  {
    id: 1,
    imageSrc: "https://placehold.co/600x900/222222/444444",
    alt: "Depoimento 1",
    rating: 5,
    text: "Fiz a Ação 3 do Negócio Viral e vendi R$4.280 em 2 dias — sem anúncio e só com a base que eu já tinha.",
    author: "Amanda R., loja de semijoias",
  },
  {
    id: 2,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 2",
    rating: 5,
    text: "Pensei que fosse mais um curso, mas é execução pura. É como se alguém entrasse no meu negócio e mostrasse onde tá o dinheiro.",
    author: "João P., designer freelancer",
  },
  {
    id: 3,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 3",
    rating: 5,
    text: "Apliquei a estratégia de urgência e vendi em 1 dia o que normalmente vendo em uma semana. Método simples e eficaz!",
    author: "Ana C., infoprodutora",
  },
  {
    id: 4,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 4",
    rating: 5,
    text: "Minha loja física estava às moscas. Com o método de reativação de clientes, fiz R$3.400 em 3 dias sem gastar com anúncios.",
    author: "Carlos M., lojista",
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  return (
    <div
      id="depoimentos"
      className="bg-[#131313] w-full py-20 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-green-500 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-500 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
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
        </div>

        {/* Stats - updated to single impressive stat */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-black/80 to-black/60 p-6 rounded-xl border border-green-500/20 shadow-lg max-w-2xl mx-auto overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Background animation */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-green-500/10 via-green-400/5 to-green-500/10 rounded-3xl blur-xl z-0"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center mb-2">
                  <span className="inline-block px-4 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                    Impacto Comprovado
                  </span>
                </div>

                <motion.p
                  className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  + 1 Bilhão
                </motion.p>

                <p className="text-xl text-white font-bold mt-2">
                  Em vendas geradas para nossos clientes
                </p>

                <div className="flex justify-center mt-4">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black/40 rounded-xl overflow-hidden border border-green-500/10 shadow-lg"
            >
              {/* Top portion with image and success badge */}
              <div className="relative h-40">
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  Sucesso
                </div>
              </div>

              {/* Content portion */}
              <div className="p-4">
                {/* Stars */}
                <div className="flex mb-3">
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

                {/* Testimonial text */}
                <p className="text-white text-sm font-medium mb-3">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <p className="text-gray-400 text-xs">
                  {testimonial.author} • Aluno(a) do Negócio Viral
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
