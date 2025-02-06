const path = require("path")

/** @type {import("webpack").Configuration} */
module.exports = {
	entry: "./index.js",
	target: "web",
	mode: "development",
	devtool: false,
	context: __dirname,
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	optimization: {
		// enable side effects optimization
		sideEffects: true,
	},
	experiments: {
		css: true,
	},
};
