const webpack = require('webpack');
module.exports = {
		context: __dirname + '/src',
		entry: {
			app: './app.js'
		},
		output: {
			path: __dirname + '/dist/assets/',
			filename: '[name].bundle.js',
			publicPath: '/assets'
		},
		devServer: {
			contentBase: __dirname + '/src'
		}
	}
	//index.html 里面 script的src为: /assets/app.bundle.js
	//index.html需要放到 src目录下
	//script 标签中的 /assets 对应的是 output.publicPath 的值