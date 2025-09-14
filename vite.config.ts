import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        welcome:
          "https://teddy-test-front-end-pleno-mf-welco.vercel.app/assets/remoteEntry.js",
        // clients:
        //   "https://teddy-test-front-end-pleno-mf-clien.vercel.app/assets/remoteEntry.js",
        // selected:
        //   "https://teddy-test-front-end-pleno-mf-selec.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
  },
});
