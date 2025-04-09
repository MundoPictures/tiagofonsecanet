import React, { createContext, useContext, useEffect } from "react";

// Define fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

type MetaPixelContextType = {
  trackEvent: (event: string, data?: Record<string, unknown>) => void;
};

const PIXEL_ID = "234115115494557";

const MetaPixelContext = createContext<MetaPixelContextType>({
  trackEvent: () => {
    // Default empty implementation
  },
});

export const MetaPixelProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
      fbq('track', 'PageView');
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

  // Function to track custom events
  const trackEvent = (event: string, data?: Record<string, unknown>) => {
    if (window.fbq) {
      window.fbq("track", event, data);
    }
  };

  return (
    <MetaPixelContext.Provider value={{ trackEvent }}>
      {children}
    </MetaPixelContext.Provider>
  );
};

// Hook to use the Meta Pixel context
export const useMetaPixel = (): MetaPixelContextType => {
  return useContext(MetaPixelContext);
};

export default MetaPixelProvider;
