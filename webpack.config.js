/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

/** @type import('webpack').Plugin[] */
const plugins = [
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].css',
    ignoreOrder: false,
  }),
  new ManifestPlugin({
    fileName: 'manifest.json',
    publicPath: '/packs/',
    writeToFileEmit: true,
  }),
  new WriteFilePlugin(),
]

/** @type import('webpack').Configuration */
module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    publicPath: '/packs/',
    path: path.resolve(__dirname, 'public', 'packs'),
    filename: '[name].[hash].js',
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },
  devServer: {
    publicPath: '/packs/',
    contentBase: `${__dirname}/public/`,
    host: '0.0.0.0',
    port: 3035,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: false,
    inline: true,
    hot: true,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: ['./node_modules', './src'],
  },
}
