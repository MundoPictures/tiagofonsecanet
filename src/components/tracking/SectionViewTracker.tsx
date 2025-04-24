import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface SectionViewTrackerProps {
  sectionName: string;
  threshold?: number;
  triggerOnce?: boolean;
  onVisible?: (sectionName: string) => void;
  children: React.ReactNode;
}

/**
 * Component that tracks when a section becomes visible in the viewport
 * and triggers a callback
 */
const SectionViewTracker: React.FC<SectionViewTrackerProps> = ({
  sectionName,
  threshold = 0.3,
  triggerOnce = true,
  onVisible,
  children,
}) => {
  const hasTracked = useRef(false);

  // Use intersection observer to detect when the element is in view
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView && !hasTracked.current && onVisible) {
      onVisible(sectionName);
      hasTracked.current = triggerOnce;
    }
  }, [inView, sectionName, onVisible, triggerOnce]);

  return (
    <div ref={ref} className="section-tracker">
      {children}
    </div>
  );
};

export default SectionViewTracker;
