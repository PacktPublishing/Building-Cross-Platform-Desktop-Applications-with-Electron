
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	context: __dirname,
	target: 'electron-main',
	entry: {
		polyfills: './src/app/polyfills.ts',
		vendor: './src/app/vendor.ts',
		app: './src/app/app.ts'
	},
	node: {
		__dirname: false,
		__filename: false
	},
	output: {
		path: __dirname + '/build/',
		publicPath: 'http://localhost:8080/',
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.css', '.html'],
		modules: ['src', 'node_modules'],
		packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loaders: ['ts-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
			}
		]
	},
	externals: [
		(function () {
			var IGNORES = [
				'electron'
			];
			return function (context, request, callback) {
				if (IGNORES.indexOf(request) >= 0) {
					return callback(null, "require('" + request + "')");
				}
				return callback();
			};
		})()
	],
	plugins: [
		new HtmlWebpackPlugin({ template: './src/app/index.html' })
	],
	devServer: {
		historyApiFallback: true, stats: 'minimal'
	}
};
