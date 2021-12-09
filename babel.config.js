const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [isDevelopment && require('react-refresh/babel')].filter(Boolean)
}
