const webpackHotMiddleware = require('webpack-hot-middleware')
const PassThrough = require('stream').PassThrough

/**
 * webpack-hot-middleware 中间件改造
 * 代码参考 https://github.com/leecade/koa-webpack-middleware/blob/master/middleware/hotMiddleware.js
 */
module.exports = (compiler, options) => {
  const hotMiddleware = webpackHotMiddleware(compiler, options)

  return async (ctx, next) => {
    let stream = new PassThrough()
    ctx.body = stream
    await hotMiddleware(
      ctx.req,
      {
        write: stream.write.bind(stream),
        writeHead: (status, headers) => {
          ctx.status = status
          ctx.set(headers)
        }
      },
      next
    )
  }
}
