import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        welcome: process.env.VITE_WELCOME_URL || "",
        clients: process.env.VITE_CLIENTS_URL || "",
        selectedClients: process.env.VITE_SELECTED_CLIENTS_URL || "",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
  },
});
