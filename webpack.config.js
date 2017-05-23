const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader','css-loader?modules&localIdentName=[local]___[hash:base64:5]'] },
    ]
  },
  devServer: {
    contentBase: './',
    publicPath: '/',
  },
}