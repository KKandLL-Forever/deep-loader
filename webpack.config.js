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
    modules: ["node_modules", path.resolve(__dirname, "dist")],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader:'sass-loader',
            options: { implementation: require('node-sass')}
          },
          // 先使用我们自己的loader
          // 'cjs'
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['cjs']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  targets: {
                    node: "14.15.0",
                  }
                }
              ]
            ]
          }
        }
      }
    ],
  },
}
