import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/",
  resolve: {
    alias: [],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    minify: "terser",
    sourcemap: false,
    target: "es2015",
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
});
