import React from "react";
import signature from "../../assets/tiagoassinatura.png";

const FormHeader: React.FC = () => {
  return (
    <div className="mb-12 flex items-center justify-between">
      <h1 className="text-3xl md:text-4xl font-light text-white">
        Seu primeiro passo
        <span className="block mt-1 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-bold">
          rumo à autoridade
        </span>
      </h1>
      <img
        src={signature}
        alt="Assinatura Tiago Fonseca"
        className="h-16 object-contain brightness-150 transform -rotate-6 hover:scale-105 transition-all duration-300 ml-6"
      />
    </div>
  );
};

export default FormHeader;
