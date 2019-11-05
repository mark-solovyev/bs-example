
const gulp = require("gulp");
const pug = require("gulp-pug");
const sass =  require("gulp-sass");
sass.compiler = require("node-sass");
const browserSync = require("browser-sync").create();

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

// PAG --> HTML
gulp.task("build:html", ()=> {
    return gulp.src(myPath.src.pug)
        .pipe(pug())
        .pipe(gulp.dest(myPath.dist.root));
});
// SCSS --> CSS
gulp.task("build:css", ()=> {
    return gulp.src(myPath.src.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(myPath.dist.styles));
});
// RUN SERVER
gulp.task("run", ()=> {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});
// RELOAD SERVER
gulp.task("reload", (done)=> {
    browserSync.reload();
    done();
});
gulp.task("default", gulp.series("build:html", "build:css", "run"));

gulp.watch(myPath.src.views, gulp.series("build:html", "reload"));
gulp.watch(myPath.src.styles, gulp.series("build:css", "reload"));