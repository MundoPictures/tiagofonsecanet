import { ConselheiroForm } from "../components/Conselheiro/ConselheiroForm";
import { ConselheiroFooter } from "../components/Conselheiro/ConselheiroFooter";
import { ConselheiroBackground } from "../components/Conselheiro/ConselheiroBackground";
import { ConselheiroFormData } from "../components/Conselheiro/types";
import { motion } from "framer-motion";

export default function Conselheiro() {
  const onSubmit = (data: ConselheiroFormData) => {
    // Create WhatsApp message
    const message = encodeURIComponent(
      `*PROGRAMA CONSELHEIRO*\n\n*Nome:* ${data.name}\n*Email:* ${data.bestEmail}\n*Telefone:* ${data.phone}\n*Instagram:* ${data.instagram}\n*Ramo de Atuação:* ${data.businessArea}\n*Diferencial:* ${data.competitiveAdvantage}\n*Funcionários:* ${data.employeeCount}\n*Feliz com Faturamento:* ${data.happyWithRevenue}\n*Faturamento Mensal:* ${data.monthlyRevenue}\n*Descrição do Negócio:* ${data.businessDescription}\n*Disposto a Investir:* ${data.willingToInvest}`
    );

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/5516991775577?text=${message}`;
  };

  // Investment question field component
  const InvestmentQuestionField = ({ register, errors }: { 
    register: any; 
    errors: any;
  }) => (
    <div className="form-group">
      <label className="block text-white font-medium mb-2">
        Você está disposto a investir 500 Mil em sua empresa para alcançar resultados?{" "}
        <span className="text-red-500">*</span>
      </label>
      <div className="space-y-2">
        <motion.div className="flex items-center">
          <input
            type="radio"
            id="invest-yes-cash"
            value="SIM e A VISTA"
            {...register("willingToInvest", {
              required: "Este campo é obrigatório",
            })}
            className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
          />
          <label
            htmlFor="invest-yes-cash"
            className="ml-2 text-sm font-medium text-white"
          >
            SIM e A VISTA
          </label>
        </motion.div>
        <motion.div className="flex items-center">
          <input
            type="radio"
            id="invest-yes-installments"
            value="CONSIGO PARCELAR EM 12X"
            {...register("willingToInvest", {
              required: "Este campo é obrigatório",
            })}
            className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
          />
          <label
            htmlFor="invest-yes-installments"
            className="ml-2 text-sm font-medium text-white"
          >
            CONSIGO PARCELAR EM 12X
          </label>
        </motion.div>
        <motion.div className="flex items-center">
          <input
            type="radio"
            id="invest-no"
            value="NÃO É MEU MOMENTO AGORA"
            {...register("willingToInvest", {
              required: "Este campo é obrigatório",
            })}
            className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
          />
          <label
            htmlFor="invest-no"
            className="ml-2 text-sm font-medium text-white"
          >
            NÃO É MEU MOMENTO AGORA
          </label>
        </motion.div>
      </div>
      {errors.willingToInvest && (
        <p className="text-red-400 text-sm mt-2">
          {errors.willingToInvest.message}
        </p>
      )}
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <ConselheiroBackground />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Programa Conselheiro
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Tenha Tiago Fonseca como seu mentor pessoal por 1 ano inteiro
            </p>
          </div>

          <ConselheiroForm 
            onSubmit={onSubmit} 
            InvestmentQuestionField={InvestmentQuestionField}
          />

          <ConselheiroFooter />
        </div>
      </div>
    </>
  );
}
