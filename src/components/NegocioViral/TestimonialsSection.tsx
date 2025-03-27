import React from "react";

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
  {
    id: 5,
    imageSrc: "https://placehold.co/600x900/222222/444444",
    alt: "Depoimento 5",
    rating: 5,
    text: "Sem seguidores nem tráfego, consegui 8 novos clientes em uma semana usando apenas a técnica da Oferta Irresistível!",
    author: "Patricia L., fisioterapeuta",
  },
  {
    id: 6,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 6",
    rating: 5,
    text: "O script de fechamento foi um divisor de águas. Minha taxa de conversão de chamadas para vendas dobrou!",
    author: "Roberto S., coach financeiro",
  },
  {
    id: 7,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 7",
    rating: 5,
    text: "Achava que precisava de muito tráfego, mas com o Negócio Viral descobri como vender melhor para quem já me conhece. Faturei R$5.800 em 7 dias.",
    author: "Juliana R., arquiteta",
  },
  {
    id: 8,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 8",
    rating: 5,
    text: "Mesmo tendo um negócio pequeno, consegui implementar as ações e vender 3x mais que no mês anterior logo na primeira semana.",
    author: "Fernando T., consultor de TI",
  },
  {
    id: 9,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 9",
    rating: 5,
    text: "O melhor investimento que já fiz. Recuperei 12x o valor do programa só na primeira campanha que fiz com as técnicas aprendidas.",
    author: "Camila V., dona de loja online",
  },
  {
    id: 10,
    imageSrc: "https://placehold.co/600x900/222222/444444",
    alt: "Depoimento 10",
    rating: 5,
    text: "Método revolucionário! Consegui vender meu serviço sem precisar aparecer ou criar conteúdo. Perfeito para introvertidos como eu.",
    author: "Marcelo S., desenvolvedor",
  },
  {
    id: 11,
    imageSrc: "https://placehold.co/600x700/222222/444444",
    alt: "Depoimento 11",
    rating: 5,
    text: "Transformação completa em 7 dias! Apliquei as 10 ações e pela primeira vez tive uma semana com 5 dígitos de faturamento.",
    author: "Tatiana L., terapeuta",
  },
  {
    id: 12,
    imageSrc: "https://placehold.co/600x800/222222/444444",
    alt: "Depoimento 12",
    rating: 5,
    text: "Método incrível para quem tem um bom produto mas não sabe vender. Minhas vendas aumentaram 230% em menos de um mês.",
    author: "Lucas P., produtor de conteúdo",
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

        {/* Counter stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
          {[
            { label: "Empreendedores Atendidos", value: "12.000+" },
            { label: "Média de Aumento", value: "185%" },
            { label: "Satisfação", value: "98%" },
            { label: "Implementação", value: "87%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black/30 p-4 rounded-lg border border-green-900/20"
            >
              <p className="text-2xl md:text-3xl font-bold text-green-400">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full shadow-md shadow-green-600/20">
            Todos os resultados
          </button>
          {["Produtos digitais", "Serviços", "Lojas físicas"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-full transition-colors shadow-md"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Simple grid for testimonials that works on all devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

        {/* Mobile-only "See more" button */}
        <div className="mt-8 text-center md:hidden">
          <button className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg">
            Ver mais depoimentos
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
