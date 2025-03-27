import React from "react";
import { motion } from "framer-motion";

interface CtaButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
  withArrow?: boolean;
  withShine?: boolean;
  withPulse?: boolean;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text = "QUERO APLICAR AS 10 AÇÕES AGORA E AUMENTAR MINHAS VENDAS",
  onClick,
  className = "",
  size = "medium",
  withArrow = true,
  withShine = true,
  withPulse = true,
}) => {
  // Size variants
  const sizeClasses = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-6 text-base",
    large: "py-4 px-8 text-lg",
  };

  return (
    <div className="relative inline-block">
      {/* Very subtle pulsing effect - barely extends beyond button */}
      {withPulse && (
        <motion.div
          className="absolute inset-0 rounded-md bg-green-500 opacity-50 blur-[1px]"
          animate={{
            scale: [1, 1.01, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}

      <motion.button
        className={`relative overflow-hidden w-full md:w-auto bg-green-500 text-white font-bold rounded-md uppercase tracking-wide ${sizeClasses[size]} ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Very subtle shine effect contained within button */}
        {withShine && (
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black, transparent)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white/5 w-1/3"
              animate={{ x: ["-100%", "300%"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 3,
              }}
            />
          </motion.div>
        )}

        <span className="relative flex items-center justify-center">
          {text}
          {withArrow && (
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          )}
        </span>
      </motion.button>
    </div>
  );
};

export default CtaButton;
