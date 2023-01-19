const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
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
  plugins: [
    new CleanWebpackPlugin()
  ],
};
