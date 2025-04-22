import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // or 'prompt'
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "LendSia",
        short_name: "LendSia",
        description: "An awesome lending platform",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        form_factor: "mobile",
        screenshots: [
          {
            src: "/Screenshot.png",
            sizes: "360x640",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
