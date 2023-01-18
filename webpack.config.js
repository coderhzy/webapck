const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  devtool: false, // 是否需要source-map
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // 重新打包时,先将之前打包的文件夹删除掉
    clean: true,
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".ts",".jsx"],
  },
  devServer:{
    static: ["public"],
    liveReload: true,
    port: '8888',
    open: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // plugins: [
            //     "@babel/plugin-transform-arrow-functions",
            //     "@babel/plugin-transform-block-scoping"
            // ],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          // loader: "ts-loader" // 不推荐使用,没办法增加ployfill

          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
