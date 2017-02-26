const path = require('path');
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
			use: [
				'style-loader', {
					loader: 'css-loader', //这样的配置，让其支持css模块化(css modules)
					options: {
						modules: true
					}
				}
			]
		}]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'] //css模块，先从src目录里面找，在从node_module里面找
	}
};
//yarn add css-loader style-loader