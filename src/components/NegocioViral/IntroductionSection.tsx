import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";

// Add type declaration for Vimeo if not already declared
declare global {
  interface Window {
    Vimeo?: {
      Player: any;
    };
  }
}

const IntroductionSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [videoInitialized, setVideoInitialized] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  // Set up intersection observer to detect when video is visible
  useEffect(() => {
    if (!videoContainerRef.current) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% of the video must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          // Once we've detected visibility once, we can disconnect the observer
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(videoContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handler for Vimeo API messages
  const handleVimeoMessage = (event: MessageEvent) => {
    if (!event.data || typeof event.data !== "string") return;

    try {
      const data = JSON.parse(event.data);

      // Check if this is a Vimeo player event
      if (data.event === "ready" && videoRef.current) {
        // Get the Vimeo player instance
        if (window.Vimeo) {
          playerRef.current = new window.Vimeo.Player(videoRef.current);
          setVideoInitialized(true);
        }
      }
    } catch {
      // Not a JSON message or not from Vimeo
    }
  };

  // Start playing when video becomes visible
  useEffect(() => {
    if (isVideoVisible && videoInitialized && playerRef.current) {
      playerRef.current.play().catch((error: any) => {
        console.log("Autoplay was prevented by browser:", error);
      });
    }
  }, [isVideoVisible, videoInitialized]);

  useEffect(() => {
    // Load Vimeo player script if it hasn't been loaded yet
    if (
      !document.querySelector(
        'script[src="https://player.vimeo.com/api/player.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      document.body.appendChild(script);

      // Add event listener for Vimeo API messages
      window.addEventListener("message", handleVimeoMessage);

      return () => {
        window.removeEventListener("message", handleVimeoMessage);
        const scriptElement = document.querySelector(
          'script[src="https://player.vimeo.com/api/player.js"]'
        );
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
      };
    }
  }, []);

  // Handle click on video
  const handleVideoClick = () => {
    if (playerRef.current) {
      // Turn on sound and ensure playing
      playerRef.current.setVolume(1);
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-20 right-10 text-[200px] font-bold text-green-500 transform rotate-12 opacity-5">
          $
        </div>
        <div className="absolute bottom-20 left-10 text-[150px] font-bold text-green-500 transform -rotate-12 opacity-5">
          $
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Video container for desktop only */}
          <motion.div
            className="hidden md:block w-full max-w-2xl mx-auto mb-10 relative pt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              ref={videoContainerRef}
              className="w-full rounded-xl overflow-hidden shadow-2xl shadow-green-500/20 cursor-pointer group"
              style={{ aspectRatio: "16/9" }}
              onClick={handleVideoClick}
            >
              <div
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                  background: "#000",
                }}
                className="relative"
              >
                <iframe
                  ref={videoRef}
                  src="https://player.vimeo.com/video/1071430415?h=25011df217&badge=0&autopause=0&player_id=0&app_id=58479&quality=1080p&preload=metadata"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="Copy Negocio Viral"
                ></iframe>

                {/* Play button overlay that disappears when video is playing */}
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 cursor-pointer group-hover:bg-black/30 transition-all duration-300"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isPlaying ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-green-500 h-20 w-20 rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-green-500/40"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.6)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-6 left-0 right-0 text-center"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <span className="bg-black/60 text-white text-sm font-semibold px-4 py-2 rounded-full">
                        Assista o vídeo com áudio
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute cursir -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-lg blur-xl z-0"></div>
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-lg blur-xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              Se você tem um bom produto, mas sente que as vendas não acompanham
              o seu esforço...{" "}
              <span className="text-green-400">você não está sozinho.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <motion.div
            className="bg-black/30 p-6 md:p-8 rounded-2xl border border-gray-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              A verdade sobre negócios que falham
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                A maioria dos negócios não quebra por falta de qualidade. Eles
                quebram por{" "}
                <span className="text-green-400 font-semibold">
                  falta de fluxo, clientes e caixa
                </span>
                .
              </p>
              <p>
                Você não precisa de mais tráfego. <br />
                Não precisa de seguidor. <br />E muito menos de mais teoria.
              </p>
              <p className="font-bold text-white">
                Você precisa de caixa.
                <br />E precisa disso rápido.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-green-900/20 p-6 md:p-8 rounded-2xl border border-green-800/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-green-400">Negócio Viral</span>: a solução
              prática
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Foi assim que nasceu o{" "}
                <span className="text-green-400 font-semibold">
                  Negócio Viral
                </span>
                : um método com diversas ações de marketing direto que funcionam
                em qualquer cenário — físico ou digital, serviço ou produto.
              </p>
              <p>São estratégias validadas, que já:</p>
              <ul className="space-y-3">
                {[
                  "Zeraram estoques",
                  "Triplicaram faturamentos",
                  "Tiraram negócios do buraco",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-white font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="font-bold text-white">
                Tudo isso sem gastar R$1 em tráfego.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-white mb-8">
            Não dá mais pra trabalhar duro e fechar o mês no vermelho.
            <br />
            <span className="text-green-400">
              Você precisa de ações simples, práticas e diretas que funcionam
              agora.
            </span>
          </p>

          <CtaButton
            text="QUERO VENDER TODO DIA"
            mobileText="QUERO VENDER 3X MAIS"
            size="medium"
            className="max-w-lg mx-auto"
            isPricingButton={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
