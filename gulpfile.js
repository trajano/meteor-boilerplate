if (typeof Meteor === typeof undefined) {
  'use strict'

  var gulp = require('gulp'),
    eol = require('gulp-eol'),
    esFormatter = require('gulp-esformatter'),
    esLint = require('gulp-eslint'),
    jsonFormat = require('gulp-json-format')

  // Excluded sources.
  var excludedSrcs = [
    '!node_modules/**',
    '!public/**',
    '!**/*.min.*'
  ]

  // JavaScript sources
  var jsSrc = ['**/*.js'].concat(excludedSrcs)

  // JSON sources
  var jsonSrc = ['**/*.json', '**/.eslintrc.json'].concat(excludedSrcs)

  // ES Formatter options
  var esFormatterOptions = {
    plugins: [
      'esformatter-asi',
      'esformatter-limit-linebreaks',
      'esformatter-quotes',
      'esformatter-quote-props',
      'esformatter-remove-trailing-commas'
    ],
    LimitLineBreaks: 2,
    quotes: {
      type: 'single'
    }
  }

  gulp.task('lint', function() {
    return gulp.src(['**/*.js'].concat(excludedSrcs))
      .pipe(esLint())
      .pipe(esLint.format())
  })

  gulp.task('tidy', ['format-json', 'format-js'])
  gulp.task('format-json', function() {
    return gulp.src(['**/*.json'].concat(excludedSrcs))
      .pipe(jsonFormat(2))
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })
  gulp.task('format-js', function() {
    return gulp.src(['**/*.js'].concat(excludedSrcs))
      .pipe(esFormatter(esFormatterOptions))
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })

  gulp.task('default', ['lint'])

}
