// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/testEntry.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 从node_modules以及loaders文件夹下加载loader，方便我们调试
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          // 所有的js文件都将加载这个loader，并且有个text的配置项
          "index"
        ],
      },
    ],
  },
}
