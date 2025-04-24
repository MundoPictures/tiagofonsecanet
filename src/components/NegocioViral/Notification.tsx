import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCheckmarkCircle,
  IoClose,
  IoWarning,
  IoInformation,
} from "react-icons/io5";

export type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationProps {
  message: string;
  type?: NotificationType;
  duration?: number; // in milliseconds
  onDisappear?: () => void; // callback when notification disappears
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "success",
  duration = 5000, // default 5 seconds
  onDisappear,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onDisappear) {
        onDisappear();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDisappear]);

  const handleClose = () => {
    setVisible(false);
    if (onDisappear) {
      onDisappear();
    }
  };

  const typeConfig = {
    success: {
      icon: <IoCheckmarkCircle size={20} />,
      bgColor: "bg-green-50 border-green-500",
      textColor: "text-green-700",
      iconColor: "text-green-500",
    },
    error: {
      icon: <IoClose size={20} />,
      bgColor: "bg-red-50 border-red-500",
      textColor: "text-red-700",
      iconColor: "text-red-500",
    },
    warning: {
      icon: <IoWarning size={20} />,
      bgColor: "bg-yellow-50 border-yellow-500",
      textColor: "text-yellow-700",
      iconColor: "text-yellow-500",
    },
    info: {
      icon: <IoInformation size={20} />,
      bgColor: "bg-blue-50 border-blue-500",
      textColor: "text-blue-700",
      iconColor: "text-blue-500",
    },
  };

  const config = typeConfig[type];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed z-50 bottom-8 right-6 max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`rounded-md p-4 shadow-md border ${config.bgColor}`}>
            <div className="flex items-center">
              <div className={`mr-3 flex-shrink-0 ${config.iconColor}`}>
                {config.icon}
              </div>
              <div className={`flex-1 ${config.textColor}`}>
                <p className="text-sm font-medium">{message}</p>
              </div>
              <div className="ml-3">
                <button
                  onClick={handleClose}
                  className={`inline-flex ${config.textColor} hover:opacity-70 focus:outline-none`}
                >
                  <IoClose size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
