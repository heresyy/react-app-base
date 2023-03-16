const HtmlWebpackPlugin = require('html-webpack-plugin')
const Path = require('path')

module.exports = function build({
  entryDir = './src/app/entry',
  staticDir,
  staticSuffixes = /\.(png|svg|jpg|jpeg|gif)$/i,
  title,
}) {
  return {
    entry: entryDir + '/index.coffee',
    output: {
      filename: 'main.js',
      clean: true,
      path: Path.join(process.cwd(), staticDir) // 这里必须绝对路径
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template: Path.join(__dirname, '../entry/index.html')
      }),
    ],
    module: {
      rules: [
        {
          test: /\.coffee$/,
          use: 'coffee-loader'
        },
        {
          test: /\.styl$/,
          use: ['style-loader', 'css-loader', 'stylus-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: staticSuffixes,
          type: 'asset/resource'
        }
      ]
    }
  }
}