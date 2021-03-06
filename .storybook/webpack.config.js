// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.


module.exports = async ({ config }) => {
    // https://github.com/storybookjs/storybook/issues/6319#issuecomment-477852640
    config.module.rules = config.module.rules.filter(
      rule => rule.test.toString() !== '/\\.css$/'
    )
  config.module.rules.push(
    { test: /\.tsx?$/, loader: 'babel-loader' },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          // https://github.com/ant-design/ant-design/issues/7927
          options: { javascriptEnabled: true }
        }
      ],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  )
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
  return config
}
