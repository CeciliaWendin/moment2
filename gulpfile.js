const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const browsersync = require("browser-sync").create();
const del = require('del');

//Paths
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    imagesPath: "src/**/*.images",
    jsPath: "src/**/*.js"
}
//Task - Clean Remove the pub folder
function clean() {
   return del(['pub/']);
}
//Task - HTML
function html() {
    return src(files.htmlPath)
    .pipe(dest('pub'))
    .pipe(browsersync.stream());
}

//Task - concat and minify js files
function js() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('pub/js'))
    .pipe(browsersync.stream());
}

//Task - concat and minify css files
function css() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('pub/css'))
    //.pipe(browsersync.stream());
}

//Task - compress images
function images() {
    return src(files.imagesPath)
       .pipe(imagemin())
       .pipe(dest('pub/images'))
       //.pipe(browserSync.stream());
 }

 //Browsersync and watch
 function serve() {
    browsersync.init({
       server: 'pub/'
    });

    watch([files.htmlPath], { intervall: 1000 }, html);
    watch([files.cssPath], { intervall: 1000 }, css);
    watch([files.jsPath], {intervall: 1000 }, js);
    watch([files.imagesPath], {intervall: 1000 }, images);
}

/* Export all public tasks - type gulp <task> to use */
exports.clean = clean;
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.serve = serve;

/* Export default command - type gulp to use */
exports.default = series(clean, parallel(html, css, js, images), serve);
