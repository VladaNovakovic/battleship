const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    output: {
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        inline:true,
        hot: true,
        port: 3333
    },
    module: {
        rules: [
            {
                enforce: "pre",
                include: /src/,
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }],
            },
            {
                test: /\.html$/,
                include: /src/,
                exclude: /node_modules/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.css$|\.scss$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    // { loader: MiniCssExtractPlugin.loader },
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMaps: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    { loader: 'resolve-url-loader' },
                    { loader: 'sass-loader' }
                ]
                /*
                loader: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMaps: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                */
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};