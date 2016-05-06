var webpack = require("webpack");
var fs = require('fs')
var path = require('path')
function getEntry() {
  srcDir = ''
  var jsPath = path.resolve(srcDir, 'js');
  var dirs = fs.readdirSync(jsPath);
  var matchs = [], files = {};
  dirs.forEach(function (item) {
    matchs = item.match(/(.+)\.js$/);
    if (matchs) {
      files[matchs[1]] = path.resolve(srcDir, 'js', item);
    }
  });
  return files;
}
module.exports = {
  entry: getEntry(),
  output: {
    path: __dirname + "/build/dist/",//打包文件存放的绝对路径
    // publicPath: __dirname + "/build/public/",//网站运行时的访问路径
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue"},
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.js$/, loader: "babel", exclude: /node_modules/},
      { test: /\.scss$/, loader: "style-loader!css-loader!scss-loader"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.coffee']
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
    rules: {
      'no-new': 0,
      'no-unused-vars': 0
    }
  },
  babel: {
    presets: ['es2015'],//es6转es5
    plugins: ['transform-runtime']
  }
}
