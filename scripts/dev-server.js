// 加载 env 配置文件
require('dotenv').config({ path: '.env.development' })

const Koa = require('koa')
const webpack = require('webpack')

const webpackConfig = require('../config/webpack/dev')

const devMiddleware = require('../middleware/devMiddleware')
const hotMiddleware = require('../middleware/hotMiddleware')

const app = new Koa()

// webpack 编译器
const compiler = webpack(webpackConfig)

// 注册 webpack-dev-middleware
app.use(
  devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
)

// 注册 webpack-hot-middleware
app.use(hotMiddleware(compiler))

// 获取端口
const { PORT } = process.env

// 启动服务
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
