const TerserPlugin = require("terser-webpack-plugin");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
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
      }),
      new CSSMinimizerPlugin()
    ] 
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin()
  ],
};