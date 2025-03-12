import React, { useState } from "react";
import {
  UseFormRegister,
  Controller,
  Control,
  FieldErrors,
} from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FormData } from "../../types/FormData";

interface FormStep1Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep1: React.FC<FormStep1Props> = ({ register, control, errors }) => {
  const [isInternational, setIsInternational] = useState(false);

  // Function to format phone number for webhook
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters except + for international numbers
    return value.replace(/[^\d+]/g, "");
  };

  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="block text-white font-medium mb-2">
          Nome Completo
        </label>
        <input
          type="text"
          {...register("fullName", { required: "Nome é obrigatório" })}
          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.fullName
              ? "border-red-500/50 focus:ring-red-500/50"
              : "border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50"
          }`}
          placeholder="Digite seu nome completo"
        />
        {errors.fullName && (
          <p className="text-red-400 text-sm mt-2">
            {errors.fullName.message as string}
          </p>
        )}
      </div>

      <div className="form-group">
        <label className="block text-white font-medium mb-2">
          Seu melhor e-mail
        </label>
        <input
          type="email"
          {...register("email", {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Formato de e-mail inválido",
            },
          })}
          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.email
              ? "border-red-500/50 focus:ring-red-500/50"
              : "border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50"
          }`}
          placeholder="exemplo@dominio.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-2">
            {errors.email.message as string}
          </p>
        )}
      </div>

      <div className="form-group">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-white font-medium">
            Whatsapp {isInternational ? "(Internacional)" : "(Brasil)"}
          </label>
          <button
            type="button"
            onClick={() => {
              setIsInternational(!isInternational);
            }}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
          >
            {isInternational
              ? "Usar formato brasileiro"
              : "Usar formato internacional"}
          </button>
        </div>

        <Controller
          name="whatsapp"
          control={control}
          rules={{
            required: "Whatsapp é obrigatório",
            validate: (value) => {
              const cleanNumber = formatPhoneNumber(value);
              if (cleanNumber.startsWith("+")) {
                // International number validation (at least 7 digits after country code)
                return (
                  cleanNumber.length >= 8 || "Número internacional inválido"
                );
              } else {
                // Brazilian number validation (exactly 11 digits)
                return (
                  cleanNumber.length === 11 ||
                  "Número brasileiro deve ter 11 dígitos"
                );
              }
            },
          }}
          render={({ field: { onChange, value, ...field } }) => {
            // Format the value for display
            const displayValue = value || "";

            // Handle key press to detect + at the beginning
            const handleKeyDown = (
              e: React.KeyboardEvent<HTMLInputElement>
            ) => {
              if (e.key === "+" && !isInternational) {
                setIsInternational(true);
                // Prevent the default behavior to avoid adding + to the masked input
                e.preventDefault();
                // Set the value with + prefix
                onChange("+");
              }
            };

            if (isInternational) {
              return (
                <input
                  type="text"
                  {...field}
                  value={displayValue}
                  onChange={(e) => {
                    // For international numbers, just format without mask
                    onChange(formatPhoneNumber(e.target.value));
                  }}
                  onKeyDown={handleKeyDown}
                  className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.whatsapp
                      ? "border-red-500/50 focus:ring-red-500/50"
                      : "border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50"
                  }`}
                  placeholder="+1 999999999"
                />
              );
            } else {
              return (
                <div className="relative">
                  <IMaskInput
                    mask="(00) 00000-0000"
                    {...field}
                    value={displayValue}
                    onAccept={(value) => {
                      onChange(formatPhoneNumber(value));
                    }}
                    onKeyDown={handleKeyDown}
                    className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.whatsapp
                        ? "border-red-500/50 focus:ring-red-500/50"
                        : "border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50"
                    }`}
                    placeholder="(11) 91234-5678"
                  />
                </div>
              );
            }
          }}
        />
        {errors.whatsapp && (
          <p className="text-red-400 text-sm mt-2">
            {errors.whatsapp.message as string}
          </p>
        )}
        <p className="text-white/60 text-sm mt-2">
          {isInternational
            ? "Digite o código do país com o sinal + (exemplo: +1 para EUA, +44 para Reino Unido)"
            : "Para números internacionais, clique em 'Usar formato internacional' acima"}
        </p>
      </div>
    </div>
  );
};

export default FormStep1;
