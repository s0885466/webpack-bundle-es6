const {merge} = require('webpack-merge');
const getCommonConfig = require('./webpack.common');
const {HotModuleReplacementPlugin} = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

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
