const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
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
    // index: "./src/index.js",
    // main: "./src/main.js",
    demo: './src/demo.js'
  },
  devtool: false, // 是否需要source-map
  output: {
    path: path.resolve(__dirname, "./build"),
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
  devServer: {
    static: ["public"],
    liveReload: true,
    port: "8888",
    open: true,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },
  // 优化配置
  optimization: {
    chunkIds: "named",
    // 代码分割
    splitChunks: {
      chunks: "all",
      // maxSize: 20000,
      // minSize: 10000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: "[name]_vendors.js",
        },
        utils: {
          test: /[\\/]src[\\/]utils[\\/]/,
          priority: -20,
          filename: "[name]_utils.js",
        },
        src: {
          test: /[\\/]src[\\/]/,
          priority: -30,
          filename: "[name]_src.js",
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: true
          }
        }
      })
    ] 
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
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      axios: "axios",
      dayjs: "dayjs",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
