'use strict';

angular.module('app.controllers', [])

# overall control
.controller('AppCtrl', [
    '$scope', '$rootScope'
    ($scope, $rootScope) ->
        $window = $(window)

        $scope.main =
            brand: 'Takada'
            name: 'Ikem Okonkwo' # those which uses i18n directive can not be replaced for now.
            slug: 'ikem-okonkwo'

        $scope.admin =
            layout: 'boxed'          # 'boxed', 'wide'
            menu: 'horizontal'        # 'horizontal', 'vertical'
            fixedHeader: true       # true, false
            fixedSidebar: false     # true, false

        $scope.$watch('admin', (newVal, oldVal) ->
            # manually trigger resize event to force morris charts to resize, a significant performance impact, enable for demo purpose only
            # if newVal.menu isnt oldVal.menu || newVal.layout isnt oldVal.layout
            #      $window.trigger('resize')

            if newVal.menu is 'horizontal' && oldVal.menu is 'vertical'
                 $rootScope.$broadcast('nav:reset')
                 return
            if newVal.fixedHeader is false && newVal.fixedSidebar is true
                if oldVal.fixedHeader is false && oldVal.fixedSidebar is false
                    $scope.admin.fixedHeader = true 
                    $scope.admin.fixedSidebar = true 
                if oldVal.fixedHeader is true && oldVal.fixedSidebar is true
                    $scope.admin.fixedHeader = false 
                    $scope.admin.fixedSidebar = false 
                return
            if newVal.fixedSidebar is true
                $scope.admin.fixedHeader = true
            if newVal.fixedHeader is false 
                $scope.admin.fixedSidebar = false

            return
        , true)

        $scope.color =
            primary:    '#1BB7A0'
            success:    '#94B758'
            info:       '#56BDF1'
            infoAlt:    '#7F6EC7'
            warning:    '#F3C536'
            danger:     '#FA7B58'

])

.controller('HeaderCtrl', [
    '$scope'
    ($scope) ->

        $scope.introOptions =
            steps: [
                element: '#step1',
                intro: "<strong>Heads up!</strong> You can change the layout here"
                position: 'bottom'
            ,
                element: '#step2'
                intro: "Select a different language",
                position: 'right'
            ,
                element: '#step3'
                intro: "Runnable task App",
                position: 'left'
            ,
                element: '#step4'
                intro: "Collapsed nav for both horizontal nav and vertical nav",
                position: 'right'
            ]


])

.controller('NavContainerCtrl', [
    '$scope'
    ($scope) ->


])
.controller('NavCtrl', [
    '$scope', 'taskStorage', 'filterFilter'
    ($scope, taskStorage, filterFilter) ->
        # init
        tasks = $scope.tasks = taskStorage.get()
        $scope.taskRemainingCount = filterFilter(tasks, {completed: false}).length

        $scope.$on('taskRemaining:changed', (event, count) ->
            $scope.taskRemainingCount = count
        )
])

.controller('DashboardCtrl', [
    '$scope'
    ($scope) ->

])

.controller('DatepickerDemoCtrl', [
    '$scope'
    ($scope) ->
      $scope.today = ->
        $scope.dt = new Date()
      $scope.today()

      $scope.showWeeks = true
      $scope.toggleWeeks = ->
        $scope.showWeeks = ! $scope.showWeeks

      $scope.clear = ->
        $scope.dt = null

      # Disable weekend selection
      $scope.disabled = (date, mode) ->
        return ( mode is 'day' && ( date.getDay() is 0 || date.getDay() is 6 ) )

      $scope.toggleMin = ->
        $scope.minDate = ( $scope.minDate ) ? null : new Date()
      $scope.toggleMin()

      $scope.open = ($event) ->
        $event.preventDefault()
        $event.stopPropagation()

        $scope.opened = true

      $scope.dateOptions = {
        'year-format': "'yy'"
        'starting-day': 1
      }

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate']
      $scope.format = $scope.formats[0]
  ])
.controller('TimepickerDemoCtrl', [
    '$scope'
    ($scope) ->
      $scope.mytime = new Date()

      $scope.hstep = 1
      $scope.mstep = 15

      $scope.options =
        hstep: [1, 2, 3]
        mstep: [1, 5, 10, 15, 25, 30]

      $scope.ismeridian = true
      $scope.toggleMode = ->
        $scope.ismeridian = ! $scope.ismeridian

      $scope.update = ->
        d = new Date()
        d.setHours( 14 )
        d.setMinutes( 0 )
        $scope.mytime = d

      $scope.changed = ->
        console.log('Time changed to: ' + $scope.mytime)

      $scope.clear = ->
        $scope.mytime = null
  ])
.controller('CollapseDemoCtrl', [
    '$scope'
    ($scope) ->
      $scope.isCollapsed = true
  ])