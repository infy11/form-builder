import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
const { chunkSplitPlugin } = await import("vite-plugin-chunk-split");

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      svgr(),
      chunkSplitPlugin({
        strategy: "single-vendor",
        customSplitting: {
          react: [
            /\/node_modules\/react\//,
            /\/node_modules\/react-dom\//,
            /\/node_modules\/redux-persist\//,
            /\/node_modules\/@reduxjs\/toolkit\//,
          ],
          radix: [/\/node_modules\/@radix-ui\//],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "build",
    },
    server: {
      host: "0.0.0.0",
      port: 3100,
    },
  };
});
