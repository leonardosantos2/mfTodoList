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

const CONTAINER_PORT = 3030;

const federationConfig = {
  name: 'container',
  filename: 'containerEntry.js',
  exposes: {
    './AuthContextIndex': './src/context/AuthContext'
  },
  remotes: {
    todoListApp: 'todolist@http://localhost:3031/todolistEntry.js',
    authApp: 'auth@http://localhost:3032/authEntry.js',
  },
};

const devConfig: Configuration = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${CONTAINER_PORT}/`
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
    port: CONTAINER_PORT,
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
