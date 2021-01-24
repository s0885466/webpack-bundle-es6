import {merge} from 'webpack-merge';
import getCommonConfig from './webpack.common';
import {HotModuleReplacementPlugin} from 'webpack';
import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';

module.exports = () => {
  return merge(getCommonConfig(),
    {
      mode: 'development',
      devtool: false,
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
      entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
      plugins: [
        new ErrorOverlayPlugin(),
        new HotModuleReplacementPlugin()
      ],
      module: {
        rules: [],
      },
    }
  )
};
