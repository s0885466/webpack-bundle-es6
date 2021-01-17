const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {merge} = require('webpack-merge');
const getCommonConfig = require('./webpack.common');
const {BUILD_DIRECTORY} = require('../constants');

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [BUILD_DIRECTORY]}),
    ],
    module: {
      rules: [
      ],
    },
  })
};
