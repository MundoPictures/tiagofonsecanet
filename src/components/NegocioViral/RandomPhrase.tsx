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
  "Aviso: Seu Negócio Pode Virar a Nova Obsessão do Mercado (Se Você Aplicar Isso)"
];

const RandomPhrase: React.FC<RandomPhraseProps> = ({ className = "" }) => {
  const [phrase, setPhrase] = useState<string>("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
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
    <div 
      ref={ref}
      className={`mt-3 text-center text-sm font-semibold text-green-500 italic px-3 ${className}`}
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease, transform 1s ease',
        visibility: hasAnimated ? 'visible' : 'hidden',
      }}
    >
      {phrase}
    </div>
  );
};

export default RandomPhrase; 