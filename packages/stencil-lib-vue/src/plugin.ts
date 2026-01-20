import type { Plugin } from 'vue';
import { defineCustomElements } from '@example/stencil-lib/loader';

export const StencilLibPlugin: Plugin = {
  async install() {
    defineCustomElements();
  },
};
