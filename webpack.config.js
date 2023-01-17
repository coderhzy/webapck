const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    devtool: false, // 是否需要source-map
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        // 重新打包时,先将之前打包的文件夹删除掉
        clean: true
    },
    resolve: {
        extensions: [".js",".json",".wasm",".jsx",".vue"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // plugins: [
                        //     "@babel/plugin-transform-arrow-functions",
                        //     "@babel/plugin-transform-block-scoping"
                        // ],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}