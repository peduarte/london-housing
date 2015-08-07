var path = require('path');
var config = require('./webpack.config.js');
var webpack = require('webpack');

config.devtool = 'source-map';

// Compress set to false so it doesnt
// rename multiple keyframe name to the same one
// example: @keyframes fadeOut{…} and @keyframes animateLetter{…}
// were both being compiled as @keyframes a{…}
config.cssnext = {
  browsers: "last 2 versions",
  compress: false
},

// aggressiveMerging needs to be set to false
// for prod because it was merging keyframes rules
// for example: @keyframes fadeOut{…} was being compiled to
// @-webkit-keyframes fadeOut{} @keyframes fadeOut{…}
// for some weird reason the -webkit prefixed version was empty
// Still have an issue where if the 0% {} keyframe step
// is not specified, it will not be compiled
// ecample: @keyframes test { 100% {opacity: 1}}
config.cssloader = {
  aggressiveMerging: false
},

config.entry = [
  './src/app',
  './src/index.html'
];

config.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: './'
},

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

// This is supposed to uglify the JS
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
);

module.exports = config;
