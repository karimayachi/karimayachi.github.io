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
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
          path: __dirname + '/dist',
          filename: 'index.js'
        }
      }
  ];