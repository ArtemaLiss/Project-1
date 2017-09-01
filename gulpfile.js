var gulp 			= require('gulp'),
	browserSync 	= require('browser-sync'),
	concat			= require('gulp-concat'),
	cssnano			= require('gulp-cssnano'),
	less			= require('gulp-less'),
	rename			= require('gulp-rename'),
	jsnano			= require('gulp-uglifyjs'),
	smartGrid		= require('smart-grid'),
	groupCssMedia	= require('gulp-group-css-media-queries'),
	del				= require('del'),
	connectPhp		= require('gulp-connect-php'),
	plumber			= require('gulp-plumber'),
	clean			= require('gulp-clean'),
	pug				= require('gulp-pug');

gulp.task('less', ['concat-less'] ,function() {
	return gulp.src('app/less/*.less')
	.pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest('app/css'));
});

gulp.task('concat-less',function() {
	return gulp.src([
			'app/less/main.less',
			'app/less/adaptive.less'
		])
	.pipe(concat('main.concat.less'))
	.pipe(gulp.dest('app/less'));
});

gulp.task('cssnano', ['less'] ,function() {
	return gulp.src('app/css/main.concat.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('jsnano', function() {
	return gulp.src('app/scripts/common.js')
	.pipe(plumber())
	.pipe(concat('common.min.js'))
	.pipe(jsnano())
	.pipe(gulp.dest('app/scripts'))
	.pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
	browserSync.init ({
		server: {
			baseDir: 'app'
		},
//		proxy: './',
		notify: false
	});
});


gulp.task('js-min-libs', function() {
	return gulp.src('app/libs/not-min/*.js')
	.pipe(jsnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/libs/'));
});

gulp.task('css-min-libs', function() {
	return gulp.src('app/libs/not-min/*.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/libs/'));
});

gulp.task('smartGrid', function() {
	var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
            fields: '30px' /* side fields */
        },
        md: {
            width: '960px',
            fields: '15px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '560px',
            fields: '15px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};
 
smartGrid('app/libs/', settings);
});

gulp.task('group-css-media', ['cssnano'] ,function() {
	return gulp.src('app/css/main.concat.min.css')
	.pipe(groupCssMedia())
    .pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('cleanDist', function() {
	return del.sync('dist');
});

gulp.task('clean', function() {
	return gulp.src('app/css/*.css')
	.pipe(clean());
});

gulp.task('pug', function() {
	return gulp.src('app/*.pug')
	.pipe(plumber())
	.pipe(pug({
		pretty: true	
	}))
	.pipe(gulp.dest('app/'));
});

gulp.task('build-project', ['cleanDist'] ,function() {
	var buildCss = gulp.src('app/css/*.css')
	.pipe(gulp.dest('dist/css'));
	var buildLess = gulp.src('app/less/*.less')
	.pipe(gulp.dest('dist/less'));
	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
	var buildImgs = gulp.src('app/imgs/**/*')
	.pipe(gulp.dest('dist/imgs'));
	var buildScripts = gulp.src('app/scripts/*.js')
	.pipe(gulp.dest('dist/scripts'));
	var buildLibs = gulp.src([
		'app/libs/**/*',
		'!app/libs/**/*.txt',
		'!app/libs/**/*.json',
		'!app/libs/**/*.md'
	])
	.pipe(gulp.dest('dist/libs'));
	var buildMain = gulp.src('app/*.php')
	.pipe(gulp.dest('dist'));
});

gulp.task('default-exe', ['jsnano', 'browser-sync', 'clean', 'group-css-media', 'pug'],function() {
	gulp.watch('app/**/*.less', ['group-css-media']);
	gulp.watch('app/**/*.js', ['jsnano']);
	gulp.watch('app/**/*.pug', ['pug']);
	gulp.watch('app/**/*.html', function() {
		return gulp.src('')
		.pipe(plumber())
		.pipe(browserSync.stream());
	});
	gulp.watch('app/**/*.php', function() {
		return gulp.src('')
		.pipe(plumber())
		.pipe(browserSync.stream());
	});
});
		
		