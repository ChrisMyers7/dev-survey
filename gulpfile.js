var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify')
var annotate = require('gulp-ng-annotate')
var watch = require('gulp-watch')



// here are the gulp file paths
var paths = {
  jsSource: ['./public/js/**/*.js'],
  sassSource: ['./public/css/**/*.scss']
}

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  // .pipe(uglify()) uncomment when rdy for production
  .pipe(gulp.dest('./public'))
})

gulp.task('sass', function() {
  return gulp.src(paths.sassSource)
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./public'))
});


gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
});

gulp.task('default', ['watch', 'js', 'sass']);
