const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {merge } = require('webpack-merge')
const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

const getCommonConfig= function(isPro){
  return {
    entry: {
      // index: {
      //   import: "./src/index.js",
      //   dependOn: "shared",
      // },
      // main: {
      //   import: "./src/main.js",
      //   dependOn: "shared",
      // },
      // shared: ["axios"]
      index: "./src/index.js",
      // main: "./src/main.js",
      demo: './src/demo.js'
    },
    devtool: isPro ? false : 'source-map', // 是否需要source-map
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name]_[contenthash]_bundle.js", // 建议使用contenthash
      // 重新打包时,先将之前打包的文件夹删除掉
      clean: true,
      chunkFilename: "[name]_chunk.js",
    },
    externals: {
      react: "React",
      axios: "axios",
      "react-dom": "ReactDOM",
    },
    resolve: {
      extensions: [".js", ".json", ".wasm", ".ts", ".jsx"],
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
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            // isPro ? MiniCssExtractPlugin.loader : "style-loader", // 生产环境下使用MiniCssExtractPlugin.loader和SpeedMeasurePlugin互斥
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        minify: isPro ? {
          removeComments: true, // 压缩时候移除注释
          collapseWhitespace: true, // 压缩时候移除空格
          removeAttributeQuotes: true, // 压缩时候移除属性的引号
          removeEmptyAttributes: true, // 压缩时候移除空属性
          removeRedundantAttributes: true, // 压缩时候移除多余属性
        } : false,
      }),
      new ProvidePlugin({
        React: "react",
        ReactDOM: "react-dom",
        axios: "axios",
        dayjs: "dayjs",
      }),
      new CleanWebpackPlugin()
    ],
  };
}

module.exports = function(env){
  const isPro = env.production
  let mergeConfig = isPro ? prodConfig : devConfig
  const finalConfig = merge(getCommonConfig(isPro), mergeConfig)
  return smp.wrap(finalConfig)
}