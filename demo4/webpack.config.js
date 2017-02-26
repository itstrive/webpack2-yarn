const webpack = require('webpack');
module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './app.js',
		a: './a.js',
		b: './b.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			minChunks: 2, //有任意模块加载了两次或更多,这里2就是设置超过2次以上使用
		}),
	],
}