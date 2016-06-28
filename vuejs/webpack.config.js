var webpack = require("webpack");
var fs = require('fs')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
  // context: process.cwd(), //base path for entry (default:process.cwd())
  entry: getEntry(),//需要打包的文件
  output: {
    path: __dirname + "/build/dist/",    //打包文件存放的绝对路径
    publicPath: "/examples/vuejs/build/dist/",    //网站运行时的访问路径
    filename: "[name].[hash].js",    //entry中文件打包后命名规则
    sourceMapFilename: "[file].map",    //
    chunkFilename: "[id].[chunkhash].js"    //未被列在entry中，又需要打包出来的文件命名规则
  },
  module: {
    // loaders: 自动加载机制
    loaders: [
      // test: 匹配文件扩展名
      // exclude: 排除例外（尽量用include）
      // include: 匹配目录 如：`include:[path.resolve(__dirname, "app/src")]`
      // loader: 用”!”分割加载器
      { test: /\.vue$/, loader: "vue"},
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.js$/, loader: "babel", exclude: /node_modules/},
      { test: /\.scss$/, loader: "style-loader!css-loader!scss-loader"},
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: "url-loader?limit=8192" }
    ]
  },
  //
  resolve: {
    // 别名
    // alias: {
    //   moment: "moment/min/moment-with-locales.min.js"
    // },
    // 默认搜索路径
    // root: [
    //   path.resolve('./app/modules'), //必须为绝对路径
    // ],
    // 当前目录以及祖先目录中查找， 可以只写一个文件夹名，(default:["web_modules", "node_modules"])
    // modulesDirectories: [
    //   "web_modules",
    //   "node_modules"
    // ],
    // 当从root, modulesDirectories中无法找到module是可以从fallback中查找
    // fallback: [
    //
    // ],
    // 指定需要搜索的文件扩展名  （default: ["", ".webpack.js", ".web.js", ".js"]
    extensions: ['', '.js', '.vue', '.coffee'] //important: ''是为了支持可以直接带扩展名引用文件：require('./somefile.ext')
  },
  // 类似resolve， 但是只对于loader
  // resolveLoader: {
  //
  // },
  // 开启watch,修改代码自动编译
  // watch: true，
  // 插件
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'html/rindex.html',
      inject: true
    })
  ],
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
