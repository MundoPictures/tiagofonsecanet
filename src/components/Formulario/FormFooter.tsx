import React from "react";

const FormFooter: React.FC = () => {
  return (
    <footer className="relative z-10 w-full max-w-2xl mt-8">
      <div className="text-center">
        <div className="inline-block">
          <div className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10">
            <p className="text-white/70 text-sm">
              Tiago Fonseca | Todos os direitos reservados{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FormFooter;
