const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function build({
  entryDir = './src/app/entry',
  staticDir,
  staticSuffixes = /\.(png|svg|jpg|jpeg|gif)$/i,
}) {
  return {
    entry: entryDir + '/index.coffee',
    output: {
      filename: 'main.js',
      clean: true,
      path: staticDir
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: entryDir + '/index.html',
        filename: staticDir + '/index.html'
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