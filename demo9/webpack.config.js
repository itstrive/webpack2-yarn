const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './app.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}]
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				loader: 'css-loader?importLoaders=1',
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].bundle.css",
			allChunks: true,
		}),
	]
};
//yarn add sass-loader node-sass