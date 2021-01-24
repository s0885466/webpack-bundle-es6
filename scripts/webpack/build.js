import webpack from 'webpack';
import chalk from 'chalk';
import getProdConfig from './config/webpack.prod';

const compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
  if (error) {
    //ошибка конфигурации
    console.error(error.stack || error);
    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  console.log(chalk.greenBright('Build completed'));

  const info = stats.toString({
    hash: true,
    colors: true,
    modules: false,
    entrypoints: false,
    version: true,
    env: true
  });

  console.log(info);

  if (stats.hasErrors()) {
    console.log(chalk.redBright('Errors stats'));
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright('Errors stats'));
  }

});
