import React from "react";

interface TrackedButtonProps {
  buttonName: string;
  buttonLocation: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onTrack?: (
    buttonName: string,
    buttonLocation: string,
    additionalData?: Record<string, unknown>
  ) => void;
  additionalTrackingData?: Record<string, unknown>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

/**
 * Button component that tracks clicks with Meta Pixel
 */
const TrackedButton: React.FC<TrackedButtonProps> = ({
  buttonName,
  buttonLocation,
  className = "",
  onClick,
  onTrack,
  additionalTrackingData,
  children,
  disabled = false,
  type = "button",
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the button click
    if (onTrack) {
      onTrack(buttonName, buttonLocation, additionalTrackingData);
    }

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TrackedButton;
