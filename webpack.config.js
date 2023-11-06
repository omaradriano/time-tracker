
const htmlwebpackplugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	devServer: {
        watchFiles: ['src/','docs/'],
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
	plugins: [
		new htmlwebpackplugin({
			filename: 'index.html',
			template: 'src/index.html'
		}),
	],
	module: {}
}

