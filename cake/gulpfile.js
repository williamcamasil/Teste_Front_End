var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var cssmin = require( 'gulp-cssmin' );

gulp.task( 'compressor', function(){
    gulp.src( 'src/assets/css/style.css' )
    .pipe( cssmin() )
    .pipe( rename( {suffix: '.min' } ) )
    .pipe( gulp.dest( 'src/assets/css/' ) )
});

gulp.task( 'auto_compressor', function(){
    gulp.watch( 'src/assets/css/style.css', ['compressor'] )
})
