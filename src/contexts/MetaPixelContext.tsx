import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";

// Define fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Standard Meta Pixel event types
export type StandardEvent =
  | "AddPaymentInfo"
  | "AddToCart"
  | "AddToWishlist"
  | "CompleteRegistration"
  | "Contact"
  | "CustomizeProduct"
  | "Donate"
  | "FindLocation"
  | "InitiateCheckout"
  | "Lead"
  | "PageView"
  | "Purchase"
  | "Schedule"
  | "Search"
  | "StartTrial"
  | "SubmitApplication"
  | "Subscribe"
  | "ViewContent";

type MetaPixelContextType = {
  trackEvent: (
    event: string | StandardEvent,
    data?: Record<string, unknown>
  ) => void;
  trackCustomEvent: (eventName: string, data?: Record<string, unknown>) => void;
  trackStandardEvent: (
    event: StandardEvent,
    data?: Record<string, unknown>
  ) => void;
};

const PIXEL_ID = "234115115494557";

// Need to store the last tracked events to prevent duplicates
interface EventCache {
  [key: string]: {
    timestamp: number;
    data: string;
  };
}

// Track event frequency - prevent duplicate events within this time window (ms)
const EVENT_THROTTLE_MS = 1000;

const MetaPixelContext = createContext<MetaPixelContextType>({
  trackEvent: () => {
    // Default empty implementation
  },
  trackCustomEvent: () => {
    // Default empty implementation
  },
  trackStandardEvent: () => {
    // Default empty implementation
  },
});

export const MetaPixelProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Store recently tracked events to prevent duplicates
  const recentEvents = useRef<EventCache>({});

  useEffect(() => {
    // Load the Facebook Pixel script
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView', {}, {eventID: 'page-view-${Date.now()}'});
    `;
    document.head.appendChild(script);

    // Add the noscript pixel for users without JavaScript
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    return () => {
      // Cleanup if component unmounts
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, []);

  // Helper function to check if we've tracked this event recently
  const isRecentDuplicate = useCallback(
    (eventName: string, data?: Record<string, unknown>) => {
      const now = Date.now();
      const eventKey = `${eventName}`;
      const dataString = data ? JSON.stringify(data) : "";

      // Check if this exact event + data was fired recently
      const recentEvent = recentEvents.current[eventKey];
      if (recentEvent) {
        const timeSinceLastEvent = now - recentEvent.timestamp;
        const isSameData = recentEvent.data === dataString;

        // If it's the same event with same data within throttle window, it's a duplicate
        if (timeSinceLastEvent < EVENT_THROTTLE_MS && isSameData) {
          return true;
        }
      }

      // Store this event as recently tracked
      recentEvents.current[eventKey] = {
        timestamp: now,
        data: dataString,
      };

      return false;
    },
    []
  );

  // Function to track custom events with duplicate prevention
  const trackCustomEvent = useCallback(
    (eventName: string, data?: Record<string, unknown>) => {
      if (window.fbq) {
        // Skip if this is a duplicate event fired too quickly
        if (isRecentDuplicate(eventName, data)) {
          return;
        }

        // Generate a unique event ID
        const eventID = `${eventName}-${Date.now()}`;

        // console.log(`[Meta Pixel] Tracking custom event: ${eventName}`, data);
        window.fbq("trackCustom", eventName, data || {}, {
          eventID,
        });
      }
    },
    [isRecentDuplicate]
  );

  // Function to track standard events with duplicate prevention
  const trackStandardEvent = useCallback(
    (event: StandardEvent, data?: Record<string, unknown>) => {
      if (window.fbq) {
        // Skip if this is a duplicate event fired too quickly
        if (isRecentDuplicate(event, data)) {
          return;
        }

        // Generate a unique event ID
        const eventID = `${event}-${Date.now()}`;

        // console.log(`[Meta Pixel] Tracking standard event: ${event}`, data);
        window.fbq("track", event, data || {}, {
          eventID,
        });
      }
    },
    [isRecentDuplicate]
  );

  // General track function (backward compatibility)
  const trackEvent = useCallback(
    (event: string | StandardEvent, data?: Record<string, unknown>) => {
      if (window.fbq) {
        // Skip if this is a duplicate event fired too quickly
        if (isRecentDuplicate(event as string, data)) {
          return;
        }

        // Generate a unique event ID
        const eventID = `${event}-${Date.now()}`;

        // Determine if this is a standard event or custom event
        const isStandardEvent = [
          "AddPaymentInfo",
          "AddToCart",
          "AddToWishlist",
          "CompleteRegistration",
          "Contact",
          "CustomizeProduct",
          "Donate",
          "FindLocation",
          "InitiateCheckout",
          "Lead",
          "PageView",
          "Purchase",
          "Schedule",
          "Search",
          "StartTrial",
          "SubmitApplication",
          "Subscribe",
          "ViewContent",
        ].includes(event);

        // Call the appropriate tracking method
        if (isStandardEvent) {
          window.fbq("track", event, data || {}, {
            eventID,
          });
        } else {
          window.fbq("trackCustom", event, data || {}, {
            eventID,
          });
        }
      }
    },
    [isRecentDuplicate]
  );

  return (
    <MetaPixelContext.Provider
      value={{ trackEvent, trackCustomEvent, trackStandardEvent }}
    >
      {children}
    </MetaPixelContext.Provider>
  );
};

// Hook to use the Meta Pixel context
export const useMetaPixel = (): MetaPixelContextType => {
  return useContext(MetaPixelContext);
};

export default MetaPixelProvider;
