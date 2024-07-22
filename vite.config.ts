import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from "vite-plugin-static-copy";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: `${libcurlPath}/**/*`.replace(/\\/g, "/"),
          dest: "libcurl",
          overwrite: false
        },
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/w/": {
        target: "http://localhost:4000/",
        rewrite: (path) => path.replace(/^\/w/, ''),
        ws: true
      },
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['express'],
    },
  },
})