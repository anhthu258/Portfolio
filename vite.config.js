import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/"
  };

  // Change base path when building for production
  if (command !== "serve") {
    config.base = "/Portfolio/"; // 👈 Replace with your GitHub repository name
  }

  return config;
});