import {merge} from 'webpack-merge';
import HtmlWebpackPlugin from "html-webpack-plugin";

import {BUILD_DIRECTORY, SOURCE_DIRECTORY} from '../constants';
import {loadJavaScript, loadTypeScript, loadCss, loadScss} from "../modules";

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
      resolve: {extensions: ['.ts', '.tsx', '.js']},
      plugins: [
        new HtmlWebpackPlugin({
          template: "static/index.html"
        }),
      ],
    },
    loadTypeScript(),
    loadJavaScript(),
    loadCss(),
    loadScss(),

  )
};
