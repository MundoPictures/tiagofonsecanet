import React from "react";
import CtaButton from "./CtaButton";
import RandomPhrase from "./RandomPhrase";

interface CtaButtonWithPhraseProps {
  text: string;
  mobileText?: string;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
  withArrow?: boolean;
  withShine?: boolean;
  withPulse?: boolean;
  isPricingButton?: boolean;
  id?: string;
  isViralB?: boolean;
  phraseClassName?: string;
  showPhrase?: boolean;
}

const CtaButtonWithPhrase: React.FC<CtaButtonWithPhraseProps> = ({
  text,
  mobileText,
  onClick,
  className = "",
  size = "medium",
  withArrow = true,
  withShine = true,
  withPulse = true,
  isPricingButton = false,
  isViralB = false,
  id,
  phraseClassName = "",
  showPhrase = true,
}) => {
  return (
    <div className="flex flex-col items-center">
      {showPhrase && <RandomPhrase className={phraseClassName} />}
      <CtaButton
        text={text}
        mobileText={mobileText}
        onClick={onClick}
        className={className}
        size={size}
        withArrow={withArrow}
        withShine={withShine}
        withPulse={withPulse}
        isPricingButton={isPricingButton}
        isViralB={isViralB}
        id={id}
      />
    </div>
  );
};

export default CtaButtonWithPhrase;
