const HtmlWebpackPlugin = require('html-webpack-plugin')
const Path = require('path')

const staticDir = 'dist'
exports.staticDir = staticDir

const absPath = relativePath => Path.join(process.cwd(), relativePath)
exports.absPath = absPath

exports.base = {
  entry: './src/app/entry/index.coffee',
  output: {
    filename: 'main.js',
    clean: true,
    path: absPath(staticDir)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: absPath('src/app/entry/index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 静态文件的后缀们
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.coffee$/,
        use: 'coffee-loader'
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
    ]
  }
}
