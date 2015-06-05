var path = require("path");
var webpack = require('webpack');
// 'webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server',
var IS_HOT = process.env.NODE_ENV === 'hot';
var entry = ["./app/main.js"];
if(IS_HOT){
  entry.unshift(
  	"webpack-dev-server/client?http://localhost:8080",
  	"webpack/hot/only-dev-server"
  );
}
module.exports = [{
  entry: entry,
  output: {
    publicPath: "http://localhost:8080/dist/",
    path: "./public/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ["react-hot", "babel-loader"], include: path.join(__dirname, 'app'), exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "javascripts")],
    modulesDirectories: ["node_modules"]
  },
  plugins: [
  	new webpack.NoErrorsPlugin()
  ]
}];
