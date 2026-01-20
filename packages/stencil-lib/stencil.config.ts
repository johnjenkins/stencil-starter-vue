import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-lib',
  hashFileNames: false,
  sourceMap: true,
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: '@example/stencil-lib',
      proxiesFile: '../stencil-lib-vue/src/components.ts',
      componentModels: [
        {
          elements: ['example-input'],
          event: 'exampleChange',
          targetAttr: 'value',
        },
      ],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
  ],
  extras: {
    enableImportInjection: true,
  }
};
