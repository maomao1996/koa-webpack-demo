const webpackDevMiddleware = require('webpack-dev-middleware')

/**
 * webpack-dev-middleware 中间件改造
 * 代码参考 https://github.com/leecade/koa-webpack-middleware/blob/master/middleware/devMiddleware.js
 */
module.exports = (compiler, options) => {
  const devMiddleware = webpackDevMiddleware(compiler, options)

  async function middleware(ctx, next) {
    await devMiddleware(
      ctx.req,
      {
        end: (content) => {
          ctx.body = content
        },
        getHeader: ctx.get.bind(ctx),
        setHeader: ctx.set.bind(ctx)
      },
      next
    )
  }

  // 重新挂载相关方法
  middleware.getFilenameFromUrl = devMiddleware.getFilenameFromUrl
  middleware.waitUntilValid = devMiddleware.waitUntilValid
  middleware.invalidate = devMiddleware.invalidate
  middleware.close = devMiddleware.close

  return middleware
}
