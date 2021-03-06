const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.ts',
    target: 'web',
    devtool: 'inline-source-map',
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        knockout: path.resolve(__dirname, 'src/library/knockout-latest-patched.js')
      }
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: 'index.js'
    }
  }
];