/**
 * Created by designersingh on 9/3/16.
 */

var gulp                = require('gulp');
var inject              = require('gulp-inject');
var wiredep             = require('wiredep').stream;
var browserSync         = require('browser-sync').create();
var historyApiFallback  = require('connect-history-api-fallback');
var sass                = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json')
    };

    return gulp.src('./app/index.html')
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(['./app/js/**/*.js', './app/css/**/*.css'], {read: false}), {ignorePath: '/app'}))
        .pipe(gulp.dest('./app'))
});

gulp.task('serve',['sass','sass:watch'], function(){
    browserSync.init('./app/**/*.*',{
        port:5000,
        server:{
            baseDir:'./app',
            middleware: [historyApiFallback()]

        }
    });
});

gulp.task('default', ['serve']);