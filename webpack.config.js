var path = require("path");

module.exports = [{
  context: path.join(__dirname, "public", "javascripts"),
  entry: "main",
  output: {
    path: path.join(__dirname, "public", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader"}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "javascripts")],
    modulesDirectories: ["node_modules"]
  }
}];
