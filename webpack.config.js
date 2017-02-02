var path = require('path');

module.exports = {
  entry: {
    app: './app/app.js'
  },
  output: {
    path: './public',
    filename: '[name].bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: ['./public'],
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  }
}
