var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');

var paths = {
	scripts: ['./app/**/*.js'],
	styles: ['./app/styles'],
	test: ['./specs/**/*.js']
};

gulp.task('jshint', function(){
	gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})

gulp.task('watch', function(){
	gulp.watch(paths.scripts, ['jshint']);
});

gulp.task('install', shell.task(['npm install', 'bower install']));