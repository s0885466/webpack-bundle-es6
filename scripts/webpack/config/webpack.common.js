const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = require('postcss-preset-env');

const {BUILD_DIRECTORY, SOURCE_DIRECTORY} = require('../constants');

module.exports = () => {
  return {
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
  }
};
