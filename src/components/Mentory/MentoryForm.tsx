import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FaArrowRight, FaLock } from "react-icons/fa";
import { MentoryFormProps } from "./types";
import { MentoryFormData } from "../../pages/MentoryLegacy";

export const MentoryForm = ({
  onSubmit,
  customPriceText,
  customButtonText,
  customFormTitle,
}: MentoryFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MentoryFormData>();

  // Format phone number
  const formatPhoneNumber = (value: string) => {
    return value.replace(/\D/g, "");
  };

  return (
    <div className="max-w-3xl mx-auto my-12 bg-gray-800/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm rounded-2xl border border-emerald-500/10 shadow-xl relative z-10">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">
          {customFormTitle || "Formulário de Inscrição"}
        </h2>
        <p className="text-emerald-400/90 font-medium text-center mb-4">
          Preencha os dados abaixo para se candidatar à{" "}
          <span className="text-white font-bold">Mentoria Legacy</span> com
          Tiago Fonseca
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* Email */}
        <div className="form-group">
          <label className="block text-white font-medium mb-2">
            E-mail <span className="text-red-500">*</span>
          </label>
          <motion.div
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative"
          >
            <input
              type="email"
              {...register("email", {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Formato de e-mail inválido",
                },
              })}
              className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.email
                  ? "border-red-500/50 focus:ring-red-500/50"
                  : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
              }`}
              placeholder="seu@email.com"
            />
          </motion.div>
          {errors.email && (
            <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

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
              {...register("name", { required: "Nome é obrigatório" })}
              className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name
                  ? "border-red-500/50 focus:ring-red-500/50"
                  : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
              }`}
              placeholder="Digite seu nome completo"
            />
          </motion.div>
          {errors.name && (
            <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
          )}
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
              {...register("bestEmail", {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Formato de e-mail inválido",
                },
              })}
              className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.bestEmail
                  ? "border-red-500/50 focus:ring-red-500/50"
                  : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
              }`}
              placeholder="seu@email.com"
            />
          </motion.div>
          {errors.bestEmail && (
            <p className="text-red-400 text-sm mt-2">
              {errors.bestEmail.message}
            </p>
          )}
        </div>

        {/* Whatsapp - celular com DDD */}
        <div className="form-group">
          <label className="block text-white font-medium mb-2">
            Whatsapp - celular com DDD <span className="text-red-500">*</span>
          </label>
          <motion.div
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative"
          >
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Telefone é obrigatório" }}
              render={({ field }) => (
                <div className="relative">
                  <IMaskInput
                    mask="(00) 00000-0000"
                    {...field}
                    onAccept={(value) => {
                      field.onChange(formatPhoneNumber(value));
                    }}
                    className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.phone
                        ? "border-red-500/50 focus:ring-red-500/50"
                        : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
                    }`}
                    placeholder="(11) 91234-5678"
                  />
                </div>
              )}
            />
          </motion.div>
          {errors.phone && (
            <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>
          )}
        </div>

        {/* Instagram */}
        <div className="form-group">
          <label className="block text-white font-medium mb-2">
            Me informe o @ do seu Instagram
          </label>
          <motion.div
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative"
          >
            <input
              type="text"
              {...register("instagram")}
              className="w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
              placeholder="@seuinstagram"
            />
          </motion.div>
        </div>

        {/* Ramo de atuação */}
        <div className="form-group">
          <label className="block text-white font-medium mb-2">
            Qual seu ramo de atuação <span className="text-red-500">*</span>
          </label>
          <motion.div
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative"
          >
            <input
              type="text"
              {...register("businessArea", {
                required: "Ramo de atuação é obrigatório",
              })}
              className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.businessArea
                  ? "border-red-500/50 focus:ring-red-500/50"
                  : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
              }`}
              placeholder="Ex: Marketing, Vendas, Educação, etc."
            />
          </motion.div>
          {errors.businessArea && (
            <p className="text-red-400 text-sm mt-2">
              {errors.businessArea.message}
            </p>
          )}
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
              {...register("competitiveAdvantage", {
                required: "Este campo é obrigatório",
              })}
              className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.competitiveAdvantage
                  ? "border-red-500/50 focus:ring-red-500/50"
                  : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
              }`}
              placeholder="Descreva aqui seu diferencial competitivo"
              rows={3}
            />
          </motion.div>
          {errors.competitiveAdvantage && (
            <p className="text-red-400 text-sm mt-2">
              {errors.competitiveAdvantage.message}
            </p>
          )}
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
                value="Menos de 5 Funcionários"
                {...register("employeeCount", {
                  required: "Este campo é obrigatório",
                })}
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
                value="Acima de 5 Funcionários"
                {...register("employeeCount", {
                  required: "Este campo é obrigatório",
                })}
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
          {errors.employeeCount && (
            <p className="text-red-400 text-sm mt-2">
              {errors.employeeCount.message}
            </p>
          )}
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
                id="happy-revenue-yes"
                value="SIM"
                {...register("happyWithRevenue", {
                  required: "Este campo é obrigatório",
                })}
                className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
              />
              <label
                htmlFor="happy-revenue-yes"
                className="ml-2 text-sm font-medium text-white"
              >
                SIM
              </label>
            </motion.div>
            <motion.div className="flex items-center">
              <input
                type="radio"
                id="happy-revenue-no"
                value="NÃO"
                {...register("happyWithRevenue", {
                  required: "Este campo é obrigatório",
                })}
                className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
              />
              <label
                htmlFor="happy-revenue-no"
                className="ml-2 text-sm font-medium text-white"
              >
                NÃO
              </label>
            </motion.div>
          </div>
          {errors.happyWithRevenue && (
            <p className="text-red-400 text-sm mt-2">
              {errors.happyWithRevenue.message}
            </p>
          )}
        </div>

        {/* Faturamento mensal */}
        <div className="form-group">
          <label className="block text-white font-medium mb-2">
            Qual seu faturamento mensal <span className="text-red-500">*</span>
          </label>
          <select
            {...register("monthlyRevenue", {
              required: "Este campo é obrigatório",
            })}
            className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.monthlyRevenue
                ? "border-red-500/50 focus:ring-red-500/50"
                : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
            }`}
          >
            <option value="">Selecione seu faturamento</option>
            <option value="Até 5 mil por mês">Até 5 mil por mês</option>
            <option value="5 mil a 10 mil por mês">
              5 mil a 10 mil por mês
            </option>
            <option value="10 mil a 20 mil por mês">
              10 mil a 20 mil por mês
            </option>
            <option value="30 mil a 50 mil por mês">
              30 mil a 50 mil por mês
            </option>
            <option value="50 mil a 100 mil por mês">
              50 mil a 100 mil por mês
            </option>
            <option value="100 mil a 500 mil por mês">
              100 mil a 500 mil por mês
            </option>
            <option value="500 mil a 1 milhão por mês">
              500 mil a 1 milhão por mês
            </option>
            <option value="Acima de 1 milhão por mês">
              Acima de 1 milhão por mês
            </option>
          </select>
          {errors.monthlyRevenue && (
            <p className="text-red-400 text-sm mt-2">
              {errors.monthlyRevenue.message}
            </p>
          )}
        </div>

        {/* Descrição do negócio */}
        <div className="form-group">
          <label className="block text-white font-medium mb-2">
            Me conte sobre o seu negócio.{" "}
            <span className="text-red-500">*</span>
          </label>
          <motion.div
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative"
          >
            <textarea
              {...register("businessDescription", {
                required: "Este campo é obrigatório",
              })}
              className={`w-full px-4 py-3 border rounded-xl bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.businessDescription
                  ? "border-red-500/50 focus:ring-red-500/50"
                  : "border-emerald-600/30 focus:ring-emerald-500/50 hover:border-emerald-400/50"
              }`}
              placeholder="Descreva aqui seu negócio, objetivos e desafios"
              rows={4}
            />
          </motion.div>
          {errors.businessDescription && (
            <p className="text-red-400 text-sm mt-2">
              {errors.businessDescription.message}
            </p>
          )}
        </div>

        {/* Disposição para investir */}
        <div className="form-group">
          <label className="block text-white font-medium mb-2">
            {customPriceText ||
              "Você está disposto investir até 10Mil, para você aprender com o Tiago Fonseca a Triplicar suas vendas?"}{" "}
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

        {/* Submit button */}
        <div className="mt-8 relative">
          <button
            type="submit"
            className="w-full relative py-4 px-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-lg overflow-hidden group flex items-center justify-center transition-all duration-300 ease-out hover:from-emerald-500 hover:to-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="mr-1">
              {customButtonText || "QUERO FAZER PARTE DA MENTORIA LEGACY"}
            </span>
            <span>
              <FaArrowRight className="ml-1" />
            </span>

            {/* Button effects */}
            <motion.div
              className="absolute inset-0 w-[100%] h-full overflow-hidden opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                transform: "skewX(-20deg)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </button>
        </div>

        {/* Security notice */}
        <div className="text-center mt-4 text-gray-400 text-sm flex items-center justify-center">
          <FaLock className="mr-2 text-emerald-500" />
          <span>Seus dados estão protegidos com segurança</span>
        </div>
      </motion.form>
    </div>
  );
};
