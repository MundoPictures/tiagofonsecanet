import { motion } from "framer-motion";
import { FaRegCopyright, FaGraduationCap } from "react-icons/fa";
import { MentoryFooterProps } from "./types";

export const MentoryFooter = ({
  customTitle,
  customDescription,
}: MentoryFooterProps = {}) => {
  return (
    <motion.footer
      className="mt-16 py-8 text-center relative z-10 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaGraduationCap className="text-emerald-500 text-xl" />
          <h3 className="text-lg font-semibold text-emerald-400">
            {customTitle || "Mentoria Legacy"}
          </h3>
        </div>

        <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
          {customDescription ||
            "Um programa exclusivo para empreendedores que desejam triplicar suas vendas e transformar seus negócios com estratégias comprovadas."}
        </p>

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
