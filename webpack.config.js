const path = require("path");

const mode = process.env.NODE_ENV === "production" ? "production": "development";

module.exports = {
  mode,
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "js/bundle.js",
    chunkFilename: "js/[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    port: 9000
  }
};
