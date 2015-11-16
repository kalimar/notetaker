var buildPath = require('path').join(__dirname, 'public');
module.exports = {
  entry: "./app/App.js",
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  devServer: {
    inline: true,
    progress: true,
    host: process.env.HOST,
    port: process.env.PORT
  },
  devtool: 'soruce-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};