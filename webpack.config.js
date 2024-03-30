
const path = require('path');
 
module.exports = {
  entry: './src/index.js', // 项目的入口文件
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 打包文件放置的目录
  },
  module: {
    rules: [
      {
        test: /\.css$/, // CSS文件处理
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 图像文件处理
        use: ['file-loader'],
      },
      {
        test: /\.js$/, // JavaScript 文件处理
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 需要安装babel-loader和@babel/core
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // 开发工具
  devtool: 'eval-source-map',
  // 开发服务器
  devServer: {
    contentBase: './dist',
    open: true,
    port: 3000,
  },
};