import { ConselheiroForm } from "../components/Conselheiro/ConselheiroForm";
import { ConselheiroFooter } from "../components/Conselheiro/ConselheiroFooter";
import { ConselheiroBackground } from "../components/Conselheiro/ConselheiroBackground";
import { ConselheiroFormData } from "../components/Conselheiro/types";

export default function Conselheiro() {
  const onSubmit = (data: ConselheiroFormData) => {
    // Create WhatsApp message
    const message = encodeURIComponent(
      `*PROGRAMA CONSELHEIRO*\n\n*Nome:* ${data.name}\n*Email:* ${data.email}\n*Melhor Email:* ${data.bestEmail}\n*Telefone:* ${data.phone}\n*Instagram:* ${data.instagram}\n*Ramo de Atuação:* ${data.businessArea}\n*Diferencial:* ${data.competitiveAdvantage}\n*Funcionários:* ${data.employeeCount}\n*Feliz com Faturamento:* ${data.happyWithRevenue}\n*Faturamento Mensal:* ${data.monthlyRevenue}\n*Descrição do Negócio:* ${data.businessDescription}\n*Disposto a Investir:* ${data.willingToInvest}`
    );

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/5516991775577?text=${message}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <ConselheiroBackground />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              PROGRAMA CONSELHEIRO
            </span>
          </h1>
          <h2 className="text-center text-xl sm:text-2xl font-medium text-gray-300 mb-12 max-w-3xl mx-auto">
            Mentoria pessoal por 1 ano com Tiago Fonseca para transformar seu
            negócio e alcançar resultados extraordinários
          </h2>

          <ConselheiroForm onSubmit={onSubmit} />
        </div>

        <ConselheiroFooter />
      </div>
    </>
  );
}
