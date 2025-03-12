import React from "react";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress: React.FC<FormProgressProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="mb-8 text-center relative">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
        Formulário de Aplicação para Autoridade
      </h2>

      {/* Enhanced progress bar */}
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-white/20">
          <div
            className="transition-all duration-500 ease-out shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-400 to-blue-400"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FormProgress;
