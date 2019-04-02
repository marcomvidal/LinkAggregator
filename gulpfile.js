const gulp = require("gulp");
// Libraries
const copy = require("gulp-copy");
// CSS
const cleanCSS = require("gulp-clean-css");
const concatCSS = require("gulp-concat-css");
// JavaScript
const strip = require("gulp-strip-comments");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

gulp.task("img", async () => {
    return gulp.src("src/img/**")
        .pipe(copy("dist/img", { prefix: 2 }));
});

gulp.task("css", async () => {
    return gulp.src([
            "src/css/general.css",
            "src/css/*.css"
        ])
        .pipe(concatCSS("style.css"))
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(gulp.dest("dist"));
});

gulp.task("js", async () => {
    return gulp.src([
            "src/js/model/*.js",
            "src/js/*.js",
            "!src/js/data.js"
        ])
        .pipe(strip())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat("script.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("data-js", async () => {
    return gulp.src("src/js/data.js")
        .pipe(copy("dist", { prefix: 3 }));
});

gulp.task("default",
    gulp.series("img", "css", "js", "data-js",
        async (done) => { done(); }
    )
);
