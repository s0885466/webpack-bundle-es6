const webpack = require('webpack');
const chalk = require('chalk');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const getDevConfig = require('./config/webpack.dev');

const {HOST, PORT} = require('./constants');

const compiler = webpack(getDevConfig());

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  after: app => app.use(
    hot(compiler, {
      log: false,
      heartbeat: 10 * 1000
    })
  )
});

server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('server listening on ')}
    ${chalk.blueBright(`http://${HOST}:${PORT}`)}
    `);
});
