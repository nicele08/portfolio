const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { hashElement } = require('folder-hash');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const utils = require('./utils.js');
const environment = require('./environment');
const Dotenv = require('dotenv-webpack');

const getTsLoaderRule = env => {
  const rules = [
    {
      loader: 'thread-loader',
      options: {
        // There should be 1 cpu for the fork-ts-checker-webpack-plugin.
        // The value may need to be adjusted (e.g. to 1) in some CI environments,
        // as cpus() may report more cores than what are available to the build.
        workers: require('os').cpus().length - 1,
      },
    },
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        happyPackMode: true,
      },
    },
  ];
  return rules;
};

module.exports = async options => {
  const development = options.env === 'development';
  const languagesHash = await hashElement(path.resolve(__dirname, '../src/i18n'), {
    algo: 'md5',
    encoding: 'hex',
    files: { include: ['*.json'] },
  });

  return merge(
    {
      cache: {
        // 1. Set cache type to filesystem
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '../build/webpack'),
        buildDependencies: {
          // 2. Add your config as buildDependency to get cache invalidation on config change
          config: [
            __filename,
            path.resolve(__dirname, `webpack.${development ? 'dev' : 'prod'}.js`),
            path.resolve(__dirname, 'environment.js'),
            path.resolve(__dirname, 'utils.js'),
            path.resolve(__dirname, '../postcss.config.js'),
            path.resolve(__dirname, '../tsconfig.json'),
          ],
        },
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        modules: ['node_modules', 'src'],
        alias: utils.mapTypescriptAliasToWebpackAlias(),
        fallback: {
          path: require.resolve('path-browserify'),
        },
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: getTsLoaderRule(options.env),
            include: [utils.root('src')],
            exclude: [utils.root('node_modules')],
          },
          {
            test: /\.(?:ico|gif|jpg|png|svg)$/i,
            type: 'asset/resource',
          },
          {
            enforce: 'pre',
            test: /\.jsx?$/,
            include: [utils.root('src')],
            exclude: [utils.root('node_modules')],
            loader: 'babel-loader'
          }
        ],
      },
      stats: {
        children: false,
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
      plugins: [
        new Dotenv({
          safe: true,
          allowEmptyValues: true,
          systemvars: true,
          silent: true,
          defaults: false,
        }),
        new webpack.EnvironmentPlugin({
          // react-jhipster requires LOG_LEVEL config.
          LOG_LEVEL: development ? 'info' : 'error',
        }),
        new webpack.DefinePlugin({
          I18N_HASH: JSON.stringify(languagesHash.hash),
          DEVELOPMENT: JSON.stringify(development),
          VERSION: JSON.stringify(environment.VERSION),
          SERVER_API_URL: JSON.stringify(environment.SERVER_API_URL),
        }),
        new ESLintPlugin({
          extensions: ['js', 'ts', 'jsx', 'tsx'],
        }),
        new ForkTsCheckerWebpackPlugin(),
        new CopyWebpackPlugin({
          patterns: [
            { from: './public/assets/', to: 'assets/' },
            { from: './public/favicon.ico', to: 'favicon.ico' },
            { from: './public/manifest.webapp', to: 'manifest.webapp' },
            { from: './public/robots.txt', to: 'robots.txt' },
          ],
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
          chunksSortMode: 'auto',
          inject: 'body',
          base: '/',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }),
        new MergeJsonWebpackPlugin({
          output: {
            groupBy: [
              { pattern: './src/i18n/en/*.json', fileName: './i18n/en.json' },
              { pattern: './src/i18n/fr/*.json', fileName: './i18n/fr.json' },
            ],
          },
        }),
      ],
    }
  );
};
