var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
function defaultTask () {
  browserSync.init({
    port: 8888,
    server: {
        baseDir: "./"
    },
    ui: false
  });
  gulp.watch("*.js").on("change", reload);
  gulp.watch("*.css").on("change", reload);
  gulp.watch("*.html").on("change", reload);
};

exports.default = defaultTask