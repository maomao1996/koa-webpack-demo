const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        test: /\.css$/
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpe?g|gif)$/i
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Koa Webpack App',
      template: './public/index.html'
    })
  ]
}
