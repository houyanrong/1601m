var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyCss = require("gulp-minify-css");
var less = require('gulp-less');
var minifyHtml = require("gulp-minify-html");
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');

gulp.task('CssTask', function() {
    gulp.src('./src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCss())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('./dist/css'))
})
gulp.task('JsTask', function() {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('./dist/js'))
})
gulp.task('HtmlTask', function() {
    gulp.src('./src/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./dist/'))
})
gulp.task('ImgTask', function() {
    gulp.src('./src/images/*.jpg')
        .pipe(imageminl())
        .pipe(gulp.dest('./dist/images/'))
})
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['JsTask']);
    gulp.watch('src/css/*.less', ['CssTask']);
})
gulp.task('default', ['JsTask', 'CssTask', 'HtmlTask', 'ImgTask', 'watch'], function() {
    console.log('执行默认任务')
})