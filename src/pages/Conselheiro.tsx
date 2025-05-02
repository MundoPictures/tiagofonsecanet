import { ConselheiroForm } from "../components/Conselheiro/ConselheiroForm";
import { ConselheiroFooter } from "../components/Conselheiro/ConselheiroFooter";
import { ConselheiroBackground } from "../components/Conselheiro/ConselheiroBackground";
import { ConselheiroFormData } from "../components/Conselheiro/types";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Conselheiro() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: ConselheiroFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    console.log("Dados do formulário:", data);

    // URL do webhook do Make
    const webhookUrl = "https://hook.us2.make.com/wrhb8q47jyacfygnwrtxwt9usdwr65fg";

    try {
      // Preparar os dados para envio ao Make
      const makeData = {
        formName: "Programa Conselheiro",
        fullName: data.name,
        email: data.bestEmail,
        whatsapp: data.phone, // Search query é "whatsapp" conforme solicitado
        instagram: data.instagram,
        businessArea: data.businessArea,
        competitiveAdvantage: data.competitiveAdvantage,
        numEmployees: data.employeeCount,
        happyWithRevenue: data.happyWithRevenue,
        annualRevenue: data.monthlyRevenue,
        businessDescription: data.businessDescription,
        willingToInvest: data.willingToInvest,
        source: "Website - Formulário Conselheiro"
      };

      console.log("Dados a serem enviados para o Make:", makeData);
      console.log("URL do webhook:", webhookUrl);

      // Método 1: Tentar com formulário HTML
      // Criar um formulário HTML e enviar diretamente
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = webhookUrl;
      form.target = '_blank'; // Para não redirecionar a página atual

      // Adicionar os campos ao formulário
      Object.entries(makeData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });

      // Adicionar o formulário ao DOM, enviar e remover
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
      
      console.log("Formulário enviado via HTML form");
      
      // Método 2: Tentar com URLSearchParams (form-urlencoded)
      try {
        const formData = new URLSearchParams();
        Object.entries(makeData).forEach(([key, value]) => {
          formData.append(key, String(value));
        });

        const fetchResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });
        
        console.log("Resposta fetch com form-urlencoded:", fetchResponse);
      } catch (fetchError) {
        console.error("Erro ao usar fetch com form-urlencoded:", fetchError);
      }
      
      // Método 3: Tentar com fetch e JSON
      try {
        const fetchJsonResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(makeData),
        });
        
        console.log("Resposta fetch com JSON:", fetchJsonResponse);
      } catch (fetchJsonError) {
        console.error("Erro ao usar fetch com JSON:", fetchJsonError);
      }
      
      // Método 4: Tentar com axios
      try {
        const axiosResponse = await axios.post(webhookUrl, makeData);
        console.log("Resposta axios:", axiosResponse);
      } catch (axiosError) {
        console.error("Erro ao usar axios:", axiosError);
      }
      
      // Método 5: Tentar com axios e form-urlencoded
      try {
        const formDataAxios = new URLSearchParams();
        Object.entries(makeData).forEach(([key, value]) => {
          formDataAxios.append(key, String(value));
        });
        
        const axiosFormResponse = await axios.post(webhookUrl, formDataAxios, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
        console.log("Resposta axios com form-urlencoded:", axiosFormResponse);
      } catch (axiosFormError) {
        console.error("Erro ao usar axios com form-urlencoded:", axiosFormError);
      }

      // Considerar o envio bem-sucedido e redirecionar para WhatsApp
      handleSuccessSubmit(data);
    } catch (error) {
      console.error("Erro ao enviar dados para o Make:", error);
      
      // Como último recurso, tentar enviar diretamente para o WhatsApp
      try {
        console.log("Tentando redirecionar para WhatsApp como último recurso...");
        const message = createWhatsAppMessage(data);
        window.location.href = `https://wa.me/5516991775577?text=${message}`;
      } catch (whatsappError) {
        console.error("Erro ao redirecionar para WhatsApp:", whatsappError);
        setSubmitError("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
        setSubmitSuccess(false);
        setIsSubmitting(false);
      }
    }
  };

  // Função para lidar com o envio bem-sucedido
  const handleSuccessSubmit = (data: ConselheiroFormData) => {
    setSubmitSuccess(true);
    
    // Criar a mensagem do WhatsApp
    const message = createWhatsAppMessage(data);
    
    // Aguardar um pouco antes de redirecionar para o WhatsApp
    setTimeout(() => {
      window.location.href = `https://wa.me/5516991775577?text=${message}`;
    }, 2000);
    
    setIsSubmitting(false);
  };

  // Função para criar a mensagem do WhatsApp
  const createWhatsAppMessage = (data: ConselheiroFormData) => {
    return encodeURIComponent(
      `*PROGRAMA CONSELHEIRO*\n\n*Nome:* ${data.name}\n*Email:* ${data.bestEmail}\n*Telefone:* ${data.phone}\n*Instagram:* ${data.instagram}\n*Ramo de Atuação:* ${data.businessArea}\n*Diferencial:* ${data.competitiveAdvantage}\n*Funcionários:* ${data.employeeCount}\n*Feliz com Faturamento:* ${data.happyWithRevenue}\n*Faturamento Mensal:* ${data.monthlyRevenue}\n*Descrição do Negócio:* ${data.businessDescription}\n*Disposto a Investir:* ${data.willingToInvest}`
    );
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

          {submitSuccess ? (
            <div className="max-w-3xl mx-auto my-12 bg-gray-800/30 p-8 rounded-2xl border border-emerald-500/10 shadow-xl text-center">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Formulário enviado com sucesso!</h2>
              <p className="text-white mb-6">Obrigado pelo seu interesse. Você será redirecionado para o WhatsApp em instantes...</p>
            </div>
          ) : (
            <>
              <ConselheiroForm 
                onSubmit={onSubmit} 
                InvestmentQuestionField={InvestmentQuestionField}
                isSubmitting={isSubmitting}
              />
              
              {submitError && (
                <div className="max-w-3xl mx-auto mt-4 p-4 bg-red-500/20 rounded-xl border border-red-500/30">
                  <p className="text-red-400 text-center">{submitError}</p>
                </div>
              )}
            </>
          )}

          <ConselheiroFooter />
        </div>
      </div>
    </>
  );
}
