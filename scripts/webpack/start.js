import webpack from 'webpack';
import chalk from 'chalk';
import DevServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import getDevConfig from './config/webpack.dev';

import {HOST, PORT} from './constants';

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
