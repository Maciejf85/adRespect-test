const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app-entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    alias: {
      fonts: path.resolve(__dirname, './src/fonts'),
      img: path.resolve(__dirname, './src/img'),
    },
  },
  devServer: {
    port: 9001,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    // static: {
    //   directory: path.resolve(__dirname, './build'),
    // },
    watchFiles: ['*.html'],
    client: {
      logging: 'error',
      progress: true,
      overlay: {
        errors: true,
        warnings: true,
        runtimeErrors: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { insert: 'body' } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {},
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src'),
          to: path.resolve(__dirname, 'build'),
          globOptions: {
            ignore: ['**/*.js', '**/*.ts', '**/*.sass', '**/*.scss', '**/*.css', '**/.gitkeep'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
