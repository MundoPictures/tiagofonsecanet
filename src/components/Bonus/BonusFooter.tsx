import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaRegCopyright } from "react-icons/fa";

export const BonusFooter = () => {
  return (
    <motion.footer
      className="mt-16 py-8 text-center relative z-10 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center text-gray-400 text-sm gap-2">
            <FaLock className="text-emerald-500" size={14} />
            <span>Seus dados estão protegidos</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center text-gray-400 text-sm gap-2">
            <FaShieldAlt className="text-emerald-500" size={14} />
            <span>Ambiente 100% seguro</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-2 flex items-center justify-center gap-1">
          <FaRegCopyright size={12} />
          <span>
            {new Date().getFullYear()} Tiago Fonseca. Todos os direitos
            reservados.
          </span>
        </p>

        <p className="text-xs text-gray-600 mt-2 max-w-2xl mx-auto">
          Este site não é afiliado ao WhatsApp ou Meta Platforms Inc. Ao
          fornecer seus dados, você concorda com nossa política de privacidade.
        </p>
      </div>
    </motion.footer>
  );
};
