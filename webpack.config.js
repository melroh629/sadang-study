const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src'),
    output:{
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
        ]
    },
    resolve:{
        extensions: ['.js', '.jsx'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
    ],
}
