
const htmlwebpackplugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	devServer: {
		watchFiles: ['src/', 'docs/'],
		hot: true,
		port: 5556,
		// watchFiles: ['src/'],
		static: {
			directory: path.resolve(__dirname, 'docs')
		},

	},
	mode: "development",
	entry: path.resolve(__dirname, './src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$|\.jsx$/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-react',
							{
								runtime: 'automatic'
							}
						]
					]
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: { name: "assets/[hash].[ext]" },
					},
				],
			},
		],
	},
	plugins: [
		new htmlwebpackplugin({
			filename: 'index.html',
			template: 'src/index.html'
		}),
	],
}


// Notas webpack
/**Debido a que el archivo se lee de arriba para abajo, 
 * si se vuelven a usar las instrucciones, se van a sobreescribir */
