import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../../types/FormData";

interface FormStep4Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep4: React.FC<FormStep4Props> = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="form-group">
        <p className="block text-white font-medium mb-4">
          Qual seu principal desafio atual?
        </p>
        <div className="space-y-3">
          {[
            "Falta de autoridade digital – Quero me posicionar como uma referência no meu nicho.",
            "Baixo engajamento nas redes sociais – Tenho dificuldade em atrair e engajar meu público.",
            "Dificuldade em criar conteúdo estratégico – Não sei o que postar ou como planejar meus conteúdos.",
            "Pouca geração de leads e vendas – Quero atrair mais clientes e vender meus produtos/serviços no digital.",
            "Falta de conhecimento sobre marketing digital – Preciso entender melhor estratégias para crescer no online.",
            "Medo ou insegurança – Tenho receio em aparecer e criar conteudo no digital",
            "Falta de tempo e produtividade – Preciso de métodos para produzir conteúdo sem perder muito tempo.",
          ].map((option) => (
            <label key={option} className="relative">
              <input
                type="radio"
                value={option}
                {...register("eventPain", { required: "Selecione uma opção" })}
                className="peer sr-only"
              />
              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                <span className="block text-sm">{option}</span>
              </div>
            </label>
          ))}
          {/* Outro option with text input */}
          <label className="relative">
            <input
              type="radio"
              value="Outro"
              {...register("eventPain", { required: "Selecione uma opção" })}
              className="peer sr-only"
            />
            <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
              <div className="flex items-center space-x-2">
                <span className="block text-sm">Outro</span>
                <input
                  type="text"
                  onClick={(e) => {
                    const radio = e.currentTarget.parentElement?.parentElement
                      ?.previousElementSibling as HTMLInputElement;
                    if (radio) radio.checked = true;
                  }}
                  onChange={(e) => {
                    const radio = e.currentTarget.parentElement?.parentElement
                      ?.previousElementSibling as HTMLInputElement;
                    if (radio) radio.value = `Outro – ${e.target.value}`;
                  }}
                  className="ml-2 flex-1 bg-transparent border-b border-white/30 focus:border-purple-400 outline-none px-2 py-1"
                  placeholder="Especifique"
                />
              </div>
            </div>
          </label>
        </div>
        {errors.eventPain && (
          <p className="text-red-400 text-sm mt-2">
            {errors.eventPain.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormStep4;
