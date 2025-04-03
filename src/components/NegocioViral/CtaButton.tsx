import React from "react";
import { motion } from "framer-motion";
import { useModal } from "../../contexts/ModalContext";

interface CtaButtonProps {
  text: string;
  mobileText?: string; // Optional shorter text for mobile
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
  withArrow?: boolean;
  withShine?: boolean;
  withPulse?: boolean;
  isPricingButton?: boolean; // Flag to determine if this is the pricing button
  id?: string; // Add ID prop
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text = "QUERO APLICAR AS 10 AÇÕES AGORA",
  mobileText,
  onClick,
  className = "",
  size = "medium",
  withArrow = true,
  withShine = true,
  withPulse = true,
  isPricingButton = false,
  id, // Add ID parameter
}) => {
  const { openModal, scrollToPricing } = useModal();

  const handleClick = () => {
    if (isPricingButton) {
      openModal(); // Only pricing button opens the modal
    } else {
      scrollToPricing(); // All other buttons scroll to pricing section
    }

    if (onClick) onClick();
  };

  // Size variants with improved mobile sizing - increased text size and padding for mobile
  const sizeClasses = {
    small: "py-2 px-4 text-sm sm:py-2 sm:px-4 sm:text-sm",
    medium: "py-3 px-5 text-base sm:py-3 sm:px-6 sm:text-base",
    large: "py-4 px-6 text-lg sm:py-4 sm:px-8 sm:text-lg",
  };

  // Determine which text to use (shorter for mobile if provided)
  const displayText = mobileText ? (
    <>
      <span className="sm:hidden font-bold">{mobileText}</span>
      <span className="hidden sm:inline">{text}</span>
    </>
  ) : (
    text
  );

  return (
    <div className="relative inline-block w-full sm:w-auto">
      {/* Enhanced pulsing effect - slightly larger for better mobile visibility */}
      {withPulse && (
        <motion.div
          className="absolute inset-0 rounded-md bg-green-500 opacity-60 blur-[2px]"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.6, 0.7, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}

      <motion.button
        id={id} // Add ID attribute
        className={`relative overflow-hidden w-full md:w-auto bg-green-500 text-white font-bold rounded-md uppercase tracking-wide cursor-pointer ${sizeClasses[size]} ${className} shadow-lg shadow-green-900/30`}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Enhanced shine effect */}
        {withShine && (
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black, transparent)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white/10 w-1/3"
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
          {displayText}
          {withArrow && (
            <motion.span
              className="ml-1 sm:ml-2 text-xl"
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
