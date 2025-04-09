import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useMetaPixel } from "../../contexts/MetaPixelContext";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Olá! Vim do site Negócio Viral e gostaria de mais informações.",
}) => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [pulseNotification, setPulseNotification] = useState(false);
  const { trackCustomEvent } = useMetaPixel();

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show tooltip after a delay when component is mounted
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 2000);

      // Hide tooltip after some time
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 6000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [visible]);

  // Add notification pulse effect periodically
  useEffect(() => {
    if (visible) {
      // Initial pulse after 15 seconds
      const initialTimer = setTimeout(() => {
        setPulseNotification(true);

        // Remove the pulse after 4 seconds
        setTimeout(() => {
          setPulseNotification(false);
        }, 4000);
      }, 15000);

      // Repeat pulse every 45 seconds after initial pulse
      const intervalId = setInterval(() => {
        setPulseNotification(true);

        // Remove the pulse after 4 seconds
        setTimeout(() => {
          setPulseNotification(false);
        }, 4000);
      }, 45000);

      return () => {
        clearTimeout(initialTimer);
        clearInterval(intervalId);
      };
    }
  }, [visible]);

  const handleWhatsAppClick = () => {
    // Track click event
    trackCustomEvent("whatsapp_button_click", {
      page: "negocio_viral",
      phone_number: phoneNumber,
    });

    // Open WhatsApp with the phone number and message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 cursor-pointer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Ripple effect container */}
          <div className="relative">
            {/* Multiple pulse rings */}
            <motion.div
              className="absolute -inset-1 rounded-full bg-green-500 opacity-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            />

            <motion.div
              className="absolute -inset-2 rounded-full bg-green-500 opacity-10"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.1, 0, 0.1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.2,
              }}
            />

            <motion.button
              onClick={handleWhatsAppClick}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="relative flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-full shadow-xl"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(37, 211, 102, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Inner glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white opacity-30 blur-sm"
                animate={{
                  scale: [0.85, 1, 0.85],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Icon */}
              <FaWhatsapp className="text-3xl z-10" />

              {/* Notification badge */}
              <AnimatePresence>
                {pulseNotification && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20 min-w-6 h-6 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 500,
                    }}
                  >
                    2
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                className="absolute right-full mr-4 bottom-1 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap font-medium text-sm"
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                Fale conosco no WhatsApp!
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
