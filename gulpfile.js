var gulp = require('gulp');
var serve = require('gulp-server-livereload');

gulp.task('serve', function() {
    gulp.src('.')
    	.pipe(serve({
    		livereload: true,
    		directoryListing: false,
    		open: true,
    	}));
});
