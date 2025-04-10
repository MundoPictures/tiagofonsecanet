// import { motion } from "framer-motion";
import React from "react";

const BenefitsSection: React.FC = () => {
  return (
    <div className="bg-[#131313] w-full py-12 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {/* Acesso imediato */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-5">
            <svg
              className="w-14 h-14 text-green-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 8V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" />
            </svg>
          </div>
          <h3 className="text-white text-xl font-bold mb-3">Acesso imediato</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Seu login e senha serão enviados ao seu e-mail logo após o
            processamento do pagamento. Comece a aplicar hoje mesmo.
          </p>
        </div>

        {/* 7 dias de garantia */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-5">
            <svg
              className="w-14 h-14 text-green-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
            </svg>
          </div>
          <h3 className="text-white text-xl font-bold mb-3">
            7 dias de garantia
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sua inscrição com risco zero. Se você não gostar do método, basta
            pedir a devolução de 100% do seu dinheiro em até 7 dias.
          </p>
        </div>

        {/* Pagamento Seguro */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-5">
            <svg
              className="w-14 h-14 text-green-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
          <h3 className="text-white text-xl font-bold mb-3">
            Pagamento Seguro
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Ambiente seguro e criptografado. Seus dados estão protegidos e o
            acesso é vitalício.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
