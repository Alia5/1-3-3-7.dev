/**
 * Webpack main configuration file
 */

const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')

module.exports = {
    mode: process.env["PROD"] ? 'production' : 'development',
    entry: [path.resolve(__dirname, './src/ts/index.ts'), path.resolve(__dirname, './src/scss/style.scss')],
    output: {
        filename: 'js/index.js',
        clean: true,
    },
    watchOptions: {
        poll: 1000, // Check for changes every second
    },
    devServer: {
        compress: true,
        port: 9000,
        watchFiles: [path.join(__dirname, 'src') + "/**/*.*"],
        hot: true,
        liveReload: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, 'src/html/imprint.html'), to: "." },
                { from: path.join(__dirname, 'src/assets'), to: "assets" },
                { from: path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'), to: "assets/fonts" }
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/html/index.html'),
            
        }),
        new HtmlReplaceWebpackPlugin([
            {
                pattern: '<headreplacercontent/>',
                replacement: fs.readFileSync('HeadReplacerContent.txt', 'utf8')?.toString() || ''
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                include: [path.resolve(__dirname, 'src', 'ts')]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                include: [path.resolve(__dirname, 'src', 'scss')],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: 'css/'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
        ],
    },
}