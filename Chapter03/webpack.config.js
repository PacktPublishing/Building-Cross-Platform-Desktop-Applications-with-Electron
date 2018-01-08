var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Webpack Configuration
module.exports = {
    // The base directory for resolving entry points
    context: __dirname,

    // Source map configuration
    devtool: 'inline-source-map',
    target: 'electron-main',

    // Entry points for the application
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/app.ts'
    },

    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: __dirname + '/build',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.js', '.ts', '.css', '.html'],
        modules: ['./src', 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=dist/[name]-[hash].[ext]'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    // we need this due to problems with es6-shim
    node: {
        global: true,
        progress: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        __dirname: false,
        __filename: false
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ExtractTextPlugin("style.css")
    ],

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './build',
        port: 8080,
    },
};
