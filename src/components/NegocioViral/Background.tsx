import React from "react";
import tiagoImage from "../../assets/negocioViral/tiago.png";

interface BackgroundProps {
  imageUrl?: string;
  mobileImageUrl?: string;
  isMobile?: boolean;
}

const Background: React.FC<BackgroundProps> = ({
  imageUrl = "https://placehold.co/1080x1920/1a1a1a/1a1a1a",
  mobileImageUrl,
  isMobile = false,
}) => {
  return (
    <div className="absolute inset-0 z-0 h-auto min-h-[100vh] md:h-[100vh] lg:h-[100vh] overflow-hidden">
      {/* Grid overlay pattern - provides the matrix/digital look */}
      <div className="absolute inset-0 bg-[#131313] bg-opacity-95 z-0">
        <div className="absolute inset-0 opacity-40"></div>
      </div>

      {/* Background image - only load what's needed for current device */}
      {!isMobile && (
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: 0.7,
          }}
        />
      )}
      {isMobile && (
        <div
          className="absolute inset-0 bg-cover bg-center block md:hidden"
          style={{
            backgroundImage: `url(${mobileImageUrl || imageUrl})`,
            opacity: 0.7,
          }}
        />
      )}

      {/* Green glow effect for the matrix/digital theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent opacity-50 pointer-events-none" />

      {/* Dark gradient overlay to improve text contrast - stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/80 md:via-black/60 md:to-transparent pointer-events-none" />

      {/* Desktop image only - Mobile will be placed in MainContent */}
      {!isMobile && (
        <div className="absolute bottom-0 w-[75%] md:w-[50%] lg:w-[80%] z-10 hidden md:block md:right-0">
          {/* Desktop positioning container */}
          <div className="relative">
            {/* Subtle glow behind Tiago */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-green-500/20 via-green-400/10 to-transparent rounded-full filter blur-xl opacity-50 transform scale-110" />

            <img
              src={tiagoImage}
              alt="Tiago"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 12px rgba(74, 222, 128, 0.4))",
              }}
              loading="eager"
              width="600"
              height="900"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Background;
