import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set base to your repo name for GitHub Pages project sites,
// e.g. base: "/rovers-return/"  (or "/" if using a custom domain / user page)
export default defineConfig({
  plugins: [react()],
  base: "/rovers-return/",
});
