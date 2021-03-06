const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: ['webpack-hot-middleware/client', './app.js'],
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './bundle'),
        publicPath: '/'
    },
    devServer: {
        hot: true,
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() 
    ]
}