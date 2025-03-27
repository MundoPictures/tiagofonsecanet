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
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center block md:hidden opacity-20 md:opacity-100"
        style={{ backgroundImage: `url(${mobileImageUrl || imageUrl})` }}
      />
    </div>
  );
};

export default Background;
