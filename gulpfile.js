var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('es6', () => {
  return gulp.src(['./js/*.js', './js/services/*.js'])
  .pipe(babel({
    "presets": ["es2015"]
  }))
  .pipe(gulp.concat('all.js'))
  .pipe(gulp.dest('dist'));
})

gulp.task('sass', () => {
  return gulp.src('./styles/views/packages.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist'))
})


gulp.watch('./css/views/*scss', ['sass'])

gulp.watch(['.public/js/*.js', './js/controllers/*.js' './js/services/*.js']), ['es6'])

gulp.task('default', ['es6', 'sass'])
