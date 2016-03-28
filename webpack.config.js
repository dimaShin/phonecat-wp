'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require("webpack");

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
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=img/[path][name].[ext]'
      }
    ],
    noParse: /\/node_modules\/angular\/angular/
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
