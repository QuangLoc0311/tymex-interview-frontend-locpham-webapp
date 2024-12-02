import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      configs: "/src/configs",
    },
  },
  esbuild: { jsx: "automatic" },
  server: {
    port: 3000, // Set the port to 3000
    watch: {
      usePolling: true, // Enable polling if the file watcher has issues
      interval: 100, // Adjust polling interval if needed
    },
    hmr: {
      overlay: true, // Show errors in the browser overlay
    },
  },
});
