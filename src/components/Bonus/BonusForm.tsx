import { motion, useAnimation } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import {
  FaWhatsapp,
  FaArrowRight,
  FaShieldAlt,
  FaLock,
  FaEye,
} from "react-icons/fa";
import { FormData, BonusFormProps } from "./types";
import { useBonusPageTracking } from "../../utils/bonusPageTracker";
import { useState, useEffect } from "react";

export const BonusForm = ({ onSubmit, remainingSpots }: BonusFormProps) => {
  const tracking = useBonusPageTracking();
  const [viewerCount, setViewerCount] = useState(12 + remainingSpots);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const countAnimation = useAnimation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Format phone number
  const formatPhoneNumber = (value: string) => {
    return value.replace(/\D/g, "");
  };

  // Track form submission and extend with tracking
  const handleFormSubmit = (data: FormData) => {
    tracking.trackFormInteraction("submit", undefined, {
      nome_fornecido: !!data.name,
      email_fornecido: !!data.email,
      telefone_fornecido: !!data.phone,
    });

    // Call the original onSubmit handler
    onSubmit(data);
  };

  // Dynamic viewer count logic
  useEffect(() => {
    // Initial base count linked to remaining spots
    setViewerCount(12 + remainingSpots);

    // Create random fluctuations in viewer count
    const fluctuationInterval = setInterval(() => {
      setViewerCount((prev) => {
        // Determine direction (increasing or decreasing)
        const shouldSwitch = Math.random() < 0.15; // 15% chance to switch direction
        if (shouldSwitch) {
          setIsIncreasing((current) => !current);
        }

        // Calculate the new count
        if (isIncreasing) {
          // Increase with randomness
          const increase = Math.floor(Math.random() * 3) + 1; // 1-3 new viewers
          return prev + increase;
        } else {
          // Decrease with randomness
          const decrease = Math.floor(Math.random() * 2) + 1; // 1-2 viewers leave
          // Ensure we don't go below base count minus 5
          return Math.max(prev - decrease, 12 + remainingSpots - 5);
        }
      });

      // Trigger count animation
      countAnimation.start({
        scale: [1, 1.25, 1],
        color: ["#10b981", "#10b981", "#10b981"],
        transition: { duration: 0.5 },
      });
    }, 3000 + Math.random() * 5000); // Random interval between 3-8 seconds

    return () => clearInterval(fluctuationInterval);
  }, [remainingSpots, isIncreasing, countAnimation]);

  return (
    <motion.div
      className="max-w-2xl mx-auto relative z-10 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      id="form" // Add ID for anchor linking
    >
      {/* Shining border animation */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 animate-gradient-x"></div>

      {/* Form container */}
      <div className="relative bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-emerald-500/20">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">
            Garanta Seu Presente Exclusivo{" "}
            <span className="text-emerald-400">Gratuito</span>
          </h2>

          <p className="text-center text-gray-300 mb-4">
            Preencha seus dados para receber o material no seu WhatsApp
          </p>

          {/* People viewing counter - simplified version */}
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-emerald-300 mb-5 bg-gray-800/40 py-2 px-3 rounded-full shadow-inner border border-emerald-900/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <FaEye className="text-emerald-400 animate-pulse" />
            <motion.span animate={countAnimation} className="font-medium">
              {viewerCount}
            </motion.span>
            <motion.div
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="ml-1"
            >
              pessoas preenchendo agora
            </motion.div>
          </motion.div>

          {/* Progress indicator */}
          <div className="w-full bg-gray-800 h-2 rounded-full mt-5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
              initial={{ width: "33%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 10, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="form-group">
            <label className="block text-white font-medium mb-2">
              Nome Completo
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
                onFocus={() => tracking.trackFormInteraction("focus", "name")}
                onChange={(e) => {
                  if (e.target.value.length > 3) {
                    tracking.trackFormInteraction("field_complete", "name");
                  }
                }}
              />
            </motion.div>
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="block text-white font-medium mb-2">E-mail</label>
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
                onFocus={() => tracking.trackFormInteraction("focus", "email")}
                onChange={(e) => {
                  if (e.target.value.includes("@")) {
                    tracking.trackFormInteraction("field_complete", "email");
                  }
                }}
              />
            </motion.div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label className="block text-white font-medium mb-2">
              WhatsApp
            </label>
            <motion.div
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative"
            >
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "WhatsApp é obrigatório",
                  validate: (value) => {
                    const cleanNumber = formatPhoneNumber(value);
                    return (
                      cleanNumber.length === 11 || "Número deve ter 11 dígitos"
                    );
                  },
                }}
                render={({ field }) => (
                  <div className="relative">
                    <IMaskInput
                      mask="(00) 00000-0000"
                      {...field}
                      onAccept={(value) => {
                        field.onChange(formatPhoneNumber(value));

                        // Track field completion when enough digits are entered
                        if (value.replace(/\D/g, "").length >= 10) {
                          tracking.trackFormInteraction(
                            "field_complete",
                            "phone"
                          );
                        }
                      }}
                      onFocus={() =>
                        tracking.trackFormInteraction("focus", "phone")
                      }
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
              <p className="text-red-400 text-sm mt-2">
                {errors.phone.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 cursor-pointer bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0.9 }}
            animate={{
              opacity: [0.9, 1, 0.9],
              boxShadow: [
                "0px 0px 0px rgba(16, 185, 129, 0.2)",
                "0px 0px 35px rgba(16, 185, 129, 0.6)",
                "0px 0px 0px rgba(16, 185, 129, 0.2)",
              ],
            }}
            transition={{
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            onClick={() => {
              // Track button click (this runs before form validation)
              tracking.trackButtonClick("solicitar_material", {
                localizacao_botao: "formulario",
                possui_erros: Object.keys(errors).length > 0,
              });
            }}
          >
            {/* Outer glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                boxShadow: [
                  "0 0 0px 0px rgba(16, 185, 129, 0.3)",
                  "0 0 20px 3px rgba(16, 185, 129, 0.6)",
                  "0 0 0px 0px rgba(16, 185, 129, 0.3)",
                ],
                background: [
                  "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Multiple shining effects */}
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

            {/* Secondary highlight */}
            <motion.div
              className="absolute inset-0 w-[50%] h-full overflow-hidden opacity-30"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
                transform: "skewX(-15deg)",
              }}
              animate={{ x: ["-100%", "300%"] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 5,
                delay: 0.8,
              }}
            />

            {/* Button border highlight */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                border: "1px solid rgba(16, 185, 129, 0.4)",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                borderColor: [
                  "rgba(16, 185, 129, 0.4)",
                  "rgba(16, 185, 129, 0.8)",
                  "rgba(16, 185, 129, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Particles effect */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-emerald-300"
                style={{
                  left: `${10 + i * 15}%`,
                  top: "50%",
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Button content */}
            <span className="text-lg md:text-xl font-bold relative z-10 tracking-wide group-hover:tracking-wider transition-all duration-300">
              SOLICITAR MEU PRESENTE
            </span>

            {/* Icon background flash */}
            <motion.div
              className="flex gap-3 relative z-10"
              animate={{
                filter: [
                  "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                  "drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))",
                  "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaWhatsapp size={24} className="text-white" />
              <FaArrowRight size={16} className="text-white animate-pulse" />
            </motion.div>
          </motion.button>

          <div className="flex items-center justify-center space-x-3 mt-5 text-xs text-gray-400">
            <div className="flex items-center">
              <FaLock className="mr-1 text-emerald-500" />
              <span>Dados protegidos</span>
            </div>
            <div className="flex items-center">
              <FaShieldAlt className="mr-1 text-emerald-500" />
              <span>Ambiente seguro</span>
            </div>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};
