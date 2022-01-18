import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy(), tsconfigPaths(), react()],
  esbuild: {
    jsxInject: `import React from 'react'`, // automatically import React in jsx files
  },
});
