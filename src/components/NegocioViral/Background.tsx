import React, { useState, useEffect } from "react";
import tiagoImage from "../../assets/negocioViral/tiago.png";
import tiago2 from "../../assets/negocioViral/tiago2.png";

interface BackgroundProps {
  imageUrl?: string;
  mobileImageUrl?: string;
}

const Background: React.FC<BackgroundProps> = ({
  imageUrl = "https://placehold.co/1080x1920/1a1a1a/1a1a1a",
  mobileImageUrl,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading for entrance animation
    setIsLoaded(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-[100vh] md:h-[100vh] lg:h-[100vh] overflow-hidden">
      {/* Grid overlay pattern - provides the matrix/digital look */}
      <div className="absolute inset-0 bg-[#131313] bg-opacity-95 z-0">
        <div className="absolute inset-0 opacity-40"></div>
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block transition-opacity duration-700"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: isLoaded ? 0.7 : 0,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center block md:hidden transition-opacity duration-700"
        style={{
          backgroundImage: `url(${mobileImageUrl || imageUrl})`,
          opacity: isLoaded ? 0.7 : 0,
        }}
      />

      {/* Green glow effect for the matrix/digital theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent opacity-50 pointer-events-none" />

      {/* Dark gradient overlay to improve text contrast - stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/80 md:via-black/60 md:to-transparent pointer-events-none" />

      {/* Tiago image container - different positioning for mobile/desktop */}
      <div
        className={`absolute bottom-0 w-[75%] md:w-[50%] lg:w-[80%] transition-all duration-1000 ease-in-out z-10 
                   left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-0 ${
                     isLoaded ? "translate-y-0" : "translate-y-[10%]"
                   }`}
        style={{
          opacity: isLoaded ? 1 : 0,
        }}
      >
        {/* Mobile-specific positioning container */}
        <div className="relative block md:hidden">
          {/* Subtle glow behind Tiago */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-green-500/20 via-green-400/10 to-transparent rounded-full filter blur-xl opacity-50 scale-110" />

          <img
            src={tiago2}
            alt="Tiago"
            className="w-full h-auto object-contain drop-shadow-2xl"
            onLoad={() => setIsLoaded(true)}
            style={{
              filter: "drop-shadow(0 0 12px rgba(74, 222, 128, 0.4))",
              transform: "scale(1.2) translateY(5%)",
            }}
          />
        </div>

        {/* Desktop positioning container */}
        <div className="relative hidden md:block">
          {/* Subtle glow behind Tiago */}
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-green-500/20 via-green-400/10 to-transparent rounded-full filter blur-xl opacity-50 transform scale-110" />

          <img
            src={tiagoImage}
            alt="Tiago"
            className="w-full h-auto object-contain drop-shadow-2xl"
            onLoad={() => setIsLoaded(true)}
            style={{ filter: "drop-shadow(0 0 12px rgba(74, 222, 128, 0.4))" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
