const TerserPlugin = require("terser-webpack-plugin");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const webpack = require('webpack')
const glob = require('glob-all')
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const PATHS = {
  src: path.join(__dirname, '../src')
}

console.log(PATHS.src);

module.exports = {
  // 优化配置
  optimization: {
    usedExports: true,
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
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
      safelist: function(){
        return {
          standard: ['body']
        }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      // threshold: 10240,
      minRatio: 0.8,
      algorithm: 'gzip' 
    })
  ],
};