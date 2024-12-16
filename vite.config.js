import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-test",
    provider: "v8",
    coverage: {
      reporter: ["text", "json", "lcov", "json-summary"],
      all: true,
      include: ["src/**/*.jsx"],
      exclude: [
        "node_modules",
        "src/app.jsx",
        "src/router.jsx",
        "src/main.jsx",
      ],
    },
  },
});