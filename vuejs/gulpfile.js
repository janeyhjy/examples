var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
gulp.task('default', function() {
  return gulp.src(['js/vuemain.js'])
    .pipe(named())
    .pipe(webpack({
      module: {
        loaders: [
          { test: /\.vue$/, loader: "vue"},
          { test: /\.coffee$/, loader: "coffee-loader" },
          { test: /\.js$/, loader: "babel", exclude: /node_modules/},
          { test: /\.scss$/, loader: "style-loader!css-loader!scss-loader"}
        ]
      },
      babel: {
        presets: ['es2015'],//es6转es5
        plugins: ['transform-runtime']
      }
    }))
    .pipe(gulp.dest('build/dist/'));
});