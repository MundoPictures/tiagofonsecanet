import { useCallback } from "react";
import { useModal } from "../contexts/ModalContext";
import { useMetaPixel } from "../contexts/MetaPixelContext";

interface UseTrackedModalResult {
  openTrackedModal: (
    modalName: string,
    additionalData?: Record<string, unknown>
  ) => void;
  closeTrackedModal: (
    modalName: string,
    additionalData?: Record<string, unknown>
  ) => void;
}

/**
 * Hook to provide modal functionality with built-in tracking
 */
const useTrackedModal = (): UseTrackedModalResult => {
  const { openModal, closeModal } = useModal();
  const { trackCustomEvent } = useMetaPixel();

  // Open modal with tracking
  const openTrackedModal = useCallback(
    (modalName: string, additionalData?: Record<string, unknown>) => {
      // Track the modal opening
      trackCustomEvent("modal_open", {
        modal_name: modalName,
        ...additionalData,
      });

      // Open the modal
      openModal();
    },
    [openModal, trackCustomEvent]
  );

  // Close modal with tracking
  const closeTrackedModal = useCallback(
    (modalName: string, additionalData?: Record<string, unknown>) => {
      // Track the modal closing
      trackCustomEvent("modal_close", {
        modal_name: modalName,
        ...additionalData,
      });

      // Close the modal
      closeModal();
    },
    [closeModal, trackCustomEvent]
  );

  return {
    openTrackedModal,
    closeTrackedModal,
  };
};

export default useTrackedModal;
