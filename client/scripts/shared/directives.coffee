'use strict';

angular.module('app.directives', [])

.directive('imgHolder', [ ->
    return {
        restrict: 'A'
        link: (scope, ele, attrs) ->
            Holder.run(
                images: ele[0]
            )
    }
])


.directive('uiBook', [ ->
    return {
        restrict: 'AE'
        scope: {url: '@', author: '@', title: '@', bookClick: '&'},
        replace: true,
        template: '<a href="#/books/any-book" ng-click="bookClick()">
                    <img style="height: 220px; width: 150px" src="{{ url }}" alt="" class="img-responsive" />
                    </a>'
    }
  ])

.directive('ulSlider', [ ->
    return {
       restrict: 'A'
       link: (scope, ele, attrs) ->
          ele.sliderNav()
    }
])

.directive('uiGroup', [ ->
    return {
    restrict: 'AE'
    scope: {url: '@', name: '@', color: '@'},
    replace: true,
    template:'<section class="panel panel-box" style="width: 150px;height: 150px">
            <div class="panel-top bg-{{ color }}">
                <a href="#/groups/any-group"><img class="img-responsive" src="{{ url }}"></a>
            </div>
            <div class="panel-bottom bg-reverse">
                <a href="#/groups/any-group"><strong>{{ name }}</strong></a>
              </div>
            </section>'
    }
  ])

.directive('uiMember', [ ->
    return {
    restrict: 'AE'
    scope: {url: '@', name: '@', color: '@', size: '@'},
    replace: true,
    template:'<section class="panel panel-box" style="width: {{ size }}px;height: {{ size }}px">
                <div class="panel-top bg-{{ color }}">
                    <a href="#/members/{{main.name}}/profile"><img class="img-responsive" src="{{ url }}"></a>
                </div>
              </section>'
    }
  ])

.directive('wrTimeline', [ ->
    return {
    restrict: 'AE'
    scope: {data: '=', alt: '='},
    replace: true,
    template: '<article class="tl-item {{ alt }}">
                <div class="tl-body">
                    <div class="tl-entry">
                        <div class="wr-icon"><a href=""><img class="img-circle img-responsive" src="{{ data.url }}"></a></div>
                        <div class="tl-content">
                            <a href="#/write-ups/any-write-up"> <h4 class="tl-tile">{{ data.title }}</h4></a>
                            <h5><strong>By <a href="">{{ data.author }}</a></strong></h5>
                            <ul class="list-inline list-unstyled">
                                <li><div class="round-icon sm bg-warning"><i class="fa fa-comments"></i></div></li>
                                <li><div class="round-icon sm bg-bright"><strong>{{ data.comments }}</strong></div></li>
                                <li><div class="round-icon sm bg-success"><i class="fa fa-thumbs-up"></i></div></li>
                                <li><div class="round-icon sm bg-bright"><strong>{{ data.likes }}</strong></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>'
    }
  ])

# add class for specific pages
.directive('customPage', () ->
    return {
        restrict: "A"
        controller: [
            '$scope', '$element', '$location'
            ($scope, $element, $location) ->
                path = ->
                    return $location.path()

                addBg = (path) ->
                    # remove all the classes
                    $element.removeClass('body-wide body-lock')

                    # add certain class based on path
                    switch path
                        when '/404', '500', '/login', '/sign-up', '/forgot-password' then $element.addClass('body-wide')
                        when '/lock' then $element.addClass('body-wide body-lock')

                addBg( $location.path() )

                $scope.$watch(path, (newVal, oldVal) ->
                    if newVal is oldVal
                        return
                    addBg($location.path())
                )
        ]
    }
)

# switch stylesheet file
.directive('uiColorSwitch', [ ->
    return {
        restrict: 'A'
        link: (scope, ele, attrs) ->
            ele.find('.color-option').on('click', (event)->
                $this = $(this)
                hrefUrl = undefined

                style = $this.data('style')
                if style is 'loulou'
                    hrefUrl = 'styles/main.css'
                    $('link[href^="styles/main"]').attr('href',hrefUrl)
                else if style
                    style = '-' + style
                    hrefUrl = 'styles/main' + style + '.css'
                    $('link[href^="styles/main"]').attr('href',hrefUrl)
                else
                    return false

                event.preventDefault()
            )
    }
])

.directive('uiTime', [ ->
    return {
    restrict: 'A'
    link: (scope, ele) ->
      startTime = ->
        today = new Date()
        h = today.getHours()
        m = today.getMinutes()
        s = today.getSeconds()

        m = checkTime(m)
        s = checkTime(s)

        time = h+":"+m+":"+s
        ele.html(time)
        t = setTimeout(startTime,500)
      checkTime = (i) -> # add a zero in front of numbers<10
        if (i<10) then i = "0" + i
        return i

      startTime()
    }
  ])

.directive('uiNotCloseOnClick', [ ->
    return {
    restrict: 'A'
    compile: (ele, attrs) ->
      ele.on('click', (event) ->
        event.stopPropagation()
      )
    }
  ])

.directive('slimScroll', [ ->
    return {
    restrict: 'A'
    link: (scope, ele, attrs) ->
      ele.slimScroll({
        height: attrs.scrollHeight || '100%',
        width: '100%'
      })
    }
  ])

.directive('uiRangeSlider', [ ->
    return {
    restrict: 'A'
    link: (scope, ele) ->
      ele.slider()
    }
  ])

.directive('validateEquals', [ () ->
    return {
    require: 'ngModel'
    link: (scope, ele, attrs, ngModelCtrl) ->
      validateEqual = (value) ->
        valid = ( value is scope.$eval(attrs.validateEquals) )
        ngModelCtrl.$setValidity('equal', valid)
        return valid? value : undefined

      ngModelCtrl.$parsers.push(validateEqual)
      ngModelCtrl.$formatters.push(validateEqual)

      scope.$watch(attrs.validateEquals, (newValue, oldValue) ->
        if newValue isnt oldValue # so that watch only fire after change, otherwise watch will fire on load and add invalid style to "confirm" input box
          ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue)
      )
    }
  ])

# Dependency: https://github.com/grevory/bootstrap-file-input
.directive('uiFileUpload', [ ->
    return {
    restrict: 'A'
    link: (scope, ele) ->
      ele.bootstrapFileInput()
    }
  ])

# Dependency: https://github.com/xixilive/jquery-spinner
.directive('uiSpinner', [ ->
    return {
    restrict: 'A'
    compile: (ele, attrs) -> # link and compile do not work together
      ele.addClass('ui-spinner')

      return {
      post: ->
        ele.spinner()
      }

    # link: (scope, ele) -> # link and compile do not work together
    }

  ])

# history back button
.directive('goBack', [ ->
    return {
        restrict: "A"
        controller: [
            '$scope', '$element', '$window'
            ($scope, $element, $window) ->
                $element.on('click', ->
                    $window.history.back()
                )
        ]
    }
])

