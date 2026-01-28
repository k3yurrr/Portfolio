import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  // Only import visualizer when needed for analysis
  let visualizer;
  if (mode === "analyze") {
    const { visualizer: vis } = await import("rollup-plugin-visualizer");
    visualizer = vis;
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      // Bundle analyzer for production builds
      mode === "analyze" &&
        visualizer({
          filename: "dist/bundle-analysis.html",
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
    ].filter(Boolean),
    build: {
      // Enable code splitting
      rollupOptions: {
        external: ["web-vitals"],
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "react-router-dom"],
            ui: ["lucide-react", "react-icons", "react-hot-toast"],
          },
        },
      },
      // Enable minification
      minify: "esbuild",
      // Enable source maps for production debugging
      sourcemap: true,
      // Chunk size warning limit
      chunkSizeWarningLimit: 1000,
    },
    // Enable HTTP/2 server push in development
    server: {
      http2: true,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom", "web-vitals"],
    },
  };
});
