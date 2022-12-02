const config = require('./common')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    
    // 代理服务器
    // proxy: {
    //   '/api': {
    //     target: 'http://18.143.135.109:8090/',
    //     pathRewrite: { '^/api': '' },
    //   }
    // },

    // BrowserRouter
    // historyApiFallback: true
  },
  ...config
}
