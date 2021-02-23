module.exports = (api) => {
  const env = api.env();

  api.cache.never();

  const plugins = ["@babel/plugin-proposal-class-properties"];

  if (env === 'development') {
    plugins.push("react-hot-loader/babel");
  }

  return {
    presets: [
      [
        '@babel/preset-env', {
        debug: false, //выводит консольку
        spec: true,
        loose: false,
        modules: false
      }
      ],
      '@babel/preset-react',
      '@babel/typescript'
    ],
    plugins
  }
};
