import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { motion } from "../../../src/utils/nonAnimatedComponents";
import React from "react";
import { useMetaPixel } from "../../contexts/MetaPixelContext";
import useNegocioViralTracking, {
  NegocioViralEvents,
} from "../../utils/negocioViralTracker";

// Add type declaration for Vimeo
declare global {
  interface Window {
    Vimeo?: {
      Player: any;
    };
  }
}

// Video testimonials data
const videoTestimonials = [
  {
    id: 1,
    videoId: "1073343922",
    hash: "8217ef7108",
  },
  {
    id: 2,
    videoId: "1073343787",
    hash: "0cb71e042f",
  },
  {
    id: 3,
    videoId: "1073344227",
    hash: "1009cf7a15",
  },
  {
    id: 4,
    videoId: "1074079422",
    hash: "11588a0075",
  },
  {
    id: 5,
    videoId: "1074079355",
    hash: "2511d46643",
  },
  {
    id: 6,
    videoId: "1074079477",
    hash: "fbd38b1106",
  },
];

interface TestimonialsSectionProps {
  onTestimonialInteraction?: (testimonialId: string) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onTestimonialInteraction,
}) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLIFrameElement | null>>([]);
  const playerRefs = useRef<any[]>([]);
  const [vimeoLoaded, setVimeoLoaded] = useState(false);
  const videoStartTracked = useRef<{ [key: number]: boolean }>({});

  // Setup tracking
  const tracking = useNegocioViralTracking();
  const { trackStandardEvent } = useMetaPixel();

  // Load Vimeo player script on mount
  useEffect(() => {
    // Load Vimeo player script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    script.onload = () => setVimeoLoaded(true);
    document.body.appendChild(script);

    // Clean up
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Initialize players after script loads
  useEffect(() => {
    if (!vimeoLoaded) return;

    const Vimeo = window.Vimeo;
    if (!Vimeo) return;

    // Initialize players when the Vimeo script has loaded
    videoRefs.current.forEach((iframe, index) => {
      if (iframe) {
        playerRefs.current[index] = new Vimeo.Player(iframe);

        // Add event listener for play event
        const player = playerRefs.current[index];
        const testimonial = videoTestimonials[index];

        if (player) {
          player.on("play", () => {
            const videoId = testimonial.id;
            // Track video start if not already tracked for this video
            if (!videoStartTracked.current[videoId]) {
              trackTestimonialStart(videoId);
              videoStartTracked.current[videoId] = true;
            }
          });
        }
      }
    });

    // Clean up
    return () => {
      playerRefs.current.forEach((player) => {
        if (player && typeof player.destroy === "function") {
          player.destroy();
        }
      });
    };
  }, [vimeoLoaded]);

  // Track when a testimonial video starts playing
  const trackTestimonialStart = (videoId: number) => {
    tracking.trackCustomEvent(NegocioViralEvents.VIDEO_START, {
      video_id: `testimonial_${videoId}`,
      video_name: `Testimonial ${videoId}`,
      video_position: "testimonials_section",
      video_type: "testimonial",
      page: "negocio_viral",
    });

    // Also track standard ViewContent event
    trackStandardEvent("ViewContent", {
      content_name: `Testimonial Video ${videoId}`,
      content_category: "video_testimonial",
      content_ids: [`testimonial_${videoId}`],
      page: "negocio_viral",
    });
  };

  const handleVideoClick = (videoId: number) => {
    // Track testimonial click event
    tracking.trackCustomEvent(NegocioViralEvents.VIDEO_CLICK, {
      video_id: `testimonial_${videoId}`,
      video_name: `Testimonial ${videoId}`,
      video_position: "testimonials_section",
      video_type: "testimonial",
      page: "negocio_viral",
    });

    if (playingVideo === videoId) {
      // If clicking the same video that's playing, pause it
      const index = videoTestimonials.findIndex((v) => v.id === videoId);
      if (playerRefs.current[index]) {
        playerRefs.current[index].pause();
      }
      setPlayingVideo(null);
    } else {
      // Pause any currently playing video
      if (playingVideo !== null) {
        const prevIndex = videoTestimonials.findIndex(
          (v) => v.id === playingVideo
        );
        if (playerRefs.current[prevIndex]) {
          playerRefs.current[prevIndex].pause();
        }
      }

      // Play the new video
      const index = videoTestimonials.findIndex((v) => v.id === videoId);
      if (playerRefs.current[index]) {
        playerRefs.current[index].play();
      }
      setPlayingVideo(videoId);
    }
  };

  // Ref callback function that properly sets the iframe ref
  const setVideoRef = (index: number) => (el: HTMLIFrameElement | null) => {
    videoRefs.current[index] = el;
  };

  // Add tracking to testimonial click/interaction
  const handleTestimonialInteraction = (testimonialId: string) => {
    if (onTestimonialInteraction) {
      onTestimonialInteraction(testimonialId);
    }
    // Your existing testimonial interaction logic
  };

  return (
    <div
      id="depoimentos"
      className="bg-[#131313] w-full py-20 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Background patterns with subtle blur effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-green-500 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500/20 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-500 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
          <div className="mb-3 inline-flex items-center px-4 py-1 bg-green-900/20 rounded-full border border-green-500/20">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-green-400 text-sm font-semibold">
              DEPOIMENTOS REAIS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados <span className="text-green-400">Comprovados</span>
          </h2>
        </div>

        {/* Video testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: video.id * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Card with video */}
              <div className="rounded-2xl overflow-hidden bg-black/40 border border-green-500/10 shadow-xl">
                {/* Video container */}
                <div
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => {
                    handleVideoClick(video.id);
                    handleTestimonialInteraction(`testimonial_${video.id}`);
                  }}
                >
                  <div
                    style={{
                      padding: "56.25% 0 0 0",
                      position: "relative",
                      background: "#000",
                    }}
                  >
                    <iframe
                      ref={setVideoRef(index)}
                      src={`https://player.vimeo.com/video/${video.videoId}?h=${video.hash}&badge=0&autopause=0&player_id=0&app_id=58479&quality=1080p&preload=metadata&controls=0&transparent=1`}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      title={`Testimonial video ${video.id}`}
                    ></iframe>

                    {/* Clean play button overlay */}
                    {playingVideo !== video.id && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-t from-black/50 to-black/20 backdrop-blur-[1px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Clean centered play button */}
                        <motion.div
                          className="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-green-500/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-8 h-8 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
