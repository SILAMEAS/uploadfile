const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: webpackEnv,

  entry: {
    app: path.join(rootDir, './index.web.ts'),
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'app-[hash].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {test: /\.png$/, use: 'raw-loader'},

      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          url: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-pdf/,
    }),
    new Dotenv({
      path: path.join(rootDir, './.env'),
    }),
  ],
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ], // read files in fillowing order
    alias: {
      'react-native$': 'react-native-web',
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@screens': path.resolve(__dirname, '../src/screens'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@src': path.resolve(__dirname, '../src'),
      '@utils': path.resolve(__dirname, '../utils'),
    },
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, '../src/assets'),
    },
  },
};
