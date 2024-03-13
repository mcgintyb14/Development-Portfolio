import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the react plugin

export default defineConfig({
  plugins: [react()], // Add the react plugin to the plugins array
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
  },
});
