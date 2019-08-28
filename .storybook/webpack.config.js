// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path')

const srcPath = path.resolve(__dirname, '..', 'src')

/** @type import('webpack').Configuration */
module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      loader: 'babel-loader',
      include: [srcPath],
      exclude: [/node_modules/],
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          // https://github.com/ant-design/ant-design/issues/7927
          options: { javascriptEnabled: true },
        },
      ],
    }
  )

  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
  config.resolve.modules = ['node_modules', srcPath]

  return config
}
