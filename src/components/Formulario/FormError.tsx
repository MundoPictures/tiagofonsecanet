import React from "react";

const FormError: React.FC = () => {
  return (
    <div className="relative">
      {/* Error animation background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl blur-xl animate-pulse"></div>

      {/* Error content */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 text-center">
        {/* Error icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center p-1">
            <div className="w-full h-full bg-[#0F0B21] rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error message */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent mb-4">
          Erro ao Enviar Formulário
        </h3>

        {/* Divider */}
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4"></div>

        {/* Error description */}
        <p className="text-white/80">
          Por favor, recarregue a página e tente novamente.
        </p>
      </div>
    </div>
  );
};

export default FormError;
