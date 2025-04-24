import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../../types/FormData";

interface FormStep2Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep2: React.FC<FormStep2Props> = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="block text-white font-medium mb-2">
          Qual seu ramo de atuação?
        </label>
        <input
          type="text"
          {...register("ramo", { required: "Este campo é obrigatório" })}
          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.ramo
              ? "border-red-500/50 focus:ring-red-500/50"
              : "border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50"
          }`}
          placeholder="Ex: Tecnologia, Saúde, Educação..."
        />
        {errors.ramo && (
          <p className="text-red-400 text-sm mt-2">
            {errors.ramo.message as string}
          </p>
        )}
      </div>

      <div className="form-group">
        <p className="block text-white font-medium mb-4">
          Número de Funcionários
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="relative">
            <input
              type="radio"
              value="Menos de 5 Funcionários"
              {...register("numEmployees", { required: "Selecione uma opção" })}
              className="peer sr-only"
            />
            <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
              <span className="block">Menos de 5 Funcionários</span>
            </div>
          </label>
          <label className="relative">
            <input
              type="radio"
              value="Mais de 5 Funcionários"
              {...register("numEmployees", { required: "Selecione uma opção" })}
              className="peer sr-only"
            />
            <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
              <span className="block">Mais de 5 Funcionários</span>
            </div>
          </label>
        </div>
        {errors.numEmployees && (
          <p className="text-red-400 text-sm mt-2">
            {errors.numEmployees.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormStep2;
