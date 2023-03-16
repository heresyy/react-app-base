const build = require('./base')
const Path = require('path')

module.exports = function buildDev({
  entryDir,
  staticSuffixes,
  title,

  BrowserRouter,
  staticDir = './dist', // 代理服务器
  proxy,
  // proxy = {
  //   '/api': {
  //     target: 'http://localhost:8888/',
  //     pathRewrite: { '^/api': '' },
  //   }
  // }
}) {
  return {
    ...build({
      title,
      entryDir,
      staticDir,
      staticSuffixes,
    }),
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: Path.join(process.cwd(), staticDir),
      proxy,
      historyApiFallback: BrowserRouter
    }
  }
}
