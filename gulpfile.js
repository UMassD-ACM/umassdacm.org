const gulp = require('gulp');
const gih = require('gulp-include-html');
const sitemap = require('gulp-sitemap');

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

gulp.task('sitemap', function() {
    return gulp.src(['./src/**/*.html','!./src/**/_*.html'], { read:false })
    .pipe(sitemap({
        siteUrl:'https://umassdacm.org',
        getLoc: function(siteUrl, loc, entry) {
            return loc.endsWith('.html') ? loc.substring(0, loc.length - 1 - 4) : loc;
        }
    }))
    .pipe(gulp.dest('bin'));
});

gulp.task('site-dev', [
    'html', 'static'
]);

gulp.task('default', [
    'site-dev', 'netlify', 'sitemap'
]);
