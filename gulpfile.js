var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // all plugins stored in '$' var
var del = require('del');
var builtdir = process.env.RICHIT_WEB_DIR || 'dest';

gulp.task('clean', function(){
    return del(builtdir, {force: true});
});

gulp.task('upload', function(){
    return gulp.src('3.9.0/**/*')
        .pipe(gulp.dest(builtdir));
});

gulp.task('deploy', ['upload']);
