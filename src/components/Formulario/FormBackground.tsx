import React from "react";

const FormBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600 blur-[120px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600 blur-[120px]"></div>
      </div>
    </div>
  );
};

export default FormBackground;
