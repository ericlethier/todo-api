import gulp from "gulp";
import babel from "gulp-babel";
import eslint from "gulp-eslint";

gulp.task("watch", () => {
  gulp.watch("api/**/*.js", ["lint", "compile"]);
});

gulp.task("lint", () => {
  gulp.src(["api/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("compile", () => {
  gulp.src("api/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

// gulp.task("default", ["watch"]);
