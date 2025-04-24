import { motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa";

export const BonusFooter = () => {
  return (
    <motion.footer
      className="mt-16 py-8 text-center relative z-10 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm text-gray-500 mb-2 flex items-center justify-center gap-1">
          <FaRegCopyright size={12} />
          <span>
            {new Date().getFullYear()} Tiago Fonseca. Todos os direitos
            reservados.
          </span>
        </p>
      </div>
    </motion.footer>
  );
};
