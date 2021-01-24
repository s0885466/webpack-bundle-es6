import env from "postcss-preset-env";

export const loadCss = () => ({
  module: {
    rules: [
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
    ]
  }
});
