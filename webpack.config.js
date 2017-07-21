var HtmlWebpackPlugin = require('html-webpack-plugin');
var pathResolve = require('path').resolve;

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
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },

   devServer:{
     contentBase: __dirname + "/dist",
     inline: true,
     stats: 'errors-only',
     open: true,
     openPage: ''
   },
   plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html'
        }),
    ]
};

module.exports = config
