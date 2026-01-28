// Analytics and Web Vitals monitoring

// Google Analytics 4 configuration
// TODO: Replace with your actual GA4 Measurement ID from Google Analytics
// Get it from: https://analytics.google.com/ -> Admin -> Property -> Data Streams
export const GA_TRACKING_ID = "G-357KZ7JTDE"; // Replace with your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  // Load Google Analytics script
  const script1 = document.createElement("script");
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script1.async = true;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Web Vitals monitoring
export const initWebVitals = async () => {
  try {
    const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import("web-vitals");

    const sendToAnalytics = (metric) => {
      trackEvent(
        metric.name,
        "Web Vitals",
        metric.id,
        Math.round(metric.value)
      );

      // Also log to console in development
      if (import.meta.env.DEV) {
        console.log(`${metric.name}: ${metric.value}`, metric);
      }
    };

    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
    // Silently fail if web-vitals can't be loaded
    console.warn("Web Vitals could not be loaded:", error);
  }
};

// Track user interactions
export const trackInteraction = (element, action) => {
  trackEvent("user_interaction", "engagement", `${element}_${action}`);
};

// Track performance metrics
export const trackPerformance = () => {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      const navigation = performance.getEntriesByType("navigation")[0];

      // Track load times
      trackEvent(
        "page_load_time",
        "performance",
        "load",
        Math.round(navigation.loadEventEnd - navigation.fetchStart)
      );
      trackEvent(
        "dom_content_loaded",
        "performance",
        "dcl",
        Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart)
      );
      trackEvent(
        "first_byte",
        "performance",
        "ttfb",
        Math.round(navigation.responseStart - navigation.fetchStart)
      );
    });
  }
};
