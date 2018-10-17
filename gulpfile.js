var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/Components/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/Components/'))
  });

  gulp.task('watch', function(){
      gulp.watch('src/Components/**/*.scss', ['sass']);
    //gulp.watch('src/Components/scss/*.scss', gulp.series('sass'))
    // Other watchers
  })

