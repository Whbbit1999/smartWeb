const { src, dest, watch } = require('gulp');
const rename = require('gulp-rename')

const htmlmin = require('gulp-htmlmin');

const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const img = require('gulp-imagemin');

function copyIndex() {
    return src('./src/index.html')
        .pipe(dest('./dist'));
}
function fnHtml() {
    return src('./src/pages/**/*')
        .pipe(htmlmin())
        .pipe(dest('./dist/pages'))
}

function fnCss() {
    return src('./src/style/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('./dist/style'))
}

function fnJs() {
    return src('./src/js/**/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('./dist/js'))
}

function fnImg() {
    return src('./src/img/**/*')
        .pipe(img())
        .pipe(dest('./dist/img'))
}

function copyLib() {
    return src('./src/lib/**/*')
        .pipe(dest('./dist/lib'));
}

function fnWatch() {
    watch('./src/index.html', copyIndex);
    watch('./src/pages/**/*', fnHtml);
    watch('./src/style/**/*.scss', fnCss);
    watch('./src/js/**/*.js', fnJs);
    watch('./src/lib/**/*', copyLib);
}

exports.index = copyIndex
exports.html = fnHtml
exports.css = fnCss
exports.js = fnJs
exports.img = fnImg
exports.lib = copyLib
exports.default = fnWatch

