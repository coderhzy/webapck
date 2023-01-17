const path = require('path')

module.exports = {
    entry: './src/main.js',
    devtool: false, // 是否需要source-map
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        // 重新打包时,先将之前打包的文件夹删除掉
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
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
    }
}