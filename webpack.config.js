'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/app',
  entry: './app',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: "js/app.js"
  },
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js", '.css']
  },
  module: {
    loaders: [
      { test: /\.js$/,
        include: __dirname + '/app',
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-es2015-modules-commonjs']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ],
    noParse: /\/node_modules\/angular\/angular/
  },
  plugins: [
    new ExtractTextPlugin("css/app.css")
  ]
};
