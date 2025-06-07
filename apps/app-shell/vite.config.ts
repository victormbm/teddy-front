import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    '@design-system': path.resolve(__dirname, '../../packages/design-system/src'),
    'clientes': path.resolve(__dirname, '../clientes/src'),
  },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'src/setupTests.ts'),
  },
});
