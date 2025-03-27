import React from "react";

interface BackgroundProps {
  imageUrl?: string;
}

const Background: React.FC<BackgroundProps> = ({
  imageUrl = "https://placehold.co/1080x1920/1a1a1a/1a1a1a",
}) => {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};

export default Background;
