# 资料
 + http://docs.reactjs-china.com/react/docs/getting-started.html
 + https://facebook.github.io/react/docs/tutorial.html#getting-started
 + https://facebook.github.io/react/docs/getting-started.html
# 离线编译，可以避免使用browser.min.js,加速渲染过程
## babel
```
  npm install --global babel-cli //安装babel-cli
  npm install babel-preset-react //安装babel-preset-react
  babel --presets react js --watch --out-dir build/js //监听编译
```
## jsx
```
  npm install -g react-tools //安装react-tools
  jsx --watch js/ build/js/ //监听编译
```

# Webpack (React开发和模块管理的主流工具,但Webpack是一个通用工具，并不只适用于React)
  + 特性:
    - 同时支持同步加载(CommonJs规范),异步加载(AMD规范),[对于新项目，推荐直接使用CommonJS]
    - 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如: CoffeeScript,ES6的支持
    - 可以基于配置或者只能分析打包成多个文件，实现公共模块或者按需加载
    - 支持对CSS，图片等资源的打包，从而无需借助Grunt或Gulp
    - 开发是内存中完成打包，性能更快，完全可以支持开发过程中的实时打包需求
    - 对sourcemap有很好的支持，易于调试
      - sourcemap: 为了解决合并压缩有仍能方便的debug开发，在出错的时候除错工具直接显示原始代码
      - 在转换后的代码加上```//@ sourceMappingURL=/path/to/file.js.map```
      - 最常用生成方式: [Google的Closure编译器](https://developers.google.com/closure/compiler/)
  + 安装 ```npm install -g webpack```
  + 配置 webpack.config.js
  ```

  ```
  + 运行命令
  ```
    webpack --display-error-details 显示错误信息
    webpack 来执行一次开发的编译
    webpack -p 来针对发布环境编译(压缩代码)
    webpack --watch 来进行开发过程持续的增量编译(飞快地!)
    webpack -d 来生成 SourceMaps
  ```
  + webpack loaders: https://webpack.github.io/docs/loader-conventions.html
