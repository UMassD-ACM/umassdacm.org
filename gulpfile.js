const gulp = require('gulp');

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('bin'));
});

gulp.task('netlify', function() {
    return gulp.src('./src/_headers').pipe(gulp.dest('bin'));
});

gulp.task('site-dev', [
    'html'
]);

gulp.task('default', [
    'site-dev', 'netlify'
]);
