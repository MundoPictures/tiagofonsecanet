import React, { useState, useEffect, useRef } from "react";
import { motion } from "../../../src/utils/nonAnimatedComponents";
import CtaButton from "./CtaButton";
import tiago2 from "../../assets/negocioViral/tiago2.png";
import { useMetaPixel } from "../../contexts/MetaPixelContext";
import useNegocioViralTracking, {
  NegocioViralEvents,
} from "../../utils/negocioViralTracker";

// Add type declaration for Vimeo
declare global {
  interface Window {
    Vimeo?: {
      Player: any;
    };
  }
}

interface MainContentProps {
  onCtaClick?: (buttonName: string) => void;
  isMobile?: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  onCtaClick,
  isMobile = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const vimeoScriptLoaded = useRef(false);
  const videoProgressTracked = useRef<{ [key: number]: boolean }>({
    10: false,
    25: false,
    50: false,
    75: false,
    100: false,
  });
  const videoStartTracked = useRef(false);

  // Setup Meta Pixel tracking
  const { trackStandardEvent } = useMetaPixel();
  const tracking = useNegocioViralTracking();

  // Video tracking function
  const setupVideoTracking = (player: any) => {
    if (!player) return;

    // Track video start
    player.on("play", () => {
      if (!videoStartTracked.current) {
        tracking.trackCustomEvent(NegocioViralEvents.VIDEO_START, {
          video_id: "hero_video",
          video_name: "Negocio Viral Hero",
          video_position: "hero",
          page: "negocio_viral",
        });
        videoStartTracked.current = true;
      }
    });

    // Track video progress
    player.on("timeupdate", (data: any) => {
      const percent = Math.floor(data.percent * 100);

      // Check for 10% progress
      if (percent >= 10 && !videoProgressTracked.current[10]) {
        tracking.trackCustomEvent(NegocioViralEvents.VIDEO_PROGRESS, {
          video_id: "hero_video",
          video_name: "Negocio Viral Hero",
          video_position: "hero",
          percent: 10,
          page: "negocio_viral",
        });
        videoProgressTracked.current[10] = true;
      }

      // Check for 25% progress
      if (percent >= 25 && !videoProgressTracked.current[25]) {
        tracking.trackCustomEvent(NegocioViralEvents.VIDEO_PROGRESS, {
          video_id: "hero_video",
          video_name: "Negocio Viral Hero",
          video_position: "hero",
          percent: 25,
          page: "negocio_viral",
        });
        videoProgressTracked.current[25] = true;
      }

      // Check for 50% progress
      if (percent >= 50 && !videoProgressTracked.current[50]) {
        tracking.trackCustomEvent(NegocioViralEvents.VIDEO_PROGRESS, {
          video_id: "hero_video",
          video_name: "Negocio Viral Hero",
          video_position: "hero",
          percent: 50,
          page: "negocio_viral",
        });
        videoProgressTracked.current[50] = true;
      }

      // Check for 75% progress
      if (percent >= 75 && !videoProgressTracked.current[75]) {
        tracking.trackCustomEvent(NegocioViralEvents.VIDEO_PROGRESS, {
          video_id: "hero_video",
          video_name: "Negocio Viral Hero",
          video_position: "hero",
          percent: 75,
          page: "negocio_viral",
        });
        videoProgressTracked.current[75] = true;
      }
    });

    // Track video complete
    player.on("ended", () => {
      if (!videoProgressTracked.current[100]) {
        tracking.trackCustomEvent(NegocioViralEvents.VIDEO_COMPLETE, {
          video_id: "hero_video",
          video_name: "Negocio Viral Hero",
          video_position: "hero",
          percent: 100,
          page: "negocio_viral",
        });

        // Also track standard Meta Pixel event for video complete
        trackStandardEvent("ViewContent", {
          content_name: "Negocio Viral Hero Video Complete",
          content_category: "video",
          content_ids: ["hero_video_complete"],
          page: "negocio_viral",
        });

        videoProgressTracked.current[100] = true;
      }
    });
  };

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
          setupVideoTracking(playerRef.current);
        }
      }
    } catch {
      // Not a JSON message or not from Vimeo
    }
  };

  // Load Vimeo script when needed
  const loadVimeoScript = () => {
    if (vimeoScriptLoaded.current) return;

    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    script.onload = () => {
      vimeoScriptLoaded.current = true;
      // When script is loaded, if video is already loaded, initialize the player
      if (videoRef.current && window.Vimeo) {
        playerRef.current = new window.Vimeo.Player(videoRef.current);
        setupVideoTracking(playerRef.current);
      }
    };
    document.body.appendChild(script);

    // Add event listener for Vimeo API messages
    window.addEventListener("message", handleVimeoMessage);
  };

  // For desktop, load Vimeo immediately
  // For mobile, we'll load it on demand when user interacts
  useEffect(() => {
    if (!isMobile) {
      loadVimeoScript();
    }

    return () => {
      window.removeEventListener("message", handleVimeoMessage);
    };
  }, [isMobile]);

  // Handle click on video
  const handleVideoClick = () => {
    // Track video click event
    tracking.trackCustomEvent(NegocioViralEvents.VIDEO_CLICK, {
      video_id: "hero_video",
      video_name: "Negocio Viral Hero",
      video_position: "hero",
      page: "negocio_viral",
    });

    // If Vimeo script isn't loaded yet, load it
    if (!vimeoScriptLoaded.current) {
      loadVimeoScript();
    }

    // If player exists, play the video
    if (playerRef.current) {
      playerRef.current.setVolume(1);
      playerRef.current.play();
      setIsPlaying(true);
    }
    // If player doesn't exist yet but Vimeo is loaded, create the player
    else if (window.Vimeo && videoRef.current) {
      playerRef.current = new window.Vimeo.Player(videoRef.current);
      setupVideoTracking(playerRef.current);
      playerRef.current.setVolume(1);
      playerRef.current.play();
      setIsPlaying(true);
    }
    // If neither player nor Vimeo exists, the script is still loading
    // The onload handler will initialize the player when ready
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants - simplified for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.15,
        delayChildren: isMobile ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 20, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: isMobile ? 0.4 : 0.8 },
    },
  };

  return (
    <div className="relative flex flex-col justify-center py-0 md:py-2 z-10 max-w-full md:max-w-[70%] lg:max-w-[55%] px-4 md:px-0">
      {/* Main text content - centered on mobile, left-aligned on desktop */}
      <motion.div
        className="flex flex-col items-center md:items-start justify-center w-full text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6 leading-tight"
          variants={itemVariants}
        >
          Venda <span className="text-green-400">3x Mais</span> em 7 Dias
          Aplicando as Ações de Marketing Que Geram Caixa Imediato
          <span className="text-gray-200 mt-3 md:mt-3 text-[11px] sm:text-sm md:text-2xl flex justify-center gap-3 md:gap-4 font-semibold">
            <span className="bg-green-800/40 p-1 text-white">SEM ANÚNCIOS</span>
            <span className="bg-green-800/40 p-1 text-white">
              SEM AUDIÊNCIA
            </span>
            <span className="bg-green-800/40 p-1 text-white">
              SEM ENROLAÇÃO
            </span>
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-200 text-base md:text-base mb-4 md:mb-8 leading-relaxed w-full"
          variants={itemVariants}
        >
          <span className="italic">
            Mesmo que você esteja começando do zero ou vendendo pouco hoje.
          </span>
          <span className="block mt-3 md:mt-4 font-medium text-green-300">
            Estratégias aplicáveis em qualquer negócio – com potencial de gerar
            vendas nas próximas 24h, mesmo sem experiência.
          </span>
        </motion.p>

        <motion.div variants={itemVariants} className="w-full md:w-auto">
          <CtaButton
            text="QUERO VIRALIZAR MEU NEGÓCIO"
            mobileText="QUERO VIRALIZAR MEU NEGÓCIO"
            size="medium"
            withShine={true}
            withArrow={true}
            withPulse={!isMobile} // Disable pulse animation on mobile
            isPricingButton={false}
            className="shadow-xl shadow-green-500/20 hover:shadow-green-500/30 text-base md:text-base w-full md:w-auto"
            onClick={() =>
              onCtaClick && onCtaClick("QUERO VIRALIZAR MEU NEGÓCIO")
            }
          />
        </motion.div>

        <motion.div
          className="mt-4 md:mt-5 flex items-center justify-center md:justify-start space-x-5 md:space-x-5 w-full"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 md:w-5 md:h-5 text-green-500 mr-2 md:mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-medium text-white">
              Resultados em 7 dias
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 md:w-5 md:h-5 text-green-500 mr-2 md:mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-medium text-white">
              Garantia de 7 dias
            </span>
          </div>
        </motion.div>

        {/* Mobile image - only visible on mobile, placed below the button */}
        {isMobile && (
          <motion.div
            className="mt-8 block md:hidden w-full"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Mobile-specific image with glow effect and video overlay */}
            <div className="relative w-[95%] mx-auto">
              {/* Enhanced glow behind Tiago */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-green-500/30 via-green-400/15 to-transparent rounded-full filter blur-xl opacity-70 scale-110" />

              <img
                src={tiago2}
                alt="Tiago"
                className="w-full h-auto object-contain drop-shadow-2xl"
                onLoad={() => setIsLoaded(true)}
                style={{
                  filter: "drop-shadow(0 0 15px rgba(74, 222, 128, 0.5))",
                  transform: "scale(0.95)",
                  maxHeight: "min(70vh, 500px)",
                }}
                width="400"
                height="600"
                loading="eager"
              />

              {/* Video overlay container positioned on top of the image, shifted down 20px */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-24">
                <div
                  ref={videoContainerRef}
                  className="w-full h-full max-w-[100%] max-h-[75%] rounded-xl overflow-hidden shadow-2xl mt-8"
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
                      src="https://player.vimeo.com/video/1074076463?h=6f1cf79bbc&badge=0&autopause=0&player_id=0&app_id=58479&quality=1080p&preload=metadata"
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
                        className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 cursor-pointer"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isPlaying ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="bg-green-500 h-14 w-14 rounded-full flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-8 h-8 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </motion.div>
                        <div className="absolute bottom-3 left-0 right-0 text-center text-white text-sm font-semibold">
                          <span className="bg-black/50 px-3 py-1 rounded-full">
                            Clique para assistir com áudio
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MainContent;
