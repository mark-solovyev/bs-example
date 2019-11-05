
const gulp = require("gulp");
const pug = require("gulp-pug");
const sass =  require("gulp-sass");
sass.compiler = require("node-sass");

const myPath = {
    src: {
        views: "./src/views/",
        pug: "./src/views/index.pug",
        styles: "./src/styles/",
        scss: "./src/styles/main.scss"
    },
    dist: {
        root: "./dist",
        styles: "./dist/styles"
    }
}

gulp.task("build:html", ()=> {
    return gulp.src(myPath.src.pug)
        .pipe(pug())
        .pipe(gulp.dest(myPath.dist.root));
});
gulp.task("build:css", ()=> {
    return gulp.src(myPath.src.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(myPath.dist.styles));
});
gulp.task("default", gulp.series("build:html", "build:css"));

gulp.watch(myPath.src.views, gulp.series("build:html"));
gulp.watch(myPath.src.styles, gulp.series("build:css"));