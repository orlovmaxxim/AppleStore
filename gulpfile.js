var gulp = require('gulp'),
		concatCss = require('gulp-concat-css'),
		rename = require('gulp-rename'),
		notify = require('gulp-notify'),
		liveReload = require('gulp-livereload'),
		browserSync = require('browser-sync'),
		connect = require('gulp-connect'),
		minifyCss = require('gulp-minify-css');

//task connect - таск запуска локального сервера

gulp.task('connect', function(){
	browserSync({
		port: 9000,
		server: {
			baseDir: 'src'
		}
	});
});

/*// task css = таск для работы с css (объединение и минификация)
gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(minifyCss())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('src/css/'))
    .pipe(connect.reload());
    .pipe(notify("concat and min css file Done!"));
});*/

 

//отслеживание таска - слежка и автоматический запуск gulp
gulp.task('watch', function(){
	gulp.watch([
		'src/*.html',
		'src/js/**/*.js',
		'src/css/**/*.css'
		]).on('change', browserSync.reload);
});
 
// default task - таск по умолчанию
gulp.task('default', ['connect','watch']);