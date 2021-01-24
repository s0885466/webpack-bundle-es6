import {merge} from  'webpack-merge';
import HtmlWebpackPlugin from "html-webpack-plugin";

import {BUILD_DIRECTORY, SOURCE_DIRECTORY} from '../constants';
import {loadJavaScript, loadCss, loadScss} from "../modules";

module.exports = () => {
  return merge({
    mode: 'none',
    entry: [
      SOURCE_DIRECTORY
    ],
    output: {
      filename: 'bundle.js',
      path: BUILD_DIRECTORY,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "static/index.html"
      }),
    ],
  },
    loadJavaScript(),
    loadCss(),
    loadScss()
  )
};
