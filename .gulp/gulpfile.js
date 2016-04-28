var gulp = require('gulp-task-doc')
var watch = require('gulp-watch')
var batch = require('gulp-batch')
var _ = require('lodash')

// Linters
var esLint = require('gulp-eslint')
var htmlLint = require('gulp-htmllint')
var lessHint = require('gulp-lesshint')
var jsonLint = require('gulp-jsonlint')

// Formatters
var cssComb = require('gulp-csscomb')
var eol = require('gulp-eol')
var esFormatter = require('gulp-esformatter')
var htmlPrettify = require('gulp-prettify')
var jsonFormat = require('gulp-json-format')

// Documenters
var jsDoc = require('gulp-jsdoc3')

/**
 * Files excluded from the source globs.
 * @type {string[]}
 */
var excludedSrcs = [
  '!node_modules/**',
  '!private/**',
  '!public/**',
  '!.meteor/**',
  '!**/*.min.*'
]

// Sources
var cssSrc = ['**/*.css', '**/*.less'].concat(excludedSrcs)
var htmlSrc = ['**/*.html'].concat(excludedSrcs)
var jsSrc = ['**/*.js'].concat(excludedSrcs)
var jsonSrc = ['**/*.json'].concat(excludedSrcs)

// Tidy Configuration Sources
var tidyConfigSrc = ['.csscomb.json', '.esformatter', '.htmllintrc']

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
gulp.task('doc-js', function (cb) {
  gulp.src(jsSrc.concat(['README.md', 'package.json']))
    .pipe(jsDoc({
      tags: {
        allowUnknownTags: true
      },
      source: {
        excludePattern: '(^|\\/|\\\\)_'
      },
      opts: {
        destination: './public/apidocs'
      },
      plugins: [
        'plugins/markdown'
      ],
      templates: {
        linenums: true,
        outputSourceFiles: true
      }
    }, cb))
})

/**
 * Check code style conformance.
 */
gulp.task('lint', ['lint-css', 'lint-html', 'lint-js', 'lint-json'])
/**
 * Check JSON code style conformance for tidy configuration files.
 * @verbose
 */
gulp.task('lint-config', function () {
  return gulp.src(tidyConfigSrc)
    .pipe(jsonLint())
    .pipe(jsonLint.reporter())
    .pipe(jsonLint.failOnError())
})
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
  return gulp.src(jsSrc, {
    dot: true
  }).pipe(esLint())
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
 * Format tidy configuration source files.  These are done first
 * before the others to prevent empty configuration files from being
 * read.  Configuration files are linted first to ensure they are valid.
 * @verbose
 */
gulp.task('tidy-config', ['lint-config'], function () {
  return gulp.src(tidyConfigSrc)
    .pipe(jsonFormat(2))
    .pipe(eol())
    .pipe(gulp.dest('.'))
})

/**
 * Format CSS source files.
 * @verbose
 */
gulp.task('tidy-css', ['tidy-config'], function () {
  return gulp.src(cssSrc)
    .pipe(cssComb())
    .pipe(eol())
    .pipe(gulp.dest('.'))
})

/**
 * Format HTML source files.
 * @verbose
 */
gulp.task('tidy-html', ['tidy-config'], function () {
  return gulp.src(htmlSrc)
    .pipe(htmlPrettify({
      indent_char: ' ',
      indent_size: 2,
      indent_inner_html: false,
      end_with_newline: true,
      max_preserve_newlines: 2
    }))
    .pipe(eol())
    .pipe(gulp.dest('.'))
})

/**
 * Format EcmaScript source files.
 * @verbose
 */
gulp.task('tidy-js', ['tidy-config'], function () {
  return gulp.src(jsSrc, {
    dot: true
  }).pipe(esFormatter())
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
