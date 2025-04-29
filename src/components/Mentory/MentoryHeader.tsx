import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers } from "react-icons/fa";

export type MentoryHeaderProps = {
  formSubmitted: boolean;
};

export const MentoryHeader = ({ formSubmitted }: MentoryHeaderProps) => {
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
            <FaGraduationCap className="text-yellow-300 animate-pulse" />
            Recebemos sua inscrição para a Mentoria Legacy!
            <FaGraduationCap className="text-yellow-300 animate-pulse" />
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
            <div className="flex items-center gap-2">
              <FaUsers className="text-emerald-300" />
              <span>Mentoria Exclusiva com Tiago Fonseca</span>
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-white leading-tight">
            Mentoria Legacy
          </h1>
        </div>
      </motion.div>
    </>
  );
};
