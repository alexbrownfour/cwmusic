var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        // server: {
        //             baseDir: "."
        //         },
                port: 3002,                      //this can be any port, it will show our app
                proxy: 'localhost:8081', //this is the port where express server works
                ui: {port: 3003},                //UI, can be any port
                reloadDelay: 1000 
    });
});

gulp.task('sass', function () {
    return gulp.src('public/css/**/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('css'))
                .pipe(browserSync.reload({stream: true}));
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src([
        'public/js/*.js'])
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['browser-sync'], function (done) {
    gulp.watch('public/css/**/*.scss', browserSync.reload);
    gulp.watch('views/**/*', browserSync.reload);
    gulp.watch('public/js/*.js', browserSync.reload);
    gulp.watch('public/images/*', browserSync.reload);
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("public/css/**/*.scss", ['sass']);
    gulp.watch("views/**/*.pug").on('change', browserSync.reload);
});

gulp.task('default', ['js-watch', 'watch'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.

});


// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
// var browserify = require('gulp-browserify');
// var uglify = require('gulp-uglify');

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./app"
//     });

//     gulp.watch("app/scss/*.scss", ['sass']);
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("app/scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("app/css"))
//         .pipe(browserSync.stream());
// });


// // process JS files and return the stream.
// gulp.task('js', function () {
//     console.log(`Running gulp js task ✔`);
//     return gulp.src('js/*js')
//         .pipe(browserify())
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// // create a task that ensures the `js` task is complete before
// // reloading browsers
// gulp.task('js-watch', ['js'], function (done) {
//     console.log(`Running gulp js-watch task ✔`);
//     //browserSync.reload();
//     gulp.watch("scss/*.scss", ['sass']);
//     gulp.watch("*.html").on('change', browserSync.reload);
//     console.log(`Browser reload triggered 🕐`);
//     done();
// });

// // use default task to launch Browsersync and watch JS files
// gulp.task('default', ['js'], function () {
//     console.log(`Running default gulp task ✔`);
//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "."
//         },
//        port: 3002,                      //this can be any port, it will show our app
//        proxy: 'localhost:8081', //this is the port where express server works
//        ws: true,
//        ui: {port: 3003},                //UI, can be any port
//        reloadDelay: 10   
//     });

//     // add browserSync.reload to the tasks array to make
//     // all browsers reload after tasks are complete.
//     gulp.watch("js/*.js", ['js-watch']);
// });


// // var gulp = require('gulp');

// // var nodemon = require('gulp-nodemon');
// // var browserSync = require('browser-sync').create();



// // gulp.task('gulp_nodemon', function () {
// //   nodemon({
// //   script: 'app.js'           //this is where my express server is
// //   , ext: 'js pug scss'          //nodemon watches *.js, *.html and *.css files
// //   , env: { 'NODE_ENV': 'development' }
// //   });
// // });

// // gulp.task('sync', function(){
// //   browserSync.init({
// //   port: 3002,                      //this can be any port, it will show our app
// //   proxy: 'localhost:8081', //this is the port where express server works
// //   ui: {port: 3003},                //UI, can be any port
// //   reloadDelay: 1000                //Important, otherwise syncing will not work
// //   });
// //   gulp.watch(['./**/*.js', './**/*.pug', './**/*.scss']).on("change",
// //   browserSync.reload);
// // });

// // gulp.task('default', ['gulp_nodemon', 'sync']);