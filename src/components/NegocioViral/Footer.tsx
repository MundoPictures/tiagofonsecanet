import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center relative w-full py-6 border-t border-gray-800 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #131313, #0a0a0a)",
      }}
    >
      {/* Background accent with subtle animation */}
      <div className="text-centerabsolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-green-900/10 z-0 opacity-70"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Bottom section */}
        <div className="flex flex-col text-center md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © {currentYear} Negócio Viral - Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
