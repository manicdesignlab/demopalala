var gulp = require('gulp');
var sass = require("gulp-sass");
var jade = require('gulp-jade');
var prettify = require('gulp-prettify');
var plumber = require( 'gulp-plumber');

gulp.task("sass", function() {
    gulp.src("htdocs/sass/*scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(sass({
          outputStyle: 'expand'
        }))
        .pipe(gulp.dest("htdocs/css/"));
});


gulp.task("jade", function() {
    gulp.src("htdocs/jade/*jade")
        .pipe(plumber())
        .pipe(jade())
        .pipe(prettify())
        .pipe(gulp.dest("htdocs"));
});


gulp.task('watch', function(){
    gulp.watch('htdocs/sass/*.scss', ['sass']);
    gulp.watch('htdocs/jade/*.jade', ['jade']);
});


gulp.task('default', ['sass']['jade']);
