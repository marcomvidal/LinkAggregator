const gulp = require("gulp");
// Libraries
const gulpCopy = require("gulp-copy");
// CSS
const cleanCSS = require("gulp-clean-css");
const concatCSS = require("gulp-concat-css");
// JavaScript
const strip = require("gulp-strip-comments");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

gulp.task("lib", async () => {
    return gulp.src("lib/bootstrap/**")
        .pipe(gulpCopy("dist/", { prefix: 1 }));
});

gulp.task("css", async () => {
    return gulp.src("src/css/*.css")
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(concatCSS("style.css"))
        .pipe(gulp.dest("dist"));
});

gulp.task("js", async () => {
    return gulp.src([
            "src/js/jquery-3.3.1.js",
            "src/js/bootstrap-3.3.7.js",
            "src/js/*.js"
        ])
        .pipe(strip())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat("script.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("default",
    gulp.series("lib", "css", "js",
        async (done) => { done(); }
    )
);
