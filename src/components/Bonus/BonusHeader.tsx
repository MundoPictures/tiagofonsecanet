import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { BonusHeaderProps } from "./types";
import { useState, useEffect } from "react";

export const BonusHeader = ({
  formSubmitted,
  expirationTime,
}: BonusHeaderProps) => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = expirationTime.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 1),
          minutes: Math.floor((difference / 1000 / 60) % 5),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expirationTime]);

  return (
    <>
      {/* Confirmation message (appears after form submission) */}
      {formSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0, 1, 0.8, 1],
            y: 0,
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-5 text-center shadow-lg"
        >
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-bold">
            <FaGift className="text-yellow-300 animate-pulse" />
            Enviamos o presente exclusivo para seu WhatsApp
            <FaGift className="text-yellow-300 animate-pulse" />
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.div
        className="mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="inline-block mb-5 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-700/80 to-emerald-600/80 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-sm font-semibold uppercase tracking-wider"
            animate={{
              boxShadow: [
                "0 0 0px rgba(16, 185, 129, 0)",
                "0 0 20px rgba(16, 185, 129, 0.5)",
                "0 0 0px rgba(16, 185, 129, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Presente Exclusivo e Gratuito
          </motion.div>

          <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-white leading-tight">
            Preencha Seus Dados
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">
              Para Receber Seu Presente
            </span>
          </h1>

          {/* Countdown Timer */}
          <motion.div
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-b from-emerald-900 to-gray-900 w-20 h-20 rounded-lg flex items-center justify-center border border-emerald-700/30 shadow-lg">
                  <motion.span
                    className="text-4xl font-bold"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 59,
                    }}
                  >
                    {String(timeLeft.hours).padStart(2, "0")}
                  </motion.span>
                </div>
                <span className="text-xs text-gray-400 mt-1">HORAS</span>
              </div>

              <span className="text-4xl text-emerald-500 font-bold mb-4">
                :
              </span>

              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-b from-emerald-900 to-gray-900 w-20 h-20 rounded-lg flex items-center justify-center border border-emerald-700/30 shadow-lg">
                  <motion.span
                    className="text-4xl font-bold"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 59,
                    }}
                  >
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </motion.span>
                </div>
                <span className="text-xs text-gray-400 mt-1">MINUTOS</span>
              </div>

              <span className="text-4xl text-emerald-500 font-bold mb-4">
                :
              </span>

              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-b from-emerald-900 to-gray-900 w-20 h-20 rounded-lg flex items-center justify-center border border-emerald-700/30 shadow-lg">
                  <motion.span
                    className="text-4xl font-bold"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </motion.span>
                </div>
                <span className="text-xs text-gray-400 mt-1">MOMENTOS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
