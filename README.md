Dependies  
```yarn add react react-dom react-router-dom```  

Dev Dependencies  
```yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin mini-css-extract-plugin node-sass sass-loader source-map-loader style-loader webpack webpack-cli webpack-dev-server prop-types```


``` json
// package.json  
...
"babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
 },
  "scripts": {
    "create": "webpack",
    "start": "webpack-dev-server --open"
  },
...
```

``` js
// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  stats: 'minimal',
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]',
      test: /\.jsx?|\.js?$/,
      columns: true,
      exclude: ['vendor.js', '/node_modules/'],
    }),
  ],
}
```