import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full py-16 border-t border-gray-800 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #131313, #0a0a0a)",
      }}
    >
      {/* Background accent with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-green-900/10 z-0 opacity-70"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Negócio Viral</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforme seu conhecimento em um negócio digital lucrativo e
              escale sua presença online.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Sobre", "Benefícios", "Depoimentos", "Preços", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm flex items-center"
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-green-500 mr-2"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@negocioviral.com.br"
                className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm flex items-center"
              >
                <FaEnvelope className="mr-2 text-green-500" />
                contato@negocioviral.com.br
              </a>
              <a
                href="https://wa.me/5500000000000"
                className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm flex items-center"
              >
                <FaWhatsapp className="mr-2 text-green-500" />
                (00) 00000-0000
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {[FaInstagram, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="text-white text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col text-center md:flex-row justify-between items-center">
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
