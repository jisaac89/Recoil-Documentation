var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'src', 'index.tsx');

var config = {
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  entry: {
    app: [mainPath]
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map.js'
  },
  resolve: {
    alias: [],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'recoil')
        ]
      },
      { test: /\.less$/,  loader: 'style!css!less'},
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}

module.exports = config;