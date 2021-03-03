
const path = require('path');

module.exports = {
	entry: ['whatwg-fetch', './js/script.js'],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};