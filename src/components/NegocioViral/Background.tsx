import React from "react";

interface BackgroundProps {
  imageUrl?: string;
  mobileImageUrl?: string;
}

const Background: React.FC<BackgroundProps> = ({
  imageUrl = "https://placehold.co/1080x1920/1a1a1a/1a1a1a",
  mobileImageUrl,
}) => {
  return (
    <div className="absolute mt-24 inset-0 z-0 h-[100vh] md:h-[90vh] lg:h-[85vh]">
      <div
        className="absolute inset-0 bg-cover bg-top hidden md:block"
        style={{ backgroundImage: `url(${imageUrl})`, opacity: 1 }}
      />
      <div
        className="absolute inset-0 bg-cover bg-top block md:hidden opacity-90 md:opacity-100"
        style={{ backgroundImage: `url(${mobileImageUrl || imageUrl})` }}
      />
    </div>
  );
};

export default Background;
