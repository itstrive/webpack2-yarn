const webpack = require('webpack');
module.exports = {
	entry: {
		app: './index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js',
		publicPath: ''
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', {
				loader: 'css-loader',
				options: {
					modules: true
				}
			}]
		}, {
			test: /\.(sass|scss)$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}, {
			test: /\.(png|jpg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 50000
				}
			}]
		}]
	},
	devServer: {
		contentBase: __dirname + '/src',
		hot: true,
		inline: true,
		open: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};