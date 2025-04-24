import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface RandomPhraseProps {
  className?: string;
  visible?: boolean;
}

const phrases = [
  "Crie um negócio tão irresistível que vira máquina de clientes todos os dias",
  "Quando seu negócio viraliza, você não corre atrás de clientes — eles correm até você",
  "Se o mercado não fala de você ainda, é porque seu negócio não viralizou",
  "Negócios que viralizam não dão conta de atender tantos clientes",
  "Viralize ou fique invisível: como criar um negócio que todo mundo vai querer",
  "O mercado vai falar muito do seu negócio",
  "Você está a um passo de ter um negócio que ninguém consegue ignorar",
  "Aviso: seu negócio pode virar a nova obsessão do mercado (se você aplicar isso)",
];

const RandomPhrase: React.FC<RandomPhraseProps> = ({
  className = "",
  visible = true,
}) => {
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

  if (!visible) return null;

  return (
    <div ref={ref} className={`mb-3 text-center ${className}`}>
      <div
        className={`relative inline-block w-3/4 p-1 mx-auto rounded-2xl bg-green-100 border-2 border-green-500 shadow-lg balloon-animation`}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          visibility: hasAnimated ? "visible" : "hidden",
          animation: hasAnimated ? "pulse 2s ease-in-out" : "none",
          marginBottom: "8px",
        }}
      >
        <p className="text-sm md:text-base font-bold text-green-700 italic px-2 py-1">
          {phrase}
        </p>

        {/* Triangle pointer at the bottom pointing down */}
        <div
          className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[12px] border-l-transparent 
                        border-r-[12px] border-r-transparent 
                        border-t-[12px] border-t-green-500"
        ></div>

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
