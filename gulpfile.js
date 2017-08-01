var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var gutil = require('gulp-util');

function runProtractorConfig() {
	gutil.env.browser ? process.env.BROWSER = gutil.env.browser : process.env.BROWSER = 'chrome';
	gutil.env.tags ? process.env.TAGS = gutil.env.tags : process.env.TAGS = '@Ibiza';
    return gulp.src("features/*.feature")
        .pipe(protractor({
            configFile: "config/config.js"
        }))
		.on('end', function() {
            console.log("Task finished!");
        })
}

gulp.task('run', runProtractorConfig);