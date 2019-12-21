const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'demo',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  optimization: {
    // minimize: true,
    // minimizer: [new TerserPlugin()],
    usedExports: true
  },
  devtool: 'source-map',
  mode: 'development'
};