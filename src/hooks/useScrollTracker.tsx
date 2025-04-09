import { useEffect, useRef, useCallback } from "react";

type ScrollCallback = (percentage: number) => void;

/**
 * Hook to track scroll depth and trigger callbacks at specific thresholds
 * @param thresholds Array of percentage thresholds to track (0-100)
 * @param callback Function to call when a threshold is crossed
 */
const useScrollTracker = (
  thresholds: number[] = [25, 50, 75, 100],
  callback: ScrollCallback
): void => {
  // Use a ref instead of state to avoid re-renders
  const scrolledThresholds = useRef<{ [key: number]: boolean }>({});
  const ticking = useRef(false);

  // Initialize scrolled thresholds
  useEffect(() => {
    thresholds.forEach((threshold) => {
      scrolledThresholds.current[threshold] = false;
    });
  }, [thresholds]);

  // Memoize the scroll handler to avoid recreation on each render
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        const scrollTop = window.scrollY;

        // Calculate how far the user has scrolled as a percentage
        const scrollPercentage = Math.floor(
          (scrollTop / (documentHeight - windowHeight)) * 100
        );

        // Check each threshold
        thresholds.forEach((threshold) => {
          if (
            !scrolledThresholds.current[threshold] &&
            scrollPercentage >= threshold
          ) {
            // Mark this threshold as scrolled
            scrolledThresholds.current[threshold] = true;

            // Call the callback with the threshold that was reached
            callback(threshold);
          }
        });

        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [thresholds, callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position (important for refreshed pages)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
};

export default useScrollTracker;
