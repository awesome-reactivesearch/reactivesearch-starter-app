const path = require("path");

module.exports = {
	context: path.resolve(__dirname, "./app"),
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
		publicPath: "/dist/"
	},
	module: {
		rules: [
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: ["babel-loader"]
			},
			{
				test: /node_modules\/JSONStream\/index\.js$/,
				use: ["shebang-loader", "babel-loader"]
			}
		]
	},
	externals: ["ws"]
}
