// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {},
      },
      {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    // }),
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
    https: false,
    index: 'index.html',
    // contentBase: path.join(__dirname, 'dist'),
    // host: '0.0.0.0',
    // disableHostCheck: true,
    // headers: {},
  },
};
