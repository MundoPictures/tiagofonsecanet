import { ConselheiroFooter } from "../components/Conselheiro/ConselheiroFooter";
import { ConselheiroBackground } from "../components/Conselheiro/ConselheiroBackground";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaLock, FaSpinner } from "react-icons/fa";

export default function Conselheiro() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false); 
  const formRef = useRef<HTMLFormElement>(null);
  
  const webhookUrl = "https://hook.us2.make.com/wrhb8q47jyacfygnwrtxwt9usdwr65fg";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting || hasSubmitted) {
      return;
    }
    
    setIsSubmitting(true);
    setHasSubmitted(true);
    
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const fullName = formData.get('fullName') as string;
      const email = formData.get('email') as string;
      const whatsapp = formData.get('whatsapp') as string;
      const instagram = formData.get('instagram') as string;
      
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      formRef.current.target = 'hidden-iframe';
      formRef.current.submit();
      
      setSubmitSuccess(true);
    }
  };
  
  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (value.length <= 2) {
      formattedValue = value;
    } else if (value.length <= 7) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
    
    e.target.value = formattedValue;
  };

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

          {submitSuccess ? (
            <div className="max-w-3xl mx-auto my-12 bg-gray-800/30 p-8 rounded-2xl border border-emerald-500/10 shadow-xl text-center">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Formulário enviado com sucesso!</h2>
              <p className="text-white mb-6">Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto my-12 bg-gray-800/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm rounded-2xl border border-emerald-500/10 shadow-xl relative z-10">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">
                  Formulário de Inscrição - Programa Conselheiro
                </h2>
                <p className="text-emerald-400/90 font-medium text-center mb-4">
                  Preencha os dados abaixo para se candidatar ao{" "}
                  <span className="text-white font-bold">Programa Conselheiro</span> com
                  Tiago Fonseca
                </p>
              </div>

              <motion.form
                ref={formRef}
                action={webhookUrl}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <input type="hidden" name="formName" value="Programa Conselheiro" />
                <input type="hidden" name="source" value="Website - Formulário Conselheiro" />
                <input type="hidden" name="uniqueId" value={`form-${Date.now()}`} />
                
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
                      onInput={(e) => formatPhoneNumber(e as React.ChangeEvent<HTMLInputElement>)}
                    />
                  </motion.div>
                </div>

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

                <div className="mt-8 relative">
                  <button
                    type="submit"
                    disabled={isSubmitting || hasSubmitted}
                    className={`w-full relative py-4 px-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-lg overflow-hidden group flex items-center justify-center transition-all duration-300 ease-out hover:from-emerald-500 hover:to-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${(isSubmitting || hasSubmitted) ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        <span>ENVIANDO...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-1">
                          QUERO FAZER PARTE DO PROGRAMA CONSELHEIRO
                        </span>
                        <FaArrowRight className="ml-1" />
                      </>
                    )}
                  </button>
                </div>
                
                <div className="text-center mt-4 text-gray-400 text-sm flex items-center justify-center">
                  <FaLock className="mr-2 text-emerald-500" />
                  <span>Seus dados estão protegidos com segurança</span>
                </div>
              </motion.form>
            </div>
          )}

          <ConselheiroFooter />
        </div>
      </div>
    </>
  );
}
