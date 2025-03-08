import { useState, useEffect } from 'react';
import logoInfluencia from '../assets/logoInfluencia.png'
import assinaturaTiago from '../assets/assTiagoWhite.png'
import TiagoFonseca from '../assets/tiagofoto.webp'

function Influencia() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Add CSS for marquee animation to the document head
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 20s linear infinite;
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            .animate-pulse-slow {
                animation: pulse 3s ease-in-out infinite;
            }
            .text-gradient {
                background: linear-gradient(90deg, #FF6B00 0%, #FF9E00 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Countdown timer
    useEffect(() => {
        const eventDate = new Date('March 10, 2025 14:00:00').getTime();
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            setCountdown({ days, hours, minutes, seconds });
        };
        
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#0F0A1F] text-white min-h-screen overflow-hidden relative">
            {/* Stars background */}
            <div className="absolute inset-0 z-0">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute w-1 h-1 bg-white rounded-full" 
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            {/* Countdown Header */}
            <header className="relative z-10 flex flex-col items-center p-4 md:p-6 max-w-6xl mx-auto">
                <div className="flex space-x-4 md:space-x-8 mb-6">
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white text-xl md:text-3xl font-bold rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px] shadow-lg">
                            {countdown.days}
                        </div>
                        <div className="text-xs md:text-sm mt-1 text-gray-300">Dias</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white text-xl md:text-3xl font-bold rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px] shadow-lg">
                            {countdown.hours}
                        </div>
                        <div className="text-xs md:text-sm mt-1 text-gray-300">Horas</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white text-xl md:text-3xl font-bold rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px] shadow-lg">
                            {countdown.minutes}
                        </div>
                        <div className="text-xs md:text-sm mt-1 text-gray-300">Minutos</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white text-xl md:text-3xl font-bold rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px] shadow-lg">
                            {countdown.seconds}
                        </div>
                        <div className="text-xs md:text-sm mt-1 text-gray-300">Segundos</div>
                    </div>
                </div>
                <button className="animate-pulse-slow bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white px-8 py-4 rounded-full hover:from-[#FF9E00] hover:to-[#FF6B00] transition-all duration-300 font-bold text-lg shadow-lg transform hover:scale-105 cursor-pointer">
                    QUERO PARTICIPAR
                </button>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 text-center px-4 py-12 md:py-20 max-w-6xl mx-auto">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0F0A1F] via-transparent to-transparent opacity-70 z-0"></div>

                <img src={logoInfluencia} alt="Logo Influência" className="w-1/2 mx-auto mb-12" />
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 relative z-10">
                    <span className="text-gradient">"O mais conhecido</span><br />
                    <span className="text-white">vence o melhor!"</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                    Transforme sua presença digital com o método da Mentoria Influência. Aprenda a construir sua marca e aumentar seu faturamento.
                </p>
                <div className="mb-12">
                    <button className="animate-pulse-slow bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white px-8 py-4 rounded-full hover:from-[#FF9E00] hover:to-[#FF6B00] transition-all duration-300 font-bold text-lg shadow-lg transform hover:scale-105 cursor-pointer">
                        QUERO PARTICIPAR DO INFLUÊNCIA
                    </button>
                </div>
            </section>

            {/* Event Info Banner */}
            <div className="relative z-10 bg-gradient-to-r from-[#3B2A8C] to-[#5A3BAA] py-8 px-4 md:px-8 shadow-xl">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">
                        São 3 dias intensos de aprendizado e mais de 30h de conteúdo para você se tornar uma autoridade digital de sucesso.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-[#0F0A1F] bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-[#FF9E00] text-xl font-bold mb-2">Dia 10 de Março</div>
                            <p className="text-white">das 14:00 às 22:00</p>
                        </div>
                        <div className="bg-[#0F0A1F] bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-[#FF9E00] text-xl font-bold mb-2">Dias 11 e 12 de Março</div>
                            <p className="text-white">das 09:00 às 19:00</p>
                        </div>
                        <div className="bg-[#0F0A1F] bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="text-[#FF9E00] text-xl font-bold mb-2">Localização</div>
                            <p className="text-white">Edificio Canopus Av. Tambore, 267 - Tamboré - Barueri - SP, 06460-000 6 Andar - Torre Norte</p>
                        </div>
                    </div>
                    <button className="animate-pulse-slow bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white px-8 py-4 rounded-full hover:from-[#FF9E00] hover:to-[#FF6B00] transition-all duration-300 font-bold text-lg mt-10 shadow-lg transform hover:scale-105 cursor-pointer">
                        QUERO PARTICIPAR DO INFLUÊNCIA
                    </button>
                </div>
            </div>

            {/* What You'll Learn Section */}
            <section className="relative z-10 px-4 py-16 md:py-24 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-[#3B2A8C] text-[#FF9E00] rounded-full text-sm font-medium mb-4">CONTEÚDO EXCLUSIVO</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">O que você vai aprender:</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Conteúdos práticos e estratégicos para transformar sua presença digital e aumentar seus resultados
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Método PAE de viralização",
                        "Stories Milionários",
                        "Posicionamento Atômico",
                        "Como Vencer de uma vez por todas a Timidez",
                        "Fábrica de ideias",
                        "Roteiro Magnético (Prender atenção)",
                        "Imã de visualizações nos stories",
                        "Plano de Ação Prático",
                        "Venda Invisível",
                        "Marketing de Influência"
                    ].map((item, index) => (
                        <div key={index} className="bg-[#1A1333] p-6 rounded-lg flex items-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:translate-y-[-5px]">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold shadow-md">
                                {index + 1}
                            </div>
                            <p className="font-medium text-white">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Social Proof Banner */}
            <div className="relative z-10 bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] py-6 px-4 md:px-8 text-center">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white">+4 Milhões</div>
                        <div className="text-sm text-white">Seguidores</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white">+2 Milhões</div>
                        <div className="text-sm text-white">Inscritos no YouTube</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white">+30 Horas</div>
                        <div className="text-sm text-white">De Conteúdo</div>
                    </div>
                </div>
            </div>

            {/* Mentor Section */}
            <section className="relative z-10 px-4 py-16 md:py-24 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 w-full mb-8 md:mb-0">
                        <div className="bg-gradient-to-br from-[#3B2A8C] to-[#5A3BAA] h-80 w-full rounded-lg flex items-center justify-center shadow-2xl overflow-hidden relative">
                            <img src={TiagoFonseca} alt="Tiago Fonseca" className="w-full h-full object-cover object-top" />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-12">
                        <div className="inline-block px-4 py-1 bg-[#3B2A8C] text-[#FF9E00] rounded-full text-sm font-medium mb-4">SEU MENTOR</div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Tiago Fonseca</h2>
                        <div className="space-y-4 text-gray-300">
                            <p className="flex items-start">
                                <span className="text-[#FF9E00] mr-2">•</span>
                                <span>Tiago Fonseca é o maior especialista em viralização de conteúdo do Brasil, onde seus conteúdos já alcançaram milhões de pessoas ao redor do mundo.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-[#FF9E00] mr-2">•</span>
                                <span>Escritor do Best Seller "Cresça, apareça e enriqueça."</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-[#FF9E00] mr-2">•</span>
                                <span>CEO da Mundo Pictures e criador do maior canal de empreendedorismo da América Latina com mais de 2 milhões de inscritos.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-[#FF9E00] mr-2">•</span>
                                <span>Atualmente possui mais de 4 Milhões de seguidores em suas redes sociais.</span>
                            </p>
                        </div>
                        <p className="mt-6 text-gray-300 border-l-4 border-[#FF9E00] pl-4 italic">
                            "Sua missão é realizar sonhos, impactando milhares de Pessoas e negócios no Brasil e mundo, utilizando a transformação digital."
                        </p>

                        <img src={assinaturaTiago} alt="Assinatura Tiago" className="lg:w-1/5 w-1/3 mt-2" />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative z-10 px-4 py-16 md:py-24 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-[#3B2A8C] text-[#FF9E00] rounded-full text-sm font-medium mb-4">DEPOIMENTOS</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Veja o que estão falando de nós</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Histórias reais de pessoas que transformaram sua presença digital com a Mentoria Influência
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Maria Silva",
                            role: "Empreendedora Digital",
                            text: "A Mentoria Influência transformou completamente minha presença digital. Em apenas 3 meses, consegui triplicar meu faturamento e construir uma audiência engajada."
                        },
                        {
                            name: "João Santos",
                            role: "Criador de Conteúdo",
                            text: "Depois de aplicar as estratégias do Tiago, meus vídeos começaram a viralizar e minha base de seguidores cresceu exponencialmente. O retorno sobre o investimento foi incrível!"
                        },
                        {
                            name: "Ana Oliveira",
                            role: "Coach de Carreira",
                            text: "O método de posicionamento atômico mudou completamente minha forma de me comunicar nas redes sociais. Hoje tenho clientes em lista de espera graças às técnicas aprendidas."
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-[#1A1333] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:translate-y-[-5px]">
                            <div className="flex text-[#FF9E00] mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">
                                "{item.text}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] rounded-full mr-4 flex items-center justify-center text-white font-bold shadow-md">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.name}</div>
                                    <div className="text-sm text-gray-400">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-10 px-4 py-16 md:py-24 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-[#3B2A8C] text-[#FF9E00] rounded-full text-sm font-medium mb-4">DÚVIDAS FREQUENTES</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Perguntas Frequentes</h2>
                </div>
                <div className="space-y-4">
                    <div className="bg-[#1A1333] p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-medium text-white mb-2">Preciso ter experiência prévia?</h3>
                        <p className="text-gray-300">Não, o evento é para todos os níveis. Desde iniciantes até profissionais que já atuam no mercado digital.</p>
                    </div>
                    <div className="bg-[#1A1333] p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-medium text-white mb-2">O que devo levar para o evento?</h3>
                        <p className="text-gray-300">Recomendamos que traga um notebook para anotações e atividades práticas, além de disposição para aprender.</p>
                    </div>
                    <div className="bg-[#1A1333] p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-medium text-white mb-2">Haverá certificado de participação?</h3>
                        <p className="text-gray-300">Sim, todos os participantes receberão um certificado digital após a conclusão do evento.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative z-10 px-4 py-16 md:py-24 max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-r from-[#3B2A8C] to-[#5A3BAA] p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
                    <div className="relative z-10">
                        <div className="flex justify-center mb-8">
                            <div className="bg-transparent rounded-lg p-4 inline-flex items-center justify-center">
                                <img src={logoInfluencia} alt="Logo Influência" className="w-1/2 lg:w-1/4" />
                            </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Transforme sua presença digital agora!</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Não perca a oportunidade de aprender com o maior especialista em viralização de conteúdo do Brasil. Vagas limitadas!
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                            <div className="text-center bg-[#0F0A1F] bg-opacity-50 p-4 rounded-lg">
                                <div className="text-[#FF9E00] text-xl font-bold">10-12 de Março, 2025</div>
                                <div className="text-white text-sm">São Paulo, SP</div>
                            </div>
                            <button className="animate-pulse-slow bg-gradient-to-r from-[#FF6B00] to-[#FF9E00] text-white px-8 py-4 rounded-full hover:from-[#FF9E00] hover:to-[#FF6B00] transition-all duration-300 font-bold text-lg shadow-lg transform hover:scale-105 cursor-pointer">
                                QUERO PARTICIPAR DO INFLUÊNCIA
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 px-4 py-8 max-w-6xl mx-auto border-t border-[#3B2A8C] text-center">
                <div className="text-center text-gray-400 text-sm">
                    © 2024 Influência - Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
}

export default Influencia;

