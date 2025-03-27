import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.div
      className="mt-6 mb-12 md:mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex justify-center items-center">
        {/* Logo - centered on all screen sizes */}
        <div className="max-w-[280px] bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg backdrop-blur-sm border border-green-500/10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.h3
              className="text-gray-300 text-xs uppercase tracking-wider mb-1 font-bold"
              animate={{
                textShadow: [
                  "0 0 5px rgba(74, 222, 128, 0)",
                  "0 0 10px rgba(74, 222, 128, 0.5)",
                  "0 0 5px rgba(74, 222, 128, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              DESAFIO
            </motion.h3>
            <h1 className="text-white text-3xl font-extrabold mb-1 tracking-tight">
              NEGÓCIO VIRAL
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-10 bg-green-500 mr-2"></div>
              <h3 className="text-green-400 text-sm uppercase tracking-wider font-bold">
                TIAGO FONSECA
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
