import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  MentoryHeader,
  MentoryFooter,
  MentoryBackground,
} from "../components/Mentory";
import { motion } from "framer-motion";

export type MentoryFormData = {
  name: string;
  bestEmail: string;
  phone: string;
  instagram: string;
  businessArea: string;
  competitiveAdvantage: string;
  employeeCount: "Menos de 5 Funcionários" | "Acima de 5 Funcionários";
  happyWithRevenue: "SIM" | "NÃO";
  monthlyRevenue:
    | "30 mil a 50 mil por mês"
    | "50 mil a 100 mil por mês"
    | "100 mil a 500 mil por mês"
    | "500 mil a 1 milhão por mês"
    | "Acima de 1 milhão por mês";
  businessDescription: string;
  willingToInvest:
    | "SIM e A VISTA"
    | "CONSIGO PARCELAR EM 12X"
    | "NÃO É MEU MOMENTO AGORA";
};

export default function MentoryLegacy() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // URL do webhook do Make para Mentoria Legacy
  const webhookUrl = "https://hook.us2.make.com/9kmxuuso3hb7tw5nphttlmiq0g3b4oqp";
  

  
  // Capturar o envio do formulário para redirecionar para o WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (formRef.current) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-emerald-950 text-white overflow-hidden">
      <AnimatePresence>
        <MentoryBackground />

        {/* Main container */}
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <MentoryHeader formSubmitted={formSubmitted} />

          {formSubmitted ? (
            <div className="max-w-3xl mx-auto my-12 bg-gray-800/30 p-8 rounded-2xl border border-emerald-500/10 shadow-xl text-center">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Formulário enviado com sucesso!</h2>
              <p className="text-white mb-6">Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto my-12 bg-gray-800/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm rounded-2xl border border-emerald-500/10 shadow-xl relative z-10">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">
                  Formulário de Inscrição - Mentoria Legacy
                </h2>
                <p className="text-emerald-400/90 font-medium text-center mb-4">
                  Preencha os dados abaixo para se candidatar à{" "}
                  <span className="text-white font-bold">Mentoria Legacy</span> com
                  Tiago Fonseca
                </p>
              </div>

              <motion.form
                ref={formRef}
                action={webhookUrl}
                method="POST"
                target="_blank"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Campo oculto para o nome do formulário */}
                <input type="hidden" name="formName" value="Mentoria Legacy" />
                <input type="hidden" name="source" value="Website - Formulário Mentoria Legacy" />
                <input type="hidden" name="uniqueId" value={`form-${Date.now()}`} />
                
                {/* Nome e sobrenome */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Nome e sobrenome <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                      placeholder="Digite seu nome completo"
                    />
                  </motion.div>
                </div>

                {/* Melhor email */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Seu melhor E-mail <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                {/* Telefone */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                      placeholder="(00) 00000-0000"
                    />
                  </motion.div>
                </div>

                {/* Instagram */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Instagram <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="instagram"
                      required
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                      placeholder="@seuinstagram"
                    />
                  </motion.div>
                </div>

                {/* Ramo de atuação */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Ramo de atuação <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="businessArea"
                      required
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                      placeholder="Ex: Marketing, Vendas, Educação, etc."
                    />
                  </motion.div>
                </div>

                {/* Diferencial competitivo */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    O que você acredita ser seu diferencial competitivo?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <textarea
                      name="competitiveAdvantage"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                      placeholder="Descreva aqui seu diferencial competitivo"
                    ></textarea>
                  </motion.div>
                </div>

                {/* Número de funcionários */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Números de Funcionários <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <motion.div className="flex items-center">
                      <input
                        type="radio"
                        id="employees-less-5"
                        name="numEmployees"
                        value="Menos de 5 Funcionários"
                        required
                        className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor="employees-less-5"
                        className="ml-2 text-sm font-medium text-white"
                      >
                        Menos de 5 Funcionários
                      </label>
                    </motion.div>
                    <motion.div className="flex items-center">
                      <input
                        type="radio"
                        id="employees-more-5"
                        name="numEmployees"
                        value="Acima de 5 Funcionários"
                        className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor="employees-more-5"
                        className="ml-2 text-sm font-medium text-white"
                      >
                        Acima de 5 Funcionários
                      </label>
                    </motion.div>
                  </div>
                </div>

                {/* Feliz com faturamento */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Você está Feliz com seu Faturamento hoje?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <motion.div className="flex items-center">
                      <input
                        type="radio"
                        id="happy-yes"
                        name="happyWithRevenue"
                        value="SIM"
                        required
                        className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor="happy-yes"
                        className="ml-2 text-sm font-medium text-white"
                      >
                        SIM
                      </label>
                    </motion.div>
                    <motion.div className="flex items-center">
                      <input
                        type="radio"
                        id="happy-no"
                        name="happyWithRevenue"
                        value="NÃO"
                        className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor="happy-no"
                        className="ml-2 text-sm font-medium text-white"
                      >
                        NÃO
                      </label>
                    </motion.div>
                  </div>
                </div>

                {/* Faturamento mensal */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Qual seu faturamento mensal <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <select
                      name="annualRevenue"
                      required
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                    >
                      <option value="">Selecione seu faturamento</option>
                      <option value="30 mil a 50 mil por mês">30 mil a 50 mil por mês</option>
                      <option value="50 mil a 100 mil por mês">50 mil a 100 mil por mês</option>
                      <option value="100 mil a 500 mil por mês">100 mil a 500 mil por mês</option>
                      <option value="500 mil a 1 milhão por mês">500 mil a 1 milhão por mês</option>
                      <option value="Acima de 1 milhão por mês">Acima de 1 milhão por mês</option>
                    </select>
                  </motion.div>
                </div>

                {/* Descrição do negócio */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Descreva seu negócio em poucas palavras{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <textarea
                      name="businessDescription"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                      placeholder="Descreva seu negócio"
                    ></textarea>
                  </motion.div>
                </div>

                {/* Investimento */}
                <div className="form-group">
                  <label className="block text-white font-medium mb-2">
                    Você está disposto a investir 60 Mil em sua empresa para alcançar resultados?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <motion.div className="flex items-center">
                      <input
                        type="radio"
                        id="invest-yes-cash"
                        name="willingToInvest"
                        value="SIM e A VISTA"
                        required
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
                        name="willingToInvest"
                        value="CONSIGO PARCELAR EM 12X"
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
                        name="willingToInvest"
                        value="NÃO É MEU MOMENTO AGORA"
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
                </div>

                {/* Submit button */}
                <div className="mt-8 relative">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full relative py-4 px-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-lg overflow-hidden group flex items-center justify-center transition-all duration-300 ease-out hover:from-emerald-500 hover:to-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span>ENVIANDO...</span>
                    ) : (
                      <span className="mr-1">
                        QUERO FAZER PARTE DA MENTORIA LEGACY
                      </span>
                    )}
                  </button>
                </div>
              </motion.form>
            </div>
          )}

          <MentoryFooter />
        </div>
      </AnimatePresence>
    </div>
  );
}
