import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface RandomPhraseProps {
  className?: string;
}

const phrases = [
  "Crie um Negócio Tão Irresistível Que Vira Máquina de Clientes Todos os Dias",
  "Quando Seu Negócio Viraliza, Você não Corre atrás de Clientes — Eles Correm Até Você",
  "Se o Mercado Não Fala de Você Ainda, É Porque seu negócio Não Viralizou",
  "Negócios que Viralizam e Não Dão Conta de Atender",
  "Viralize ou Fique Invisível: Como Criar um Negócio que Todo Mundo Vai Querer",
  "O Mercado Vai Falar do muito do seu negócio",
  "Você Está a um Passo de Ter um Negócio que Ninguém Consegue Ignorar",
  "Aviso: Seu Negócio Pode Virar a Nova Obsessão do Mercado (Se Você Aplicar Isso)",
];

const RandomPhrase: React.FC<RandomPhraseProps> = ({ className = "" }) => {
  const [phrase, setPhrase] = useState<string>("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    // Select a random phrase when component mounts
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref} className={`mt-3 text-center ${className}`}>
      <div
        className={`relative inline-block max-w-lg mx-auto p-4 rounded-2xl bg-green-100 border-2 border-green-500 shadow-lg balloon-animation`}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          visibility: hasAnimated ? "visible" : "hidden",
          animation: hasAnimated ? "pulse 2s ease-in-out" : "none",
        }}
      >
        {/* Triangle pointer for balloon effect */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-green-500"></div>

        <p className="text-sm font-semibold text-green-700 italic px-2">
          {phrase}
        </p>

        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default RandomPhrase;
