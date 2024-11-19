import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config.common';

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const devConfig: Configuration = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        todoListApp: 'todolist@http://localhost:3031/todolistEntry.js',
      },
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 3030,
    open: true,
    historyApiFallback: true
  },
};

export default merge(commonConfig, devConfig);
