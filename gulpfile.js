var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = 		require('gulp-watch'),
	jade = require('gulp-jade');
	
	
	
	
	
gulp.task('styles', function () {
	return gulp.src('app/sass/app.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(gulp.dest('dist/css'))
	
});

gulp.task('jade', function() {
	return gulp.src('app/jade/*.jade')
	.pipe(jade({
		pretty: true
		}))
	.pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
	gulp.watch('app/sass/*.sass', ['styles']);
	gulp.watch('app/jade/*.jade', ['jade']);
});

gulp.task('default', ['watch']);