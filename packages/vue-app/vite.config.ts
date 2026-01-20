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
  resolve: {
    alias: [
      // Order matters - more specific paths first
      { find: '@example/stencil-lib/loader', replacement: new URL('../stencil-lib/loader', import.meta.url).pathname },
      { find: '@example/stencil-lib', replacement: new URL('../stencil-lib/dist', import.meta.url).pathname },
      { find: '@example/stencil-lib-vue', replacement: new URL('../stencil-lib-vue/dist', import.meta.url).pathname },
    ],
  },
  server: {
    port: 5173,
    watch: {
      // Watch stencil-lib and stencil-lib-vue dist folders for changes
      ignored: ['!**/node_modules/@example/**'],
    },
  },
  optimizeDeps: {
    // Exclude workspace packages from pre-bundling to enable hot reload
    exclude: ['@example/stencil-lib', '@example/stencil-lib-vue', '@example/stencil-lib/loader'],
  },
});
