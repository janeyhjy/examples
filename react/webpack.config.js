var webpack = require("webpack");
//
// // returns a Compiler instance
// var compiler = webpack({
//     // configuration
//     source: 'webpackjs'
//
// });
//
// compiler.run(function(err, stats) {
//   cosnole.log('run', stats);
//   // ...
// });
// // or
// var watch = compiler.watch({ // watch options:
//   // aggregateTimeout: 300, // wait so long for more changes
//   poll: true // use polling instead of native watchers
//   // pass a number to set the polling interval
// }, function(err, stats) {
//   cosnole.log('watch', stats);
//   // ...
// });
//
// watch.close(function(err, stats) {
//   console.log('close..............');
// });
module.exports = {
  entry: ['./webpackjs/coffee.coffee'],
  output: {
    path: __dirname + "/build/webpackjs/",//打包文件存放的绝对路径
    // publicPath: __dirname + "/build/webpackjs/public",//网站运行时的访问路径
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.coffee', '.js', '.jsx']
  },
	module: {
		loaders: [
			{ test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!scss-loader"},
      { test: /\.js$/, loader: "react-hot!jsx-loader?harmony"},
      { test: /\.(css)$/, loader: "style-loader!css_loader"},
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192"}
		]
	},
	resolve: {
		extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js", ".scss", ".css"]
	}
}
