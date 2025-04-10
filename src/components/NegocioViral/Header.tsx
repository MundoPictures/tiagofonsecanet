// import { motion } from "framer-motion";
import { motion } from "../../../src/utils/nonAnimatedComponents";
import React from "react";
import logo from "../../assets/negocioViral/negociovirallogo.png";

const Header: React.FC = () => {
  return (
    <motion.div
      className="mb-4 md:mb-6 lg:mb-8 relative z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex mt-18 md:mt-8 justify-center md:justify-start items-center w-full md:w-1/2">
        {/* Logo - centered on mobile, aligned with content on desktop */}
        <div className="w-3/5 md:w-1/2 mx-auto flex justify-center items-center">
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
