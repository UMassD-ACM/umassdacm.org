const gulp = require('gulp');
const gih = require('gulp-include-html');

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
    .pipe(gih())
    .pipe(gulp.dest('bin'));
});

gulp.task('static', function() {
    return gulp.src('./src/**/*.css')
    .pipe(gulp.dest('bin'));
});

gulp.task('netlify', function() {
    return gulp.src('./src/_headers').pipe(gulp.dest('bin'));
});

gulp.task('site-dev', [
    'html', 'static'
]);

gulp.task('default', [
    'site-dev', 'netlify'
]);
