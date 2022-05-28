const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx' ),
	devServer: {
		hot: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
			},
			{
				test:/\.css$/,
				use:['style-loader', 'css-loader']
			}
		]
	},
	output: {
		path: path.resolve(__dirname, '..', './build'),
		filename: 'bundle.js',
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './src/index.html')
		}),
		new ReactRefreshWebpackPlugin()
	]
}