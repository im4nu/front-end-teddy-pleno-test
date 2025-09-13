import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        welcome: "http://localhost:5002/assets/remoteEntry.js",
        // clients: "http://localhost:5001/assets/remoteEntry.js",
        // selectedClients: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
  },
});
