import React, { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "../components/NegocioViral/ContactModal";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  scrollToPricing: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToPricing = () => {
    // Find the main pricing display element
    const mainPricingDisplay = document.getElementById("main-pricing-display");
    if (mainPricingDisplay) {
      // Calculate position with an offset to show more context
      const yOffset = -100; // 100px offset to show more content above
      const y =
        mainPricingDisplay.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      // Fallback to the pricing section if the main display isn't found
      const pricingSection = document.getElementById("pricing-section");
      if (pricingSection) {
        pricingSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, scrollToPricing }}>
      {children}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export default ModalContext;
