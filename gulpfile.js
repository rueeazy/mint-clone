var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function() {
    return gulp.src('*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

