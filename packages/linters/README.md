# Linters

This runs the known linters that have been loaded via `meteor npm install --save-dev`. 

## Pseudocode

    const exclusions = ...
    const linters = {
      'eslint' : (module) => {
          const files = [jsFiles].minus(exclusions)
          module.doLint(files)
      },
      <other linter>: (module) => { ... }
    }
    for (linter : linters) {
      try {
        const linter = require(linter.key)
        linter.value(linter)
      } catch (e) {
        if (!(e instanceof Error && e.code === "MODULE_NOT_FOUND")) {
          throw e
        }
      }
    }

## Excluded files

The following file patterns are excluded when linters are executed.

- `node_modules/**`
- `private/**`
- `public/**`
- `.meteor/**`
- `package/**`
