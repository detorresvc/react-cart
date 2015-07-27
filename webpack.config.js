var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: [
        './app'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/src/'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
            loaders: [{
                test: /\.js?$/,
                loaders: ['babel?optional[]=runtime&stage=0'],
                exclude: /node_modules/
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.css$/, loaders: ["style", "css"] },]
    }
};
