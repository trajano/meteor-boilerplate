if (typeof Meteor === typeof undefined) {
  'use strict'

  var gulp = require('gulp')
  var eol = require('gulp-eol')
  var esFormatter = require('gulp-esformatter')
  var esLint = require('gulp-eslint')
  var jsonFormat = require('gulp-json-format')

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
    },
    whiteSpace: {
      before: {
        MemberExpressionOpening: 1
      },
      after: {
        FunctionName: 1,
        FunctionReservedWord: 1,
        MethodDefinitionName: 1
      }
    }
  }

  gulp.task('lint', function () {
    return gulp.src(jsSrc)
      .pipe(esLint())
      .pipe(esLint.format())
      .pipe(esLint.failAfterError())
  })

  gulp.task('tidy', ['format-json', 'format-js'])
  gulp.task('format-json', function () {
    return gulp.src(jsonSrc)
      .pipe(jsonFormat(2))
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })
  gulp.task('format-js', function () {
    return gulp.src(jsSrc)
      .pipe(esFormatter(esFormatterOptions))
      .pipe(eol())
      .pipe(gulp.dest('.'))
  })

  gulp.task('default', ['lint'])
}
