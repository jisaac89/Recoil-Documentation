var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'src', 'index.tsx');

var config = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'babel-polyfill',
    './src/index.tsx'
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map.js',
    publicPath: '/'
  },
  resolve: {
    alias: [],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    noParse: [],
    loaders: [{
        test: /\.tsx?$/,
        loader: 'babel-loader?presets[]=es2015!ts-loader',
        include: [/src/, /recoil/]
    }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!clean-css-loader!postcss-loader",
        include: [/src/, /recoil/]
    }, {
        test: /\.less$/,
        loader: "style-loader!css-loader!clean-css-loader!postcss-loader!less-loader",
        include: [/src/, /recoil/]
    }]
  }
}

module.exports = config;