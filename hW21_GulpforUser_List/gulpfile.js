const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


function buildStylesTask() {
    return gulp.src('./style/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/style'))
};
function copyHTMLFile() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'))
};
function buildScripts() {
    return gulp.src('./script/*.js')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist/script'))
};
function watchСhanges() {
    gulp.watch('./style/*.scss', buildStylesTask);
    gulp.watch('./index.html', copyHTMLFile);
    gulp.watch('./script/*.js', buildScripts);
};

exports.copyHTMLFile = copyHTMLFile;
exports.buildScripts = buildScripts;
exports.watchСhanges = watchСhanges;
exports.buildStylesTask = buildStylesTask
exports.buildProject = gulp.series(buildStylesTask, copyHTMLFile, buildScripts, watchСhanges);
 