var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './app.js',
  ],
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    plugins: [
      new webpack.HotModuleReplacementPugin()
    ],
    loaders: [
      {
        test: [/\.es6$/, /\.js$/],
        exclude: /node_modules/,
        loaders: ['babel-loader', 'react-hot'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
}
