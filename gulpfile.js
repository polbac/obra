var gulp = require('gulp');
var concat = require('gulp-concat');
var handlebars = require('gulp-handlebars');
var declare = require('gulp-declare');
var wrap = require('gulp-wrap');



var JS_ASSETS = [
	// vendor
	"./static/js/vendor/jquery.min.js",
  "./static/js/vendor/asynx.js",
	"./static/js/vendor/extend.js",
	"./static/js/vendor/router.min.js",
  "./static/js/vendor/handlebars-v4.0.5.js",
  "./static/js/vendor/TweenMax.min.js",
  "./static/js/vendor/modernizr-2.6.2.min.js",
  "./static/js/vendor/macy.min.js",
  "./static/js/vendor/jquery.smoothwheel.js",
  "./static/js/vendor/swiper.min.js",

	// compiled source
	'./static/js/source/**/**.js',
  './static/templates/templates.js'

];



gulp.task('templates', function () {
    gulp.src('./static/templates/*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
          namespace: 'TEMPLATES',
          noRedeclare: true,
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('./static/templates/'));
});

gulp.task('bundle', function() {
  return gulp.src(JS_ASSETS)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('default', function () {
  gulp.watch('./static/**/**.**', ['templates', 'bundle'])
});