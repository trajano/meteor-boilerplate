if (typeof Meteor === typeof undefined) {
  /**
   * Override `require` so Meteor will not process it.
   * @type {require}
   */
  var r = require

  var gulp = r('gulp-task-doc')
  var watch = r('gulp-watch')
  var batch = r('gulp-batch')
  var _ = r('lodash')

  // Linters
  var esLint = r('gulp-eslint')
  var htmlLint = r('gulp-htmllint')
  var lessHint = r('gulp-lesshint')
  var jsonLint = r('gulp-jsonlint')

  // Formatters
  var cssComb = r('gulp-csscomb')
  var eol = r('gulp-eol')
  var esFormatter = r('gulp-esformatter')
  var htmlPrettify = r('gulp-html-prettify')
  var jsonFormat = r('gulp-json-format')

  // Documenters
  var esDoc = r('gulp-esdoc')

  /**
   * Files excluded from the source globs.
   * @type {string[]}
   */
  var excludedSrcs = [
    '!node_modules/**',
    '!private/**',
    '!public/**',
    '!.*/**',
    '!**/*.min.*'
  ]

  // Sources
  var cssSrc = ['**/*.css', '**/*.less'].concat(excludedSrcs)
  var htmlSrc = ['**/*.html'].concat(excludedSrcs)
  var jsSrc = ['**/*.js'].concat(excludedSrcs)
  var jsonSrc = ['**/*.json', '**/.eslintrc.json', '.esformatter'].concat(excludedSrcs)

  // All source files
  var allSrc = _.sortedUniq([].concat(cssSrc).concat(htmlSrc).concat(jsSrc).concat(jsonSrc))

  /**
   * Generate documentation.
   */
  gulp.task('doc', ['doc-js'])
  /**
   * Generate EcmaScript documentation.
   * @verbose
   */
  gulp.task('doc-js', function () {
    return gulp.src(['.'])
      .pipe(esDoc({
        excludes: ['node_modules', 'public', '\\.meteor', 'packages'],
        destination: 'public/apidocs/'
      }))
  })

  /**
   * Check code style conformance.
   */
  gulp.task('lint', ['lint-css', 'lint-html', 'lint-js', 'lint-json'])
  /**
   * Check LESS/CSS code style conformance.
   * @verbose
   */
  gulp.task('lint-css', function () {
    return gulp.src(cssSrc)
      .pipe(lessHint()).pipe(lessHint.reporter())
  })
  /**
   * Check HTML code style conformance.
   * @verbose
   */
  gulp.task('lint-html', function () {
    return gulp.src(htmlSrc)
      .pipe(htmlLint({
        failOnError: true
      }))
  })
  /**
   * Check EcmaScript code style conformance.
   * @verbose
   */
  gulp.task('lint-js', function () {
    return gulp.src(jsSrc)
      .pipe(esLint())
      .pipe(esLint.format())
      .pipe(esLint.failAfterError())
  })
  /**
   * Check JSON code style conformance.
   * @verbose
   */
  gulp.task('lint-json', function () {
    return gulp.src(jsonSrc)
      .pipe(jsonLint())
      .pipe(jsonLint.reporter())
      .pipe(jsonLint.failOnError())
  })

  /**
   * Format source files.
   */
  gulp.task('tidy', ['tidy-css', 'tidy-html', 'tidy-js', 'tidy-json'])
  /**
   * Format CSS source files.
   * @verbose
   */
  gulp.task('tidy-css', function () {
    return gulp.src(cssSrc)
      .pipe(cssComb())
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })
  /**
   * Format HTML source files.
   * @verbose
   */
  gulp.task('tidy-html', function () {
    return gulp.src(htmlSrc)
      .pipe(htmlPrettify({
        indent_char: ' ',
        indent_size: 2
      }))
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })
  /**
   * Format EcmaScript source files.
   * @verbose
   */
  gulp.task('tidy-js', function () {
    return gulp.src(jsSrc)
      .pipe(esFormatter())
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })
  /**
   * Format JSON source files.
   * @verbose
   */
  gulp.task('tidy-json', function () {
    return gulp.src(jsonSrc)
      .pipe(jsonFormat(2))
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })

  /**
   * Trigger `default` task on source file change.
   */
  gulp.task('watch', function () {
    watch(allSrc, batch(function (events, done) {
      gulp.start('default', done)
    }))
  })

  /**
   * Default: `lint` and `doc`.
   */
  gulp.task('default', ['lint', 'doc'])

  /**
   * Display this help.
   */
  gulp.task('help', gulp.help())
}
