const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader"
        }
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  }
}
