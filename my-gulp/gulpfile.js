const { src, dest, watch, series } = require('gulp');
const htmlClean = require('gulp-htmlclean');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const stripDebug = require('gulp-strip-debug');
// const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');

const floder = {
    src: 'src/',
    dest: 'dist/',
};

function html(cb) {
    return src(floder.src + 'html/*')
        .pipe(htmlClean())
        .pipe(dest(floder.dest + 'html/'))
        .pipe(connect.reload());
}
function css(cb) {
    return src(floder.src + 'css/*')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(dest(floder.dest + 'css/'))
        .pipe(connect.reload());
}
function js(cb) {
    return src(floder.src + 'js/*')
        .pipe(stripDebug())
        .pipe(dest(floder.dest + 'js/'))
        .pipe(connect.reload());
}
function image(cb) {
    return src(floder.src + 'image/*')
        .pipe(dest(floder.dest + 'image/'))
        .pipe(connect.reload());
}
function server(cb) {
    connect.server({
        port: 12306,
        livereload: true,
    });
    cb();
}
watch(floder.src + 'html/*', {}, function (cb) {
    html();
    cb();
});
watch(floder.src + 'css/*', {}, function (cb) {
    css();
    cb();
});
watch(floder.src + 'js/*', {}, function (cb) {
    js();
    cb();
});

exports.default = series(html, css, js, server);

// const { series, parallel, src, dest, watch } = require('gulp');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
// exports.default = function () {
//     return src('src/js/*.js')
//         .pipe(dest('dist/js'))
//         .pipe(uglify())
//         .pipe(
//             rename({
//                 extname: '.min.js',
//             })
//         )
//         .pipe(dest('dist/js'));
// };
// watch(
//     'src/css/*',
//     {
//         delay: 2000,
//     },
//     function (cb) {
//         console.log('文件被修改了!');
//         cb();
//     }
// );

// function html(cb) {
//     console.log('html执行了');
//     cb();
// }
// function css(cb) {
//     console.log('css执行了');
//     cb();
// }
// function js(cb) {
//     console.log('js执行了');
//     cb();
// }

// exports.default = series(js, css, html);
// exports.default = parallel(js, series(html, css));
// exports.default = series(js, parallel(html, css));

// function fn1(cb) {
//     console.log('fn1呗调用了!');
//     cb();
// }
// function fn2(cb) {
//     console.log('fn2被调用了！');
//     cb();
// }
// exports.build = fn1;
// exports.default = series(fn1, fn2);
