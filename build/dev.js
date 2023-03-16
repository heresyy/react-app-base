const build = require('./base')

module.exports = function buildDev({
  entryDir,
  staticSuffixes,

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
      entryDir,
      staticDir,
      staticSuffixes,
    }),
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: staticDir,
      proxy,
      historyApiFallback: BrowserRouter
    }
  }
}
