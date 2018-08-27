const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let autoprefixer = require('autoprefixer');

module.exports = {
    output: {
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        inline:true,
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
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.css$|\.scss$/,
                include: /src/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin("styles.css"),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
};