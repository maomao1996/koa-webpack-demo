const { merge } = require('webpack-merge')
const { HotModuleReplacementPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const webpackBaseConfig = require('./base.js')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  /**
   * webpack-hot-middleware/client 相关文档
   * https://github.com/webpack-contrib/webpack-hot-middleware#client
   */
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js'],
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  target: 'web',
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]
})
