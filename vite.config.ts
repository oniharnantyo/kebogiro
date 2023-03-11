import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import inject from '@rollup/plugin-inject';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    commonjs({
      exclude: '/node/modules/dayjs',
      requireReturnsDefault: 'auto', // <---- this solves default issue
    }),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['jquery'],
  },
});
