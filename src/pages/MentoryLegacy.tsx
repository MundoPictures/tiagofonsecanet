import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  MentoryForm,
  MentoryHeader,
  MentoryFooter,
  MentoryBackground,
} from "../components/Mentory";

export type MentoryFormData = {
  name: string;
  bestEmail: string;
  phone: string;
  instagram: string;
  businessArea: string;
  competitiveAdvantage: string;
  employeeCount: "Menos de 5 Funcionários" | "Acima de 5 Funcionários";
  happyWithRevenue: "SIM" | "NÃO";
  monthlyRevenue:
    | "30 mil a 50 mil por mês"
    | "50 mil a 100 mil por mês"
    | "100 mil a 500 mil por mês"
    | "500 mil a 1 milhão por mês"
    | "Acima de 1 milhão por mês";
  businessDescription: string;
  willingToInvest:
    | "SIM e A VISTA"
    | "CONSIGO PARCELAR EM 12X"
    | "NÃO É MEU MOMENTO AGORA";
};

export default function MentoryLegacy() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data: MentoryFormData) => {
    // Redirect to WhatsApp with message
    const message = encodeURIComponent(
      `Olá, gostaria de participar da Mentoria Legacy!\nNome: ${data.name}\nEmail: ${data.bestEmail}\nTelefone: ${data.phone}\nInstagram: ${data.instagram}`
    );
    window.location.href = `https://wa.me/5511919735222?text=${message}`;

    // Show confirmation message
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-emerald-950 text-white overflow-hidden">
      <AnimatePresence>
        <MentoryBackground />

        {/* Main container */}
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <MentoryHeader formSubmitted={formSubmitted} />

          {/* Você está disposto a investir 60 Mil em sua empresa para alcançar resultados? */}
          <MentoryForm onSubmit={onSubmit} />

          <MentoryFooter />
        </div>
      </AnimatePresence>
    </div>
  );
}
