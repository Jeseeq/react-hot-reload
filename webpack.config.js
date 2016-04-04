var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/app',
  ],
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: [/\.es6$/, /\.js$/],
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
}
