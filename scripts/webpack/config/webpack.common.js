//import {loadJavaScript} from "../modules";

import {merge} from  'webpack-merge';

import HtmlWebpackPlugin from "html-webpack-plugin";
import env from 'postcss-preset-env';

import {BUILD_DIRECTORY, SOURCE_DIRECTORY} from '../constants';

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
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  localIdentName: "[path][name]__[local]--[hash:base64:5]",
                },
              }
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      env({
                        stage: 0 //default stage 2
                      })
                    ],
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  },
    //loadJavaScript()

  )
};
