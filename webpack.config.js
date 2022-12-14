const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',  
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'static/js/'),
      filename: 'main.js'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localsConvention: 'camelCase',
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  };