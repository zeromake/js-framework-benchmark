'use strict';
require("babel-plugin-syntax-jsx")

var cache = {};
var loaders = [
	{
		test: /\.jsx$/,
		loader: 'babel-loader'
	},
	{
		test: /\.es6\.js$/,
		loader: 'babel-loader'
	},
	{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	}
];
var extensions = [
	'', '.js', '.jsx', '.es6.js', '.msx'
];

module.exports = [{
	cache: cache,
	module: {
		loaders: loaders
	},
	entry: {
		main: './src/Main.jsx',
	},
	output: {
		path: './dist',
		filename: '[name].js',
		sourceMapFilename: "[file].map",
	},
	resolve: {
		extensions: extensions,
		root: [
			__dirname,
			__dirname + '/src'
		],
		alias: {
				'preact': 'node_modules/preact/dist/preact.min.js',
			}
	}
}];