var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');

gulp.task('js', function (done) {
    gulp.src('./src/widget/assets/js/upload-kit.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/widget/assets/js'));
    done();
});

gulp.task('less-min', function (done) {
    gulp.src('./src/widget/assets/css/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/widget/assets/css'));
    done();
});

gulp.task('less', function (done) {
    gulp.src('./src/widget/assets/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/widget/assets/css'));
    done();
});

gulp.task('default', gulp.series('js', 'less', 'less-min'));