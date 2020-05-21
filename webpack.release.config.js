module.exports = [
    {
        mode: 'production',
        entry: './src/index.ts',
        target: 'web',
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
          publicPath: '/dist/',
          filename: 'index.js'
        }
      }
  ];