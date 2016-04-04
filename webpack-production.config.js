var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config');

var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log') //remove all console.logs from build
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
