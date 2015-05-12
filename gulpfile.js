var gulp = require('gulp');
var gls = require('gulp-live-server');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var mocha = require('gulp-mocha');


//// 'built' task to start server 
gulp.task('built', function () {
    //1. run your script as a server 
    var server = gls.new(['app/app.js', 'app/routes/**/*.js']);
    server.start();
});

//'lint' task to lint all JS
gulp.task('lint', function () {
    return gulp.src(['app/**/*.js', '*.js', 'test/e2e/steps/**/*.js', 'test/e2e/support/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('css', function () {
    return gulp.src('app/styles/*.css')
        .pipe(gulp.dest('dist/assets/css/'));
});

// Concatenate & Minify JS to dist/assets/js/
gulp.task('scripts', function () {
    return gulp.src('app/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/assets/js/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/'));
});

//cleaning all assets
gulp.task('clean', function (callback) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img', 'dist'], callback);
});

// Watch all js, css files for ant changes
gulp.task('watch', function () {
    gulp.watch(['app/**/*.js', '*.js'], ['lint', 'scripts', 'built', 'unit-test']);
    gulp.watch('app/styles/*.css', ['css']);
});


//Default task 
gulp.task('default', ['clean'], function () {
    gulp.start('lint', 'css', 'scripts', 'watch', 'built');
});

//unit test
gulp.task('unit-test', function () {
    return gulp.src(['test/unit/test.js', 'test/unit/app/server/modules/*.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: 'spec'
        }));
});