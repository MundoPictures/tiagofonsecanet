/**
 * Utility to preload critical images to improve performance
 * This should be used sparingly only for images that are needed immediately
 */

// Import critical images directly
import tiago2 from "../assets/negocioViral/tiago2.png";
import logo from "../assets/negocioViral/negociovirallogo.png";
import bg3 from "../assets/negocioViral/bg3.png";

// List of critical images that should be preloaded
const criticalImages = [tiago2, logo, bg3];

/**
 * Preloads critical images for faster rendering
 */
export const preloadCriticalImages = (): void => {
  // Only preload on mobile where performance is an issue
  if (window.innerWidth >= 768) return;

  criticalImages.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
};

/**
 * Optimizes image loading for specific image URLs
 * @param imageUrl URL of the image to optimize
 * @returns Optimized image URL for the current device
 */
export const getOptimizedImageUrl = (imageUrl: string): string => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // For mobile, try to load smaller images if available
    if (imageUrl.includes(".png")) {
      return imageUrl.replace(".png", "-mobile.png");
    }
    if (imageUrl.includes(".jpg")) {
      return imageUrl.replace(".jpg", "-mobile.jpg");
    }
    if (imageUrl.includes(".jpeg")) {
      return imageUrl.replace(".jpeg", "-mobile.jpeg");
    }
  }

  return imageUrl;
};

export default preloadCriticalImages;
