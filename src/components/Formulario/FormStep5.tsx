import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../../types/FormData";

interface FormStep5Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep5: React.FC<FormStep5Props> = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="form-group">
        <p className="block text-white font-medium mb-4">
          Como você descreve seu estágio atual no digital?
        </p>
        <div className="space-y-3">
          {[
            {
              value: "Basico",
              label: "Iniciante (Estou começando no digital)",
            },
            {
              value: "Intermediario",
              label:
                "Em Desenvolvimento (Já tenho presença digital mas preciso melhorar)",
            },
            {
              value: "Avancado",
              label:
                "Avançado (Tenho presença digital estabelecida e busco autoridade)",
            },
          ].map((option) => (
            <label key={option.value} className="relative">
              <input
                type="radio"
                value={option.label}
                {...register("digitalStage", {
                  required: "Selecione uma opção",
                })}
                className="peer sr-only"
              />
              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                <span className="block">{option.label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.digitalStage && (
          <p className="text-red-400 text-sm mt-2">
            {errors.digitalStage.message as string}
          </p>
        )}
      </div>

      <div className="form-group">
        <p className="block text-white font-medium mb-4">
          Qual Seu Cargo na empresa?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Coordenador",
            "Gerente",
            "Diretor",
            "Vice Presidente",
            "Presidente ou CEO",
            "Sócio Fundador",
          ].map((option) => (
            <label key={option} className="relative">
              <input
                type="radio"
                value={option}
                {...register("jobTitle", { required: "Selecione uma opção" })}
                className="peer sr-only"
              />
              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                <span className="block">{option}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.jobTitle && (
          <p className="text-red-400 text-sm mt-2">
            {errors.jobTitle.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormStep5;
