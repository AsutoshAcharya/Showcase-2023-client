import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // fix the momentJS issue (nnot set properties of undefined (setting 'format')
  resolve: {
    mainFields: [],
  },
});
