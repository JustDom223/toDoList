const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Update this path when you create your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
