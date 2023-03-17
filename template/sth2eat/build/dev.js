const { staticDir, base, absPath } = require('./base')

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: absPath(staticDir),

    // 代理服务器
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8888/',
    //     pathRewrite: { '^/api': '' },
    //   }
    // },

    // BrowserRouter 而非 HashRouter
    historyApiFallback: true
  },
}
