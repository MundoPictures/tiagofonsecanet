import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/negocioViral/negociovirallogo.png";

const Header: React.FC = () => {
  return (
    <motion.div
      className="mt-60 sm:mt-72 md:mt-80 lg:mt-60 mb-12 relative z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex md:mt-0 mt-[400px] justify-center items-center">
        {/* Logo - centered on all screen sizes */}
        <div className="max-w-[300px]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={logo} alt="Negócio Viral" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
