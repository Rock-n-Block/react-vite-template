import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [legacy(), react(), tsconfigPaths()],
  esbuild: {
    jsxInject: `import React from 'react'`, // automatically import React in jsx files
  },
});
