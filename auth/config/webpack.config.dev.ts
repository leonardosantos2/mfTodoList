import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config.common';

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const AUTH_PORT = 3032;

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
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'authEntry.js',
      exposes: {
        './AuthIndex': './src/bootstrap',
      },
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: AUTH_PORT,
    open: true,
    historyApiFallback: true,
  },
};

export default merge(commonConfig, devConfig);
