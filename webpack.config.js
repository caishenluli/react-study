
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        // 需要编译的入口文件
        login : './src/login.js',
    },

    output: {
        path: path.join(__dirname, './src/'),
        // filename: 'js/[name]-[chunkhash].js',
        filename: 'js/[name].js',
        // publicPath: 'http://cdn.com/'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false
        }),
    ],
    module: {
        loaders :[
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : [path.resolve(__dirname, '/node_modules')],
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'], //添加组件的插件配置
                }
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },

        ]
    }
}