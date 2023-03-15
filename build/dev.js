const config = require('./base')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    
    // 代理服务器
    proxy: {
      '/api': {
        target: 'http://localhost:8888/',
        pathRewrite: { '^/api': '' },
      }
    },

    // BrowserRouter
    historyApiFallback: true
  },
  ...config
}
