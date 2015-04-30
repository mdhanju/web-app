var gulp = require('gulp');
var gls = require('gulp-live-server');
var cucumber = require('gulp-cucumber');
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

// e2e tasks
// starting selenium standalone  server
gulp.task('sel', function () {
    //1. run your script as a server 
    var server = gls.new('node_modules/selenium-server/bin/selenium');
    server.start();
});

// running e2e test - using cucumber
gulp.task('e2e', function () {
    return gulp.src('test/e2e/features/*').pipe(cucumber({
        'steps': 'test/e2e/steps/**/*.js',
        'support': 'test/e2e/support/*.js',
        'format': 'summary'
    }));
});

// Watch all js, css files for ant changes
gulp.task('e2e-watch', function () {
    gulp.watch(['test/cucumber/steps/**/*.js', 'test/cucumber/support/*.js'], ['lint']);
});

gulp.task('test', function () {
    gulp.start('start-sel', 'e2e');
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