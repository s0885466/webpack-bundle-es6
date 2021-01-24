module.exports = (api) => {
  const env = api.env();

  api.cache.using(() => env === 'development');

  const plugins = ["dynamic-import-node"];

  return {
    presets: [
      [
        '@babel/preset-env', {
        //useBuiltIns: 'usage',
        shippedProposals: true,
        debug: false, //выводит консольку
        spec: true,
        loose: false,
        targets: {
          node: 'current'
        }
      }
      ]
    ],
    plugins
  }
};
