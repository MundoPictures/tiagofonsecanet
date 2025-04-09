import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useMetaPixel } from "../contexts/MetaPixelContext";

/**
 * Hook to track page views when navigating between routes
 */
const usePageViewTracker = (): void => {
  const location = useLocation();
  const { trackEvent } = useMetaPixel();
  const prevPathRef = useRef<string>("");

  useEffect(() => {
    // Only track if the path changed to avoid duplicate events
    if (prevPathRef.current !== location.pathname) {
      trackEvent("PageView");

      // Optionally track with additional data about the page
      // trackEvent('PageView', {
      //   path: location.pathname,
      //   search: location.search
      // });

      prevPathRef.current = location.pathname;
    }
  }, [location, trackEvent]);
};

export default usePageViewTracker;
