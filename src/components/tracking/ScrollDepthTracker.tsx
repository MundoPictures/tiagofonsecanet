import React from "react";
import useScrollTracker from "../../hooks/useScrollTracker";

interface ScrollDepthTrackerProps {
  thresholds?: number[];
  onThresholdReached: (threshold: number) => void;
}

/**
 * Component that tracks scroll depth and fires events when thresholds are reached
 * This is a utility component with no UI
 */
const ScrollDepthTracker: React.FC<ScrollDepthTrackerProps> = ({
  thresholds = [25, 50, 75, 100],
  onThresholdReached,
}) => {
  // Initialize scroll tracking
  useScrollTracker(thresholds, onThresholdReached);

  // This component doesn't render anything
  return null;
};

export default ScrollDepthTracker;
