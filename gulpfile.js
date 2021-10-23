const { watch, src,series, dest, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const bundlePath = "./dist";
const del = require("del");
const gulpSass = require("gulp-sass");
const rename = require("gulp-rename");
const package = require("./package.json")
const run = require('gulp-run')

// Watch HTML Files
function html() {
  return src("./pages/**.html")
    .pipe(dest(bundlePath))
    .pipe(browserSync.stream());
}

function tailwindCssBuild() {
  return run("NODE_ENV=production npx tailwindcss -o ./dist/styles/tailwind.css").exec()
}

function tailwindCss() {
  return run("npx tailwindcss -o ./dist/styles/tailwind.css").exec()
}

// Compile and Minify Img
function images() {
  return src("./assets/images/*")
    .pipe(dest(`${bundlePath}/images`));
}
// Compile Svg Icons
function icons() {
  return src("./assets/icons/*.svg").pipe(dest(`${bundlePath}/icons`));
}

// Compile SCSS/SASS to CSS
function scss() {
  return src("./scss/main.scss")
    .pipe(gulpSass())
    .on("error", gulpSass.logError)
    .pipe(rename(`${package.name}.css`))
    .pipe(dest(`${bundlePath}/styles`))
    .pipe(browserSync.stream());
}

// Clean Up (deleted `dist` folder)
function clean() {
  return del([bundlePath]);
}

// Web Server / Live Reload
function server() {
  browserSync.init({
    server: {
      baseDir: bundlePath,
    },
    port: 4000,
    // serveStatic: ['./'],
  });
  watch("./pages/**/*.html", html);
  watch("./scss/**/*.scss", scss);
  watch("./assets/images/*.(jpe?g|png)", images);
  watch("./assets/icons/*.svg", icons);
  browserSync.reload();
}

exports.clean = clean;
exports.build = series(clean, parallel(html, scss, tailwindCssBuild, images, icons));
exports.start = series(clean, parallel(html, scss, tailwindCss, images, icons, server));
