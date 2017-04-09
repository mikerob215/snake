const path = require("path");
const WebpackHTMLplugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new WebpackHTMLplugin()
    ]
};