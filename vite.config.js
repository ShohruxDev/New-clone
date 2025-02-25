import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true, // Portni qat'iy belgilaydi
    open: true, // Brauzerni avtomatik ochadi
  },
});

