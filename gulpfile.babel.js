import gulp from "gulp";
import babel from "gulp-babel";
import eslint from "gulp-eslint";
import mocha from "gulp-mocha";
import del from "del";

gulp.task("watch", () => {
  gulp.watch("api/**/*.js", ["lint", "compile"]);
});

gulp.task("mocha", () => {
  gulp.src(["test/*.js"])
    .pipe(mocha({
      compilers: {
        js: "js:babel-core/register",
      },
    }));
});

gulp.task("clean", () => {
  del([
    "dist/**",
  ]);
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

gulp.task("default", ["lint", "compile", "watch"]);
