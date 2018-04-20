const gulp = require('gulp');
const gih = require('gulp-include-html');

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
    .pipe(gih())
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
