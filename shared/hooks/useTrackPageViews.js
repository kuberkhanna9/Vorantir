import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "../utils/analytics.js";

export const useTrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize analytics on mount
    initAnalytics();
  }, []);

  useEffect(() => {
    // 2. Track page views on route change
    trackPageView(location.pathname);
  }, [location.pathname]);
};
