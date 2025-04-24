import React, { ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
      {children}
    </div>
  );
};

export default FormContainer;
