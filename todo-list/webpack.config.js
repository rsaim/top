const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/',
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './dist',
            watch: true,
        },
        watchFiles: ['src/'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TODO - Odin Project',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};