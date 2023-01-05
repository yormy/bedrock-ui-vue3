const path = require('path');
const { defineConfig } = require('vite');
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { splitVendorChunkPlugin } from 'vite'

module.exports = defineConfig({
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],

    alias: {
        '@components': `${__dirname}/src/components`,
    },
  },

  plugins: [
    vue(), // to process SFC
    {
        ...eslint({
            failOnWarning: false,
            failOnError: false,
        }),
        apply: 'build',
    },
    viteStaticCopy({
        targets: [
            {
                src: 'src/config/*',
                dest: 'config'
            },
            {
                src: 'src/assets/lang/*',
                dest: 'lang'
            }
        ]
    }),
    splitVendorChunkPlugin(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'bedrock-ui-vue3',
      formats: ['es'], // adding 'umd' requires globals set to every external module
      fileName: (format: string) => `bedrock-ui-vue3.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ['vue', /primevue\/.+/], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
        globals: {
            vue: 'Vue',
            i18ntc: 'i18ntc'
        },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
});

