// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

// plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoPrefixer = require('autoprefixer');

// 'production' か 'development' を指定
const MODE = 'development';

module.exports = {
  // モード値を production に設定すると最適化された状態で、development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  // developmentモードで有効になるdevtool: 'eval'を上書き
  devtool: MODE === 'development' ? 'source-map' : 'none',
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: 'dist',
    open: true,
    watchContentBase: true,
  },
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    'js/main': ['./src/js/main.js'],
    'css/style': './src/scss/style.scss',
  },
  output: {
    // 出力するファイル名
    filename: '[name].js',
    // __dirnameは webpack.config.js があるディレクトリの絶対パス
    path: path.resolve(__dirname, './dist/'),
    //ブラウザからバンドルにアクセスする際のパス
    publicPath: '/',
  },
  module: {
    rules: [
      // es-lint
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      ie: 11,
                    },
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
      // scss
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // javascriptとしてバンドルせず css として出力する
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: MODE === 'development',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: MODE === 'development',
              plugins: [
                AutoPrefixer({
                  grid: true,
                  browsers: ['last 2 versions', 'ie >= 11', 'Android >= 4'],
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: MODE === 'development',
            },
          },
        ],
      },
    ],
  },
  // plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
