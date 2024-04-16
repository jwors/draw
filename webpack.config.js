const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(
              __dirname,
              './loaders/transitionCodeLoader.js'
            ),
            options: {
              Scan: 'scanFace',
              Add: 'addNumber',
              CallName: 'callPhone',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'transitionCodeLoader',
    libraryTarget: 'umd',
  },
};
