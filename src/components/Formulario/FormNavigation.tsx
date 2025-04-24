import React from "react";

interface FormNavigationProps {
  currentStep: number;
  handleBack: () => void;
  handleNext: () => void;
  isLastStep: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  handleBack,
  handleNext,
  isLastStep,
}) => {
  return (
    <div className="flex justify-between pt-6">
      {currentStep > 0 && (
        <button
          type="button"
          onClick={handleBack}
          className="px-6 cursor-pointer py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        >
          Voltar
        </button>
      )}
      {!isLastStep ? (
        <button
          type="button"
          onClick={handleNext}
          className="ml-auto cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        >
          Próximo
        </button>
      ) : (
        <button
          type="submit"
          className="ml-auto px-6 cursor-pointer py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        >
          Enviar Formulário
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
