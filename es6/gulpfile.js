var gulp = require('gulp');
var g = require('gulp-load-plugins')();
gulp.task('es6', () => {
  return gulp.src('es6/*.js')
  .pipe(g.babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('es5/'))
})