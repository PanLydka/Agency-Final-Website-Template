var HtmlWebpackPlugin = require('html-webpack-plugin');
var pathResolve = require('path').resolve;
var webpack = require('webpack');
var urlLoader = require("url-loader");


const config = {
  context: pathResolve('src'),
  entry: './js/main.js',
  output: {
    path: pathResolve(''),
    filename: 'dist/bundle.js',
    publicPath: ''
  },

  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|mp4)$/,
        use: 'file-loader?name=[hash:6].[ext]&outputPath=dist/images/'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&outputPath=dist/fontawesome/',
      }
    ]
  },
   devServer:{
     contentBase: __dirname + "/dist",
     inline: true,
     stats: 'errors-only',
     open: true,
     openPage: '',
     host: "192.168.0.6"
   },
   plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        })
    ]
};

module.exports = config
