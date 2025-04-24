import React from "react";
import {
  UseFormRegister,
  Controller,
  Control,
  FieldErrors,
} from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FormData } from "../../types/FormData";

interface FormStep3Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep3: React.FC<FormStep3Props> = ({ register, control, errors }) => {
  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="block text-white font-medium mb-2">
          Nome da Empresa
        </label>
        <input
          type="text"
          {...register("companyName", {
            required: "Nome da empresa é obrigatório",
          })}
          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.companyName
              ? "border-red-500/50 focus:ring-red-500/50"
              : "border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50"
          }`}
          placeholder="Digite o nome da sua empresa"
        />
        {errors.companyName && (
          <p className="text-red-400 text-sm mt-2">
            {errors.companyName.message as string}
          </p>
        )}
      </div>

      <div className="form-group">
        <label className="block text-white font-medium mb-2">RG</label>
        <Controller
          name="rg"
          control={control}
          rules={{ required: "RG é obrigatório" }}
          render={({ field }) => (
            <IMaskInput
              mask="00.000.000-0"
              unmask={true}
              onAccept={(value) => {
                field.onChange(value);
              }}
              {...field}
              className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.rg
                  ? "border-red-500/50 focus:ring-red-500/50"
                  : "border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50"
              }`}
              placeholder="00.000.000-0"
            />
          )}
        />
        {errors.rg && (
          <p className="text-red-400 text-sm mt-2">
            {errors.rg.message as string}
          </p>
        )}
      </div>

      <div className="form-group">
        <p className="block text-white font-medium mb-4">
          Qual seu faturamento anual?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Ainda não faturamos",
            "Até 500k",
            "De 500k a 1milhão",
            "De 1 milhão a 5 milhões",
            "De 5 milhões a 10 milhões",
            "De 10 milhões a 50 milhões",
            "De 50 milhões a 500 milhões",
            "Acima de 500 milhões",
          ].map((option) => (
            <label key={option} className="relative">
              <input
                type="radio"
                value={option}
                {...register("annualRevenue", {
                  required: "Selecione uma opção",
                })}
                className="peer sr-only"
              />
              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                <span className="block text-sm">{option}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.annualRevenue && (
          <p className="text-red-400 text-sm mt-2">
            {errors.annualRevenue.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormStep3;
