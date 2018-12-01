/*
 * @Author: sunliang 
 * @Date: 2018-11-30 20:16:41 
 * @Last Modified by: sunliang
 * @Last Modified time: 2018-12-01 08:49:23
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var babel = require('gulp-babel');
var clean = require('gulp-clean-css');
var url = require('url');
var fs = require('fs');
var path = require('path');
var list = require('./mock/data');

gulp.task('devSass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(clean({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./src/css'))
})

gulp.task('devJs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src/zip'))
})

gulp.task('server', function() {
    return gulp.src('./src').pipe(server({
        port: 9090,
        open: true,
        middleware: function(req, res, next) {
            var pathname = url.parse(req.url).pathname;
            if (pathname === '/favicon.ico') {
                return res.end('');
            }
            if (pathname === '/api/list') {
                res.end(JSON.stringify({ code: 1, data: list }))
            } else {
                pathname = pathname === '/' ? 'index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
            }

        }
    }))
})

gulp.task('where', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devSass'));
})

gulp.task('dev', gulp.series('devSass', 'devJs', 'server', 'where'));