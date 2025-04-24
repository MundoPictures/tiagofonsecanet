import React from "react";
import CtaButton from "./CtaButton";

interface CallToActionProps {
  text: string;
  mobileText?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  isPricingButton?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
  text = "QUERO APLICAR A PRIMEIRA AÇÃO AINDA HOJE",
  mobileText = "APLICAR AGORA",
  size = "medium",
  className = "",
  isPricingButton = false,
}) => {
  return (
    <div className="w-full px-4 sm:px-0 sm:w-auto">
      <CtaButton
        text={text}
        mobileText={mobileText}
        size={size}
        className={`w-full sm:w-auto ${className}`}
        withShine={true}
        withPulse={true}
        isPricingButton={isPricingButton}
      />
    </div>
  );
};

export default CallToAction;
