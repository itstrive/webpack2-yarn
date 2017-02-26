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
		}]
	}
};
//yarn add babel-loader babel-core babel-preset-es2015