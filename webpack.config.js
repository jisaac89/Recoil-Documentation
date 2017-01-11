var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'src', 'index.tsx');

var config = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  entry: [
    'babel-polyfill',
    './src/index.tsx'
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map.js',
    publicPath: '/',
    libraryTarget: 'var'
  },
  resolve: {
    alias: [],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    noParse: [],
    loaders: [{
        test: /\.tsx?$/,
        loader: 'babel-loader?presets[]=es2015!ts-loader'
    }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!clean-css-loader!postcss-loader"
    }, {
        test: /\.less$/,
        loader: "style-loader!css-loader!clean-css-loader!postcss-loader!less-loader"
    }]
  },
  plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // })
  ]
}

module.exports = config;