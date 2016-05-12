/* globals Npm, Plugin */
import process from 'process'
import _ from 'underscore'

const linters = {
  eslint: {
    extensions: ['js'],
    processor: (npmModule, files) => {
      const cli = new npmModule.CLIEngine()
      const linter = npmModule.linter
      _.each(files, (file) => {
        // eslint-disable-next-line no-underscore-dangle
        const source = file._source
        const config = cli.getConfigForFile(source.relPath)
        const messages = linter.verify(source.contents.toString(), config, source.relPath)

        _.each(messages, (message) => {
          file.error(message)
        })
      })
    }
  },
  htmllint: {
    extensions: ['html'],
    processor: (npmModule, files) => {
      const lint = npmModule
      _.each(files, (file) => {
        // eslint-disable-next-line no-underscore-dangle
        const source = file._source
        lint(source.contents.toString()).then((report) => {
          console.log(source.relPath, report)
        })

      })
    }
  }
}

_.each(linters, registerLinter)

class Linter {
  constructor (processor, npmModule) {
    this.processor = processor
    this.module = npmModule
    this.processedPaths = []
  }
  processFilesForPackage (files, options) {
    const globals = options.globals

    const filteredFiles = files.filter((file) => {
      // eslint-disable-next-line no-underscore-dangle
      const source = file._source
      const path = source.relPath
      if (this.processedPaths.indexOf(path) > -1) {
        return false
      }
      if (source.package !== null) {
        return false
      }
      this.processedPaths.push(path)
      return !(path.startsWith('node_modules/') ||
        path.startsWith('private/') ||
        path.startsWith('packages/') ||
        path.startsWith('public/') ||
        path.indexOf('.min.') > -1)
    })

    if (filteredFiles.length > 0) {
      this.processor(this.module, filteredFiles)
    }
  }
}
function registerLinter (config, moduleName) {
  Plugin.registerLinter({
    extensions: config.extensions
  }, () => {
    return new Linter(config.processor, Npm.require(`${process.cwd()}/node_modules/${moduleName}`))
  })
}
