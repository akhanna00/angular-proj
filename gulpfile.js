// Declare all modules required
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var rename = require('gulp-rename')
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

// Minify javascript and rename it
gulp.task('minify-js', function() {
    return gulp.src('app/**/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'))
});

// Minify css and rename it
gulp.task('minify-css', function() {
    return gulp.src('app/**/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'))
});

// Minify html and rename it
gulp.task('minify-html', function() {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulpIf('!index.max.html', rename({suffix: '.min'}), rename("index.html")))
        .pipe(gulp.dest('dist'))
});

// Sync with browser
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
    })
})

// Reload and minify files whenever a file is saved
gulp.task('watch', ['browserSync', 'minify-js', 'minify-css', 'minify-html'], function() {
    gulp.watch('app/**/*.*', ['minify-js', 'minify-css', 'minify-html', browserSync.reload]);
});