import React from "react";
import signature from "../../assets/tiagoassinatura.png";

const FormSuccess: React.FC = () => {
  return (
    <div className="relative">
      {/* Success animation background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl animate-pulse"></div>

      {/* Success content */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 text-center">
        {/* Success icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center p-1">
            <div className="w-full h-full bg-[#0F0B21] rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-purple-400 animate-[bounce_1s_ease-in-out_infinite]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Success message */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
          Formulário Enviado com Sucesso! 🎉
        </h3>

        {/* Divider */}
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4"></div>

        {/* Success description */}
        <div className="space-y-4">
          <p className="text-white/80 text-lg">
            Obrigado por compartilhar suas informações!
          </p>
          <p className="text-white/60">
            Em breve entraremos em contato com você para iniciar sua jornada
            rumo à autoridade digital.
          </p>
        </div>

        {/* Signature on success */}
        <div className="mt-8 flex justify-center">
          <img
            src={signature}
            alt="Assinatura Tiago Fonseca"
            className="h-12 object-contain brightness-150 transform -rotate-6 opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;
