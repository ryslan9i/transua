var gulp = require('gulp')
	sass = require('gulp-sass')
	browserSync = require('browser-sync')
	 jade = require('gulp-jade');
 
gulp.task('jade', function() {
 
  gulp.src('app/*.jade')
    .pipe(jade({
      locals: 'build'
    }))
    .pipe(gulp.dest('build'))
});

gulp.task('my', function()
{
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});



gulp.task('browser', function(){
	browserSync( {
		server:{ 
			baseDir: 'app'
		},
	notify: false
});
	});

gulp.task('watch', ['browser', 'my'], function()
{
	gulp.watch('app/sass/**/*.sass', ['my']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

