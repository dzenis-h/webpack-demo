const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // https://webpack.js.org/configuration/mode/#usage
  mode: "development",
  //   https://webpack.js.org/concepts/entry-points/#root
  entry: "./src/index.js",
  //   https://webpack.js.org/concepts/output/#root
  output: {
    // this will equal to a hashed file name, eg. build.bdjabsja.js
    //   every time we change something a new file be generated (solves browser caching issues)
    filename: "build.[contentHash].js",
    path: path.resolve(__dirname, "build")
  },
  //   https://webpack.js.org/concepts/plugins/#root
  plugins: [
    // https://webpack.js.org/plugins/html-webpack-plugin/#root
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  //   https://webpack.js.org/configuration/module/#root
  module: {
    //   https://webpack.js.org/configuration/module/#modulerules
    rules: [
      {
        // https://webpack.js.org/configuration/module/#ruleresourcequery
        // if the file ends with '.scss'
        test: /\.scss$/,
        // use these loaders:
        // 1. style-loader (Inject CSS into the DOM)
        // 2. The css-loader interprets @import and url() like import/require() and will resolve them.
        // NOTE: tThe order is important !!!
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Turns sass into css
        ]
      }
    ]
  }
};
