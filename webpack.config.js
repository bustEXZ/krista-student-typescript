const path = require("path");

module.exports = () => ({
    mode: "development",
    devtool: "source-map",
    entry: "./src",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx|js|jsx)?/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
});
