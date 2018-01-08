const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // The base directory for resolving entry points
  context: __dirname,

  // Source map configuration
  devtool: 'inline-source-map',
  // target: 'electron-main',

  entry: {
    app: path.resolve(__dirname, './src/app.js')
  },

  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: './',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.html'],
    modules: ['./src', 'node_modules']
  },


  devServer: {
    contentBase: './',
    publicPath: '/',
    inline: true,
    lazy: false,
    hot: true,

    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          babelrc: false,
          presets: [
            'env', 'react'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=dist/[name]-[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },

  node: {
    global: true,
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    __dirname: false,
    __filename: false
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
};