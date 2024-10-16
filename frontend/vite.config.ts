import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const port = parseInt(process.env.VITE_PORT || "24080");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    host: "0.0.0.0",
    port: port,
    proxy: {
      "/api": "http://localhost:24081",
    },
  },
  preview: {
    port,
  },
});
