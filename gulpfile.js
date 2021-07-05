const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const webp = require("gulp-webp");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "source"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = (done) => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/js/scripts.js"), gulp.series("scripts")
  gulp.watch("source/*.html", gulp.series(html, reload));
}

// HTML

const html = () => {
  return gulp.src("source/*.html");
}

exports.html = html;

// Scripts

const scripts = () => {
  return gulp.src("source/js/scripts.js")
    .pipe(sync.stream());
}

exports.scripts = scripts;


// Webp

const createWebp = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 75}))
    .pipe(gulp.dest("source/img"))
}

exports.createWebp = createWebp;



// Build

const build = gulp.series(
  gulp.parallel (
    styles,
    html,
    scripts,
    createWebp
  )
)

exports.build = build;

// Default

exports.default = gulp.series(
  gulp.parallel (
    styles,
    html,
    scripts,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  )
)
