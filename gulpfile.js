var gulp = require('gulp');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');
var stylus = require('gulp-stylus');
var ngAnnotate = require('gulp-ng-annotate');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var paths = {
    scripts: ['./app/**/*.js', '!./app/lib/**/*.js'],
    styles: ['./styles/**/*.styl', './styles/main.styl'],
    test: ['./specs/**/*.js'],
    html: ['./app/**/*.html'],
    min: ['./min'],
    uglify: ['./min/**/*.js']
};

//compiles stylus into basic css
gulp.task('stylus', function(){
  return gulp.src(paths.styles[1])
              .pipe(stylus())
              .pipe(gulp.dest('./app/styles'));
});

//lints js files
gulp.task('jshint', function(){
    gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
})

//serves static assets and auto-reloads browser when files change
var reload = browserSync.reload;
gulp.task('watch', ['serve'], function(){
  gulp.watch(paths.scripts, ['jshint', reload]).on('change', reportChange);
  gulp.watch(paths.styles[0], ['stylus', reload]).on('change', reportChange);
  gulp.watch(paths.html, [reload]).on('change', reportChange);
});

//runs tests
// gulp.task('karma', shell.task(['karma start']));

//shows in terminal when browser reloads
function reportChange(event){
  console.log('File ' + event.path + 'was ' + event.type + ', running tasks...');
};

//serves static files, like a basic node server
gulp.task('serve', function(done){
  browserSync({
    port: 3000,
    server: {
      baseDir: ['app']
    }
  }, done);
});

// gulp.task('minify-css', function(){
//   gulp.src('./app/styles/**/*.css')
//       .pipe(minifyCSS({keepBreaks:true}))
//       .pipe(gulp.dest(paths.min[0]));
// });


// gulp.task('minify-html', function(){
//   var opt = {
//     empty: true,
//     cdata: true,
//     spare: true,
//     quotes: true
//   };

//   gulp.src(paths.html)
//       .pipe(minifyHTML(opt))
//       .pipe(gulp.dest(paths.min[0]))
// });

// gulp.task('uglify', function(){
//   gulp.src(paths.uglify)
//   .pipe(uglify())
//   .pipe(gulp.dest(paths.min[0]));
// });


// gulp.task('minify', function(){
//   return gulp.src(paths.scripts)
//              .pipe(ngAnnotate())
//              .pipe(gulp.dest(paths.min[0]))
// });

