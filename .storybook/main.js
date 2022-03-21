// const path = require('path');
// const webpack = require('webpack');
// const ESLintPlugin = require('eslint-webpack-plugin');
// const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  style: [],
  addons: ['@storybook/addon-essentials', '@storybook/addon-actions', '@storybook/addon-links'],
  core: { builder: 'storybook-builder-vite' },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    // example: config.resolve.alias.foo = 'bar';
    return config;
  },
};
