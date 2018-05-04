const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { DefinePlugin } = require('webpack');


module.exports = {
  entry: [
    './src/main.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/components'),
      '@api': path.resolve(__dirname, './src/api'),
      '@actions': path.resolve(__dirname, './src/actions'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: [
          /node_modules/,
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName="[local]__[hash:base64:6]"', 'postcss-loader'],
        }),
      },
      {
        test: /\.css$/,
        include: [
          /node_modules/,
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'master.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new DefinePlugin({
      baseURL: JSON.stringify('http://localhost:5000'),
    }),
  ],
};
