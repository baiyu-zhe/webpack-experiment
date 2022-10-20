const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('__dirname: ', __dirname)
console.log('path.resolve: ', path.resolve(__dirname, 'dist'))

module.exports = {
    entry: {
        app: './app.js' // 需要打包的文件入口
    },
    output: {
        // __dirname: 当前模块的文件夹名称。console.log('__dirname: ', __dirname)
        // path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。console.log('path.resolve: ', path.resolve(__dirname, 'dist'))
        publicPath: __dirname + '/dist/', //js引用的路径或者cdn地址
        path: path.resolve(__dirname, 'dist'), //打包生成的输出目录;
        filename: 'build.js' // 打包后产生的js文件
    },
    plugins: [
        new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    ]
}
