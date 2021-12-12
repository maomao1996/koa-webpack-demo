const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./base.js')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: process.cwd() + '/dist',
    publicPath: process.env.PUBLIC_PATH,
    filename: '[name].[contenthash].js',
    /**
     * 在生成文件之前清空 output 目录，可以替换 clean-webpack-plugin
     * https://webpack.docschina.org/configuration/output/#outputclean
     */
    clean: true
  },
  target: 'browserslist'
})
