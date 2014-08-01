angular.module('app.service', [])
.factory('toast', [ ->

    # toastr setting.
    toastr.options =
      "closeButton": true
      "positionClass": "toast-bottom-right"
      "timeOut": "3000"

    logIt = (message, type) ->
      toastr[type](message)

    return {
    info: (message) ->
      logIt(message, 'info')
      # return is needed, otherwise AngularJS will error out 'Referencing a DOM node in Expression', thanks https://groups.google.com/forum/#!topic/angular/bsTbZ86WAY4
      return

    warning: (message) ->
      logIt(message, 'warning')
      return

    success: (message) ->
      logIt(message, 'success')
      return

    error: (message) ->
      logIt(message, 'error')
      return
    }
  ])
