var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');
var stylus = require('gulp-stylus');

var paths = {
    scripts: ['./app/**/*.js', '!./app/lib/**/*.js'],
    styles: ['./styles/**/*.styl', './styles/main.styl'],
    test: ['./specs/**/*.js'],
    html: ['./app/**/*.html']
};

//compiles stylus into basic css
gulp.task('stylus', function(){
  return gulp.src(paths.styles[1])
              .pipe(stylus())
              .pipe(gulp.dest('./app/styles'));
});

gulp.task('jshint', function(){
    gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
})

gulp.task('watch', ['serve'], function(){
  gulp.watch(paths.scripts, ['jshint', reload]).on('change', reportChange);
  gulp.watch(paths.styles[0], ['stylus', reload]).on('change', reportChange);
});

gulp.task('karma', shell.task(['karma start']));

function reportChange(event){
  console.log('File ' + event.path + 'was ' + event.type + ', running tasks...');
};

//serves static files, like a basic node server
gulp.task('serve', ['build'], function(done){
  browserSync({
    port: 3000,
    server: {
      baseDir: ['app'],
      middleware: function(req, res, next){
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('build', ['jshint', 'stylus']);
