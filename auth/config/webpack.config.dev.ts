import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import path from 'path';

import commonConfig from './webpack.config.common';
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const AUTH_PORT = 3032;

const federationConfig = {
  name: 'auth',
  filename: 'authEntry.js',
  exposes: {
    './AuthIndex': './src/bootstrap',
  },
};

const devConfig: Configuration = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `http://localhost:${AUTH_PORT}/`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin(federationConfig),
    new FederatedTypesPlugin({
      federationConfig
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: AUTH_PORT,
    open: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    static: {
      directory: path.join(__dirname, '..', 'dist'),
    },
  },
};

export default merge(commonConfig, devConfig);
