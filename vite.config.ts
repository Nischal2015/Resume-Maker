import { defineConfig } from 'vite';
import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';

import shimReactPdf from 'vite-plugin-shim-react-pdf';

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    define: {
      global: 'window',
    },
    plugins: [react(), shimReactPdf()],
    resolve: {
      alias: {
        app: resolve(__dirname, 'src', 'app'),
        components: resolve(__dirname, 'src', 'components'),
        hooks: resolve(__dirname, 'src', 'hooks'),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      hmr: {
        clientPort: 3000,
      },
    },
  };
});
