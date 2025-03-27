import React from "react";
import CtaButton from "./CtaButton";

interface CallToActionProps {
  text: string;
  onClick?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
  text = "QUERO APLICAR A PRIMEIRA AÇÃO AINDA HOJE →",
  onClick,
}) => {
  return <CtaButton text={text} onClick={onClick} />;
};

export default CallToAction;
