const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const TransformJS = {
  loader: 'babel-loader',
  options: {
    plugins: [
      'transform-react-pug',
      'transform-react-jsx'
    ],
    presets: [
      ['@babel/preset-env'],
      ['@babel/preset-react']
    ]
  }
}

module.exports = {
  entry: './src/app/index.coffee',
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/app/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: TransformJS
      },
      {
        test: /\.coffee$/,
        use: [
          TransformJS,
          'coffee-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
