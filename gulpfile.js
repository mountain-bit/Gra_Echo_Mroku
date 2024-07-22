const gulp = require("gulp");
const less = require("gulp-less");

gulp.task("less", () => {
	return gulp.src("./src/less/style.less")
		.pipe(less({outputStyle: "expanded"}))
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("js",()=>{
    return gulp.src(["./src/js/**/*"])
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("html",()=>{
    return gulp.src(["./src/html/*"])
    .pipe(gulp.dest("./dist/html"));
});

gulp.task("watch", () => {
	gulp.watch("./src", (done) => gulp.series(["less","js","html"])(done));
});