import React from "react";

const CoachSection: React.FC = () => {
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
            <div className="rounded-xl overflow-hidden relative">
              {/* Green vertical bar */}
              <div className="absolute left-0 top-0 w-[8%] h-full bg-gradient-to-b from-green-500 via-green-400 to-green-600 z-10"></div>

              {/* Coach image */}
              <img
                src="https://placehold.co/400x500/111111/333333"
                alt="Especialista em Marketing"
                className="w-full h-auto object-cover rounded-r-xl relative z-0"
              />
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
              , ele decidiu organizar as 10 ações mais eficazes em um método
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
