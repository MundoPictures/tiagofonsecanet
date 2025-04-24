/**
 * Utility functions for handling URL parameters
 */

/**
 * Get the source parameter from the URL
 * @returns The source parameter value or null if not present
 */
export const getSourceParam = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("source");
};

/**
 * Get the checkout URL based on the source parameter
 * @param defaultUrl Default URL to use if no source is found
 * @returns The appropriate checkout URL based on source parameter
 */
export const getCheckoutUrl = (
  defaultUrl: string = "https://go.tiagofonseca.net/pay/lote-01-negocio-viral"
): string => {
  const source = getSourceParam();

  // Map of source to checkout URLs
  const sourceUrls: Record<string, string> = {
    bio: "https://go.tiagofonseca.net/pay/lote-01-negocio-viral-bio",
    reel: "https://go.tiagofonseca.net/pay/lote-01-negocio-viral-reels",
    yt: "https://go.tiagofonseca.net/pay/lote-01-negocio-viral-youtube",
    ads: "https://go.tiagofonseca.net/pay/lote-01-negocio-viral-tpg",
    sts: "https://go.tiagofonseca.net/pay/lote-01-negocio-viral-sts",
    YouTubecaptura:
      "https://go.tiagofonseca.net/pay/lote-01-negocio-viral-youtube",
  };

  // Return the URL for the source or the default URL if source is not found
  return source && sourceUrls[source] ? sourceUrls[source] : defaultUrl;
};
