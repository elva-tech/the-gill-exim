import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  hmrGate: false,
  serverFnErrorLogger: false,
  ssrErrorLogger: false,
  vite: {
    server: {
      port: 5173,
      strictPort: false,
    },
  },
});
