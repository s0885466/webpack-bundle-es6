export const loadTypeScript = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ]
  }
});
