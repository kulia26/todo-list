const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
          presets: [ 'es2015'],
        }
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000
  }
};
