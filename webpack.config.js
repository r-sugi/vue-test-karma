const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MODE = "development";

module.exports = {
  mode: MODE,
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options:{
              url:false,
              sourceMap:false,
              importLoaders:2
            }
          },
          {
            loader:'sass-loader'
          }
        ]
      }
    ],
  }
};
