const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	context: __dirname + '/public',
	entry: './index.js',
	output: {
		filename: './dist/bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.sass/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(jpg|png|jpeg|gif|svg)$/,
				loader: 'url-loader',
				exclude: '/node_modules/'
			}

		]
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3005,
			proxy: 'http://localhost:3004'
		})
	],
};
