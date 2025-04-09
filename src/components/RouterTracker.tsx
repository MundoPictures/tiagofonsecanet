import React from "react";
import usePageViewTracker from "../hooks/usePageViewTracker";

/**
 * Component that tracks page views for router navigation
 * This is a utility component with no UI
 */
const RouterTracker: React.FC = () => {
  // Use the page view tracker hook
  usePageViewTracker();

  // This component doesn't render anything
  return null;
};

export default RouterTracker;
