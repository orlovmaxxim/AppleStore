var gulp = require('gulp'),
		jade = require('gulp-jade'),
		concatCss = require('gulp-concat-css'),
		rename = require('gulp-rename'),
		notify = require('gulp-notify'),
		liveReload = require('gulp-livereload'),
		browserSync = require('browser-sync'),
		connect = require('gulp-connect'),
		minifyCss = require('gulp-minify-css'),
		reload = browserSync.reload;

/*ЛОКАЛЬНАЯ РАЗРАБОТКА*/

//task jade

gulp.task('jade', function(){
	gulp.src('src/templates/pages/*.jade')
	.pipe(jade())
	.on('error', log)
	.pipe(gulp.dest('src/'))
	.pipe(reload({stream: true}));
});

//task connect - таск запуска локального сервера
//локальный сервер запускается, но только после компиляции jade (см. второй параметр)
gulp.task('connect', ['jade'], function(){
	browserSync({
		notify: false,
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

 

//отслеживание таска - слежка и автоматический запуск gulp задач
gulp.task('watch', function(){
	gulp.watch('src/templates/**/*.jade', ['jade']);
	gulp.watch([
		/*'src/*.html',*/
		'src/js/**/*.js',
		'src/css/**/*.css'
		]).on('change', reload);
});
 
// default task - таск по умолчанию
gulp.task('default', ['connect','watch']);



/*ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ*/

//Наглядный вывод ошибок в консоль

var log = function(error) {
	console.log([
		'',
		"<===ERROR MESSAGE START===>",
		("[" + error.name + " in " + error.plugin + "]"),
		error.message,
		"<===ERROR MESSAGE END===>",
		''
		].join('\n'));
		this.end;
}


/*gulp.task(name, deps, fn)
	deps - массив задач, которые будут выполнены ДО запуска задачи name
*/