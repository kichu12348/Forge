// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'client/dist', // Output directory for the build
    },
    server: {
        port: 3001, // Different port for the Vite dev server
        open: true, // Open the browser on start
    }
});
