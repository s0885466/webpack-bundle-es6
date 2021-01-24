import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import {merge} from 'webpack-merge';
import getCommonConfig from './webpack.common';
import {BUILD_DIRECTORY} from '../constants';

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
