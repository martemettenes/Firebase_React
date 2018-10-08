var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/Components/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/Components/css'))
  });

  gulp.task('watch', function(){
      gulp.watch('src/components/scss/*.scss', ['sass']);
    //gulp.watch('src/Components/scss/*.scss', gulp.series('sass'))
    // Other watchers
  })

