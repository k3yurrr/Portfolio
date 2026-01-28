// Performance monitoring dashboard for development
export const performanceMonitor = {
  // Track performance metrics
  trackMetrics: () => {
    if (typeof window === "undefined" || !window.performance) return;

    const metrics = {
      // Navigation timing
      domContentLoaded: 0,
      loadComplete: 0,
      firstByte: 0,

      // Resource counts
      totalResources: 0,
      imageResources: 0,
      scriptResources: 0,
      styleResources: 0,
    };

    // Get navigation timing
    const navigation = performance.getEntriesByType("navigation")[0];
    if (navigation) {
      metrics.domContentLoaded = Math.round(
        navigation.domContentLoadedEventEnd - navigation.fetchStart
      );
      metrics.loadComplete = Math.round(
        navigation.loadEventEnd - navigation.fetchStart
      );
      metrics.firstByte = Math.round(
        navigation.responseStart - navigation.fetchStart
      );
    }

    // Get resource counts
    const resources = performance.getEntriesByType("resource");
    metrics.totalResources = resources.length;
    metrics.imageResources = resources.filter(
      (r) => r.initiatorType === "img"
    ).length;
    metrics.scriptResources = resources.filter(
      (r) => r.initiatorType === "script"
    ).length;
    metrics.styleResources = resources.filter(
      (r) => r.initiatorType === "link" && r.name.includes(".css")
    ).length;

    return metrics;
  },

  // Log performance in development
  logPerformance: () => {
    if (!import.meta.env.DEV) return;

    window.addEventListener("load", () => {
      setTimeout(() => {
        const metrics = performanceMonitor.trackMetrics();
        console.group("🚀 Performance Metrics");
        console.log("DOM Content Loaded:", `${metrics.domContentLoaded}ms`);
        console.log("Load Complete:", `${metrics.loadComplete}ms`);
        console.log("First Byte (TTFB):", `${metrics.firstByte}ms`);
        console.log("Total Resources:", metrics.totalResources);
        console.log("Images:", metrics.imageResources);
        console.log("Scripts:", metrics.scriptResources);
        console.log("Stylesheets:", metrics.styleResources);
        console.groupEnd();

        // Performance scoring
        let score = 100;
        if (metrics.loadComplete > 3000) score -= 30;
        else if (metrics.loadComplete > 2000) score -= 20;
        else if (metrics.loadComplete > 1000) score -= 10;

        if (metrics.firstByte > 800) score -= 20;
        else if (metrics.firstByte > 400) score -= 10;

        if (metrics.totalResources > 50) score -= 10;

        console.log(`📊 Performance Score: ${score}/100`);
      }, 1000);
    });
  },

  // Monitor bundle size in development
  estimateBundleSize: () => {
    if (!import.meta.env.DEV) return;

    const scripts = Array.from(document.querySelectorAll("script[src]"));
    const styles = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    );

    console.group("📦 Bundle Information");
    console.log("Script files:", scripts.length);
    console.log("Stylesheet files:", styles.length);
    console.log("Run `npm run build:analyze` to see detailed bundle analysis");
    console.groupEnd();
  },
};

// Auto-initialize in development
if (import.meta.env.DEV) {
  performanceMonitor.logPerformance();
  performanceMonitor.estimateBundleSize();
}
