import React, { useEffect, useState } from "react";
import tiago2 from "../../assets/negocioViral/tiago2.png";

const CoachSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full py-20 border-t border-gray-800 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #131313 70%, rgba(0, 90, 40, 0.4) 100%)",
      }}
    >
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#0f0f0f]/80 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Conheça quem criou o método
          </h2>
          <h3 className="text-green-400 text-xl md:text-2xl font-bold">
            que vai{" "}
            <span className="underline decoration-2 underline-offset-4">
              transformar seu negócio
            </span>
          </h3>
        </div>

        {/* Coach profile - image and bio */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Coach image */}
          <div className="md:w-1/3 flex-shrink-0 mx-auto md:mx-0 max-w-xs md:max-w-none">
            <div
              className={`rounded-xl overflow-hidden relative shadow-2xl transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Green vertical bar with glow effect */}
              <div className="absolute left-0 top-0 w-[8%] h-full bg-gradient-to-b from-green-500 via-green-400 to-green-600 z-10 shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>

              {/* Coach image with enhancements */}
              <div className="relative overflow-hidden">
                {/* Image */}
                <img
                  src={tiago2}
                  alt="Especialista em Marketing"
                  className="w-full h-auto object-cover rounded-r-xl relative z-0 transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-green-600/20 z-1"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-1"></div>

                {/* Subtle highlight */}
                <div className="absolute top-0 right-0 w-[30%] h-[40%] bg-white/10 blur-3xl rounded-full transform rotate-45 z-1"></div>
              </div>
            </div>
          </div>

          {/* Coach bio */}
          <div className="md:w-2/3 text-white space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="text-green-400 font-bold">
                O criador do Negócio Viral
              </span>{" "}
              é especialista em estratégias de marketing direto e criação de
              campanhas que vendem sem depender de tráfego pago. Com mais de 10
              anos de experiência ajudando empresas de todos os tamanhos a
              aumentarem suas vendas usando técnicas práticas e diretas que
              geram resultados imediatos.
            </p>

            <p className="text-lg leading-relaxed">
              Após trabalhar com centenas de clientes e
              <span className="text-green-400 font-bold">
                {" "}
                identificar os padrões que realmente funcionam
              </span>
              , ele decidiu organizar as ações mais eficazes em um método
              simples, replicável e acessível que qualquer empreendedor pode
              aplicar — mesmo sem experiência em marketing e sem grandes
              orçamentos para anúncios.
            </p>

            <p className="text-lg leading-relaxed">
              Sua metodologia já foi responsável por mais de{" "}
              <span className="text-green-400 font-bold">
                R$12 milhões em vendas
              </span>{" "}
              para seus alunos e clientes, que vão desde pequenos negócios
              locais até infoprodutores e empresas de médio porte. O diferencial
              do seu trabalho está na praticidade: nada de teoria sem fim,
              apenas ações que você aplica hoje e pode ver resultados amanhã.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
