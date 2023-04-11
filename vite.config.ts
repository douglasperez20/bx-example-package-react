import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import atomico from "@atomico/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), atomico()],
});
