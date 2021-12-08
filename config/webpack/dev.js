const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./base.js')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js'
  }
})
