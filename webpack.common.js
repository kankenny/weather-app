const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'images/[hash][ext][query]',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		watchFiles: ['src/*.html'],
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext][query]',
				},
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			hash: 'true',
		}),
		new CssMinimizerPlugin(),
	],
}
