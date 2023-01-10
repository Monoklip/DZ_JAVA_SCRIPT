import gulp from 'gulp';

//  pug
import GulpPug from 'gulp-pug';

//  styles
import sass from 'sass';
import gulpSass from 'gulp-sass';
const styleSass = gulpSass(sass);

// import minify from 'gulp-minify';
import autoPrefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';

//  scripts
import babel from 'gulp-babel';
import GulpUglify from 'gulp-uglify';
import concat from 'gulp-concat';

//  images
import imagemin from 'gulp-imagemin';

// fonts
// import fonts from 'gulp-fonts';

import browserSync from 'browser-sync';
import { deleteAsync } from 'del';

const { src, dest, series, parallel } = gulp;

const html = () => {
    return gulp.src('src/pug/*.pug')
        .pipe(GulpPug())
        .pipe(gulp.dest('build'))
}

//  sass, minification, autoprefixer, rename
const styles = () => {
    return gulp.src('src/styles/**/*.scss')
        .pipe(styleSass().on('error', styleSass.logError))
        .pipe(autoPrefixer())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/styles'));
}
const fonts = () =>{
    return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'))
}

const scripts = () => {
    return gulp.src('src/scripts/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(GulpUglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build/scripts'))
}

const images = () => {
    return gulp.src('src/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: './build',
        },
    });

    browserSync.watch('build', browserSync.reload);
}

const watch = () => {
    gulp.watch('src/pug/**/*.pug', html);
    gulp.watch('src/styles/**/*.scss', styles);
    gulp.watch('src/scripts/**/*.js', scripts);
    gulp.watch('src/images/**/*.*', images);
    gulp.watch('src/fonts/**/*.*', fonts);
}

const deleteBuild = (cb) => {
    deleteAsync(['build/**']).then(() => cb());
}

export default series(
    deleteBuild,
    parallel(html, styles, scripts, images, fonts),
    parallel(server, watch)
)
