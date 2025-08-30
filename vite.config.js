import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/caravelo-flights/",
  plugins: [vue()],
  server: {},
  test: {
    globals: true,
    environment: "jsdom",
  },
});
