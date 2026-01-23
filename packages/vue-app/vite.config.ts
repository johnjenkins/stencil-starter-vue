import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tell Vue to treat any tag containing a hyphen as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
  server: {
    port: 5173,
  },
});
