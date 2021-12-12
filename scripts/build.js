// 加载 env 配置文件
require('dotenv').config({ path: '.env.production' })

const webpack = require('webpack')
const ora = require('ora')

const spinner = ora('项目构建中').start()

const webpackConfig = require('../config/webpack/build')

const compiler = webpack(webpackConfig)
compiler.run((err, stats) => {
  if (err) {
    spinner.fail('构建失败')
  } else {
    spinner.succeed('构建成功')
  }
})
