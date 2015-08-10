var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data');

module.exports = {

  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval',

  // http://gaearon.github.io/react-hot-loader/getstarted/
  entry: [
    './src/app.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },

  plugins: [
    new ExtractTextPlugin('styles.css'), // extracts css
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    new webpack.NoErrorsPlugin() // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
  ],

  // resolve paths: http://webpack.github.io/docs/resolving.html
  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.html?$/,
      loaders: ['html-loader', 'file-loader?name=[name].[ext]']
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader']
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=20480' // inline base64 URLs for <=20k images, direct URLs for the rest
    }]
  }

};
