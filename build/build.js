// https://github.com/shelljs/shelljs
require('./check-versions')();
const shelljs = require('shelljs');

process.env.NODE_ENV = 'production';

const path = require('path');
const ora = require('ora');
const webpack = require('webpack');

const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
);

const spinner = ora('building for production...');
spinner.start();

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
shelljs.rm('-rf', assetsPath);
shelljs.mkdir('-p', assetsPath);
shelljs.cp('-R', 'static/*', assetsPath);

webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }));
});
