import React, { useState, useEffect } from "react";
// Import non-animated components instead of framer-motion
import { motion } from "../../utils/nonAnimatedComponents";

interface CountdownTimerProps {
  initialMinutes: number;
  onExpire?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes = 10,
  onExpire,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: initialMinutes,
    seconds: 0,
  });

  // Add a pulsing effect state for the last minute
  const [_, setIsPulsing] = useState(false);
  // Detect if we're on mobile
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    // Convert minutes to milliseconds
    const targetTime = Date.now() + initialMinutes * 60 * 1000;

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;

      // If countdown is finished
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });

        // Call onExpire callback when timer reaches zero
        if (onExpire) {
          onExpire();
        }

        return;
      }

      // Calculate remaining time
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      // Set pulsing effect when time is running low (less than 1 minute)
      if (hours === 0 && minutes === 0) {
        setIsPulsing(true);
      }

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [initialMinutes, onExpire]);

  // Format time with leading zeros
  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  // Use simpler classnames for better performance
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 bg-black text-white py-3 shadow-xl"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm md:text-base text-center sm:text-left mb-2 sm:mb-0 font-medium">
            <div className="inline-flex items-center">
              <span className="inline-block mr-2 text-green-300">🔥</span>
              <span className="font-light">A oferta encerra em</span>
              <span className="font-bold mx-1 underline decoration-green-300 decoration-2 underline-offset-2">
                poucos minutos
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex space-x-2 md:space-x-4 items-center bg-black/30 backdrop-blur-sm rounded-lg py-2 px-4 border border-green-600/30 shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-3xl font-bold">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-xs opacity-80">Horas</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-green-400">
                :
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-3xl font-bold">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-xs opacity-80">Min</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-green-400">
                :
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-3xl font-bold">
                  {formatTime(timeLeft.seconds)}
                </span>
                <span className="text-xs opacity-80">Seg</span>
              </div>
            </div>

            {/* Only show this on desktop */}
            {!isMobile && (
              <div className="hidden md:flex items-center">
                <span className="inline-flex text-white items-center px-3 py-1 text-sm font-medium rounded-full bg-green-500 text-black shadow-md">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Oferta por tempo limitado
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
