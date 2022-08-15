const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    }
  ],
  babel: async (options) => ({
    ...options,
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {
          // importSource: 'theme-ui',
          runtime: 'automatic',
          throwIfNamespace: false
        }
      ]
    ]
  }),
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lib': path.resolve(__dirname, '../src')
    }
    return config
  }
}
