/**
 * Fork of https://github.com/Urigo/angular-blaze-template by Urigo
 * MIT license applies on this file.
 */
import module from './module.js'
import { Blaze } from 'meteor/blaze'
import { Template } from 'meteor/templating'

angular.module(module.name)
  .directive('blazeTemplate', ($compile, $log) => ({
    restrict: 'AE',
    scope: false,
    /**
     * @param {$rootScope.Scope} scope
     * @param {jQuery} element element where the Blaze template will be attached to.
     * @param {{name: string, blazeTemplate: string, replace:boolean}} attrs
       */
    link: (scope, element, attrs) => {
      const name = attrs.blazeTemplate || attrs.name
      if (name && Template[name]) {
        const template = Template[name]
        let viewHandler

        if (angular.isDefined(attrs.replace)) {
          viewHandler = Blaze.renderWithData(template, scope, element.parent()[0], element[0])
          element.remove()
        } else {
          viewHandler = Blaze.renderWithData(template, scope, element[0])
          $compile(element.contents())(scope)
          element.find().unwrap()
        }

        scope.$on('$destroy', () => {
          Blaze.remove(viewHandler)
        })
      } else {
        $log.error(`blazeTemplate: There is no template with the name '${name}'`)
      }
    }
  }))
