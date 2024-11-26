import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import path from 'path';
import { dependencies } from '../package.json';

import commonConfig from './webpack.config.common';
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const TODOLIST_PORT = 3031;

const federationConfig = {
  name: 'todolist',
  filename: 'todolistEntry.js',
  exposes: {
    './TodoListIndex': './src/bootstrap',
  },
  shared: {
    'react': {
      singleton: true,
      requiredVersion: dependencies.react,
    }
  }
};

const devConfig: Configuration = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `http://localhost:${TODOLIST_PORT}/`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin(federationConfig),
    new FederatedTypesPlugin({
      federationConfig
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: TODOLIST_PORT,
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
