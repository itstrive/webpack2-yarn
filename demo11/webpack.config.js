const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: {
		app: './index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: './*.html',
			to: ''
		}])
	]
};