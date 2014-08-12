(function() {
  'use strict';
  angular.module('app', ['ngAnimate', 'ui.router', 'angularSmoothscroll', 'ui.bootstrap', 'textAngular', 'ngTagsInput', 'angular-intro', 'ngSanitize', 'ui.select', 'angularMoment', 'app.controllers', 'app.directives', 'app.filters', 'app.localization', 'app.nav', 'app.service', 'app.task', 'book.controllers', 'dashboard.controllers', 'group.controllers', 'member.controllers', 'user.controllers', 'write.controllers', 'news.controllers']).config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('landing', {
        url: '',
        templateUrl: 'views/landing.html'
      }).state('404', {
        url: '/404',
        templateUrl: 'views/error/404.html'
      }).state('login', {
        url: '/login',
        templateUrl: 'views/user/signin.html'
      }).state('lock', {
        url: '/lock',
        templateUrl: 'views/user/lock-screen.html'
      }).state('forget', {
        url: '/forgot-password',
        templateUrl: 'views/user/forgot-password.html'
      }).state('signup', {
        url: '/sign-up',
        templateUrl: 'views/user/signup.html'
      }).state('a', {
        abstract: true,
        templateUrl: 'views/account.html'
      }).state('a.profile', {
        abstract: true,
        url: '/profile',
        templateUrl: 'views/user/edit-profile.html'
      }).state('a.profile.basic', {
        url: '/basic',
        templateUrl: 'views/user/basic.html'
      }).state('a.profile.more', {
        url: '/more-detail',
        templateUrl: 'views/user/more.html'
      }).state('a.profile.pics', {
        url: '/picture',
        templateUrl: 'views/user/picture.html'
      }).state('a.dashboard', {
        abstract: true,
        templateUrl: 'views/dashboard/home.html'
      }).state('a.dashboard.all', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/all-activity.html'
      }).state('a.dashboard.me', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/me-activity.html'
      }).state('a.dashboard.group', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/group-activity.html'
      }).state('a.dashboard.book', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/book-activity.html'
      }).state('a.book', {
        url: '/books',
        abstract: true,
        templateUrl: 'views/book/home.html'
      }).state('a.book.featured', {
        url: '/featured',
        templateUrl: 'views/book/featured.html'
      }).state('a.book.popular', {
        url: '/popular',
        templateUrl: 'views/book/popular.html'
      }).state('a.book.genre', {
        url: '/genre',
        templateUrl: 'views/book/genre.html'
      }).state('a.book.search', {
        url: '/search',
        templateUrl: 'views/book/search.html'
      }).state('a.book.series', {
        url: '/series-list',
        templateUrl: 'views/book/series.html'
      }).state('a.new-book', {
        url: '/books/new',
        templateUrl: 'views/book/new.html'
      }).state('a.book.tags', {
        url: '/tags',
        templateUrl: 'views/book/tags.html'
      }).state('a.single-book', {
        url: '/books/{name}',
        abstract: true,
        templateUrl: 'views/book/single.html'
      }).state('a.single-book.home', {
        url: '/home',
        templateUrl: 'views/book/single-home.html'
      }).state('a.single-book.discussion', {
        url: '/discussions',
        templateUrl: 'views/book/single-discussion.html'
      }).state('a.single-book.people', {
        url: '/people',
        templateUrl: 'views/book/single-people.html'
      }).state('a.writing', {
        url: '/write-ups',
        abstract: true,
        templateUrl: 'views/write-up/home.html'
      }).state('a.new-writing', {
        url: '/write-ups/new',
        templateUrl: 'views/write-up/new.html'
      }).state('a.writing.popular', {
        url: '/popular',
        templateUrl: 'views/write-up/popular.html'
      }).state('a.writing.featured', {
        url: '/featured',
        templateUrl: 'views/write-up/featured.html'
      }).state('a.writing.search', {
        url: '/search',
        templateUrl: 'views/write-up/search.html'
      }).state('a.writing.genre', {
        url: '/genre',
        templateUrl: 'views/write-up/genre.html'
      }).state('a.writing.tags', {
        url: '/tags',
        templateUrl: 'views/write-up/tags.html'
      }).state('a.single-writing', {
        url: '/write-ups/{name}',
        templateUrl: 'views/write-up/single.html'
      }).state('a.group', {
        url: '/groups',
        abstract: true,
        templateUrl: 'views/group/home.html'
      }).state('a.new-group', {
        url: '/groups/new',
        templateUrl: 'views/group/new.html'
      }).state('a.group.popular', {
        url: '/popular',
        templateUrl: 'views/group/popular.html'
      }).state('a.group.newest', {
        url: '/newest',
        templateUrl: 'views/group/newest.html'
      }).state('a.group.search', {
        url: '/search',
        templateUrl: 'views/group/search.html'
      }).state('a.group.genre', {
        url: '/genre',
        templateUrl: 'views/group/genre.html'
      }).state('a.group.tags', {
        url: '/tags',
        templateUrl: 'views/group/tags.html'
      }).state('a.single-group', {
        url: '/groups/{name}',
        abstract: true,
        templateUrl: 'views/group/single.html'
      }).state('a.single-group.discussion', {
        url: '/discussions',
        templateUrl: 'views/group/single-discussions.html'
      }).state('a.single-group.activity', {
        url: '/activity',
        templateUrl: 'views/group/single-activity.html'
      }).state('a.single-group.members', {
        url: '/members',
        templateUrl: 'views/group/single-members.html'
      }).state('a.member', {
        url: '/members',
        abstract: true,
        templateUrl: 'views/member/home.html'
      }).state('a.member.active', {
        url: '/most-active',
        templateUrl: 'views/member/most-active.html'
      }).state('a.member.newest', {
        url: '/newest',
        templateUrl: 'views/member/newest.html'
      }).state('a.member.search', {
        url: '/search',
        templateUrl: 'views/member/search.html'
      }).state('a.single-member', {
        url: '/members/{name}',
        templateUrl: 'views/member/single.html'
      }).state('a.single-member.profile', {
        url: '/profile',
        templateUrl: 'views/my/profile.html'
      }).state('a.single-member.groups', {
        url: '/groups',
        templateUrl: 'views/my/groups.html'
      }).state('a.my-group.joined', {
        url: '/i-joined',
        templateUrl: 'views/my/groups-joined.html'
      }).state('a.my-group.owed', {
        url: '/i-owed',
        templateUrl: 'views/my/groups-owed.html'
      }).state('a.single-member.people', {
        url: '/members',
        templateUrl: 'views/my/people.html'
      }).state('a.my-people.followers', {
        url: '/followers',
        templateUrl: 'views/my/people-followers.html'
      }).state('a.my-people.following', {
        url: '/following',
        templateUrl: 'views/my/people-following'
      }).state('a.single-member.shelf', {
        url: '/shelf',
        templateUrl: 'views/my/shelf.html'
      }).state('a.my-shelf.read', {
        url: '/have-read',
        templateUrl: 'views/my/shelf-have-read.html'
      }).state('a.my-shelf.reading', {
        url: '/reading',
        templateUrl: 'views/my/shelf-reading'
      }).state('a.my-shelf.plan', {
        url: '/plan-to-read',
        templateUrl: 'views/my/shelf-plan-to-read.html'
      }).state('a.single-member.works', {
        url: '/works',
        templateUrl: 'views/my/works.html'
      }).state('a.news-type', {
        url: '/news/{type:(?:featured|latest|tags)}',
        templateUrl: 'views/news/list.html'
      }).state('a.news-type.single', {
        url: '/{title}',
        templateUrl: 'views/news/single.html'
      });
      $urlRouterProvider.when('/books/:name', '/books/:name/home');
      $urlRouterProvider.when('/groups/:name', '/groups/:name/activity');
      return $urlRouterProvider.otherwise('/404');
    }
  ]);

}).call(this);

;
(function() {
  'use strict';

  /*
  A simple AngularJS directive to render a smooth scroll effect
  Usage: <element smooth-scroll target='id' [offset='value']></element>
  @author: Arnaud BRETON (arnaud@videonot.es)
  Inspired by http://www.itnewb.com/tutorial/Create-the-Smooth-Scroll-Effect-with-JavaScript
   */
  angular.module('angularSmoothscroll', []).directive('smoothScroll', [
    '$log', '$timeout', '$window', function($log, $timeout, $window) {

      /*
      Retrieve the current vertical position
      @returns Current vertical position
       */
      var currentYPosition, elmYPosition, smoothScroll;
      currentYPosition = function() {
        if ($window.pageYOffset) {
          return $window.pageYOffset;
        }
        if ($window.document.documentElement && $window.document.documentElement.scrollTop) {
          return $window.document.documentElement.scrollTop;
        }
        if ($window.document.body.scrollTop) {
          return $window.document.body.scrollTop;
        }
        return 0;
      };

      /*
      Get the vertical position of a DOM element
      @param eID The DOM element id
      @returns The vertical position of element with id eID
       */
      elmYPosition = function(eID) {
        var elm, node, y;
        elm = document.getElementById(eID);
        if (elm) {
          y = elm.offsetTop;
          node = elm;
          while (node.offsetParent && node.offsetParent !== document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
          }
          return y;
        }
        return 0;
      };

      /*
      Smooth scroll to element with a specific ID without offset
      @param eID The element id to scroll to
      @param offSet Scrolling offset
       */
      smoothScroll = function(eID, offSet) {
        var distance, i, leapY, speed, startY, step, stopY, timer, _results;
        startY = currentYPosition();
        stopY = elmYPosition(eID) - offSet;
        distance = (stopY > startY ? stopY - startY : startY - stopY);
        if (distance < 100) {
          scrollTo(0, stopY);
          return;
        }
        speed = Math.round(distance / 100);
        if (speed >= 20) {
          speed = 20;
        }
        step = Math.round(distance / 25);
        leapY = (stopY > startY ? startY + step : startY - step);
        timer = 0;
        if (stopY > startY) {
          i = startY;
          while (i < stopY) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY += step;
            if (leapY > stopY) {
              leapY = stopY;
            }
            timer++;
            i += step;
          }
          return;
        }
        i = startY;
        _results = [];
        while (i > stopY) {
          setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
          leapY -= step;
          if (leapY < stopY) {
            leapY = stopY;
          }
          timer++;
          _results.push(i -= step);
        }
        return _results;
      };
      return {
        restrict: 'A',
        link: function(scope, element, attr) {
          return element.bind('click', function() {
            var offset;
            if (attr.target) {
              offset = attr.offset || 0;
              $log.log('Smooth scroll: scrolling to', attr.target, 'with offset', offset);
              return smoothScroll(attr.target, offset);
            } else {
              return $log.warn('Smooth scroll: no target specified');
            }
          });
        }
      };
    }
  ]);

}).call(this);

;
(function() {
  'use strict';
  angular.module('app.controllers', []).controller('AppCtrl', [
    '$scope', '$rootScope', function($scope, $rootScope) {
      var $window;
      $window = $(window);
      $scope.main = {
        brand: 'Takada',
        name: 'Ikem Okonkwo',
        slug: 'ikem-okonkwo'
      };
      $scope.admin = {
        layout: 'boxed',
        menu: 'horizontal',
        fixedHeader: true,
        fixedSidebar: false
      };
      $scope.$watch('admin', function(newVal, oldVal) {
        if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
          $rootScope.$broadcast('nav:reset');
          return;
        }
        if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
          if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
            $scope.admin.fixedHeader = true;
            $scope.admin.fixedSidebar = true;
          }
          if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
            $scope.admin.fixedHeader = false;
            $scope.admin.fixedSidebar = false;
          }
          return;
        }
        if (newVal.fixedSidebar === true) {
          $scope.admin.fixedHeader = true;
        }
        if (newVal.fixedHeader === false) {
          $scope.admin.fixedSidebar = false;
        }
      }, true);
      return $scope.color = {
        primary: '#1BB7A0',
        success: '#94B758',
        info: '#56BDF1',
        infoAlt: '#7F6EC7',
        warning: '#F3C536',
        danger: '#FA7B58'
      };
    }
  ]).controller('HeaderCtrl', [
    '$scope', function($scope) {
      return $scope.introOptions = {
        steps: [
          {
            element: '#step1',
            intro: "<strong>Heads up!</strong> You can change the layout here",
            position: 'bottom'
          }, {
            element: '#step2',
            intro: "Select a different language",
            position: 'right'
          }, {
            element: '#step3',
            intro: "Runnable task App",
            position: 'left'
          }, {
            element: '#step4',
            intro: "Collapsed nav for both horizontal nav and vertical nav",
            position: 'right'
          }
        ]
      };
    }
  ]).controller('NavContainerCtrl', ['$scope', function($scope) {}]).controller('NavCtrl', [
    '$scope', 'taskStorage', 'filterFilter', function($scope, taskStorage, filterFilter) {
      var tasks;
      tasks = $scope.tasks = taskStorage.get();
      $scope.taskRemainingCount = filterFilter(tasks, {
        completed: false
      }).length;
      return $scope.$on('taskRemaining:changed', function(event, count) {
        return $scope.taskRemainingCount = count;
      });
    }
  ]).controller('DashboardCtrl', ['$scope', function($scope) {}]).controller('DatepickerDemoCtrl', [
    '$scope', function($scope) {
      $scope.today = function() {
        return $scope.dt = new Date();
      };
      $scope.today();
      $scope.showWeeks = true;
      $scope.toggleWeeks = function() {
        return $scope.showWeeks = !$scope.showWeeks;
      };
      $scope.clear = function() {
        return $scope.dt = null;
      };
      $scope.disabled = function(date, mode) {
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      };
      $scope.toggleMin = function() {
        var _ref;
        return $scope.minDate = (_ref = $scope.minDate) != null ? _ref : {
          "null": new Date()
        };
      };
      $scope.toggleMin();
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return $scope.opened = true;
      };
      $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
      };
      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
      return $scope.format = $scope.formats[0];
    }
  ]).controller('TimepickerDemoCtrl', [
    '$scope', function($scope) {
      $scope.mytime = new Date();
      $scope.hstep = 1;
      $scope.mstep = 15;
      $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
      };
      $scope.ismeridian = true;
      $scope.toggleMode = function() {
        return $scope.ismeridian = !$scope.ismeridian;
      };
      $scope.update = function() {
        var d;
        d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        return $scope.mytime = d;
      };
      $scope.changed = function() {
        return console.log('Time changed to: ' + $scope.mytime);
      };
      return $scope.clear = function() {
        return $scope.mytime = null;
      };
    }
  ]).controller('CollapseDemoCtrl', [
    '$scope', function($scope) {
      return $scope.isCollapsed = true;
    }
  ]);

}).call(this);

;
(function() {
  'use strict';
  angular.module('app.directives', []).directive('imgHolder', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return Holder.run({
            images: ele[0]
          });
        }
      };
    }
  ]).directive('uiBook', [
    function() {
      return {
        restrict: 'AE',
        scope: {
          url: '@',
          author: '@',
          title: '@',
          bookClick: '&'
        },
        replace: true,
        template: '<a href="#/books/any-book" ng-click="bookClick()"> <img style="height: 220px; width: 150px" src="{{ url }}" alt="" class="img-responsive" /> </a>'
      };
    }
  ]).directive('ulSlider', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.sliderNav();
        }
      };
    }
  ]).directive('uiGroup', [
    function() {
      return {
        restrict: 'AE',
        scope: {
          url: '@',
          name: '@',
          color: '@'
        },
        replace: true,
        template: '<section class="panel panel-box" style="width: 150px;height: 150px"> <div class="panel-top bg-{{ color }}"> <a href="#/groups/any-group"><img class="img-responsive" src="{{ url }}"></a> </div> <div class="panel-bottom bg-reverse"> <a href="#/groups/any-group"><strong>{{ name }}</strong></a> </div> </section>'
      };
    }
  ]).directive('uiMember', [
    function() {
      return {
        restrict: 'AE',
        scope: {
          url: '@',
          name: '@',
          color: '@',
          size: '@'
        },
        replace: true,
        template: '<section class="panel panel-box" style="width: {{ size }}px;height: {{ size }}px"> <div class="panel-top bg-{{ color }}"> <a href="#/members/{{main.name}}/profile"><img class="img-responsive" src="{{ url }}"></a> </div> </section>'
      };
    }
  ]).directive('wrTimeline', [
    function() {
      return {
        restrict: 'AE',
        scope: {
          data: '=',
          alt: '='
        },
        replace: true,
        template: '<article class="tl-item {{ alt }}"> <div class="tl-body"> <div class="tl-entry"> <div class="wr-icon"><a href=""><img class="img-circle img-responsive" src="{{ data.url }}"></a></div> <div class="tl-content"> <a href="#/write-ups/any-write-up"> <h4 class="tl-tile">{{ data.title }}</h4></a> <h5><strong>By <a href="">{{ data.author }}</a></strong></h5> <ul class="list-inline list-unstyled"> <li><div class="round-icon sm bg-warning"><i class="fa fa-comments"></i></div></li> <li><div class="round-icon sm bg-bright"><strong>{{ data.comments }}</strong></div></li> <li><div class="round-icon sm bg-success"><i class="fa fa-thumbs-up"></i></div></li> <li><div class="round-icon sm bg-bright"><strong>{{ data.likes }}</strong></div></li> </ul> </div> </div> </div> </article>'
      };
    }
  ]).directive('customPage', function() {
    return {
      restrict: "A",
      controller: [
        '$scope', '$element', '$location', function($scope, $element, $location) {
          var addBg, path;
          path = function() {
            return $location.path();
          };
          addBg = function(path) {
            $element.removeClass('body-wide body-lock');
            switch (path) {
              case '/404':
              case '500':
              case '/login':
              case '/sign-up':
              case '/forgot-password':
                return $element.addClass('body-wide');
              case '/lock':
                return $element.addClass('body-wide body-lock');
            }
          };
          addBg($location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            return addBg($location.path());
          });
        }
      ]
    };
  }).directive('uiColorSwitch', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.find('.color-option').on('click', function(event) {
            var $this, hrefUrl, style;
            $this = $(this);
            hrefUrl = void 0;
            style = $this.data('style');
            if (style === 'loulou') {
              hrefUrl = 'styles/main.css';
              $('link[href^="styles/main"]').attr('href', hrefUrl);
            } else if (style) {
              style = '-' + style;
              hrefUrl = 'styles/main' + style + '.css';
              $('link[href^="styles/main"]').attr('href', hrefUrl);
            } else {
              return false;
            }
            return event.preventDefault();
          });
        }
      };
    }
  ]).directive('uiTime', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          var checkTime, startTime;
          startTime = function() {
            var h, m, s, t, time, today;
            today = new Date();
            h = today.getHours();
            m = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            time = h + ":" + m + ":" + s;
            ele.html(time);
            return t = setTimeout(startTime, 500);
          };
          checkTime = function(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          };
          return startTime();
        }
      };
    }
  ]).directive('uiNotCloseOnClick', [
    function() {
      return {
        restrict: 'A',
        compile: function(ele, attrs) {
          return ele.on('click', function(event) {
            return event.stopPropagation();
          });
        }
      };
    }
  ]).directive('slimScroll', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.slimScroll({
            height: attrs.scrollHeight || '100%',
            width: '100%'
          });
        }
      };
    }
  ]).directive('uiRangeSlider', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          return ele.slider();
        }
      };
    }
  ]).directive('validateEquals', [
    function() {
      return {
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModelCtrl) {
          var validateEqual;
          validateEqual = function(value) {
            var valid;
            valid = value === scope.$eval(attrs.validateEquals);
            ngModelCtrl.$setValidity('equal', valid);
            return typeof valid === "function" ? valid({
              value: void 0
            }) : void 0;
          };
          ngModelCtrl.$parsers.push(validateEqual);
          ngModelCtrl.$formatters.push(validateEqual);
          return scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue);
            }
          });
        }
      };
    }
  ]).directive('uiFileUpload', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          return ele.bootstrapFileInput();
        }
      };
    }
  ]).directive('uiSpinner', [
    function() {
      return {
        restrict: 'A',
        compile: function(ele, attrs) {
          ele.addClass('ui-spinner');
          return {
            post: function() {
              return ele.spinner();
            }
          };
        }
      };
    }
  ]).directive('goBack', [
    function() {
      return {
        restrict: "A",
        controller: [
          '$scope', '$element', '$window', function($scope, $element, $window) {
            return $element.on('click', function() {
              return $window.history.back();
            });
          }
        ]
      };
    }
  ]);

}).call(this);

;
(function() {
  'use strict';
  angular.module('app.localization', []).factory('localize', [
    '$http', '$rootScope', '$window', function($http, $rootScope, $window) {
      var localize;
      localize = {
        language: '',
        url: void 0,
        resourceFileLoaded: false,
        successCallback: function(data) {
          localize.dictionary = data;
          localize.resourceFileLoaded = true;
          return $rootScope.$broadcast('localizeResourcesUpdated');
        },
        setLanguage: function(value) {
          localize.language = value.toLowerCase().split("-")[0];
          return localize.initLocalizedResources();
        },
        setUrl: function(value) {
          localize.url = value;
          return localize.initLocalizedResources();
        },
        buildUrl: function() {
          if (!localize.language) {
            localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase();
            localize.language = localize.language.split("-")[0];
          }
          return 'i18n/resources-locale_' + localize.language + '.js';
        },
        initLocalizedResources: function() {
          var url;
          url = localize.url || localize.buildUrl();
          return $http({
            method: "GET",
            url: url,
            cache: false
          }).success(localize.successCallback).error(function() {
            return $rootScope.$broadcast('localizeResourcesUpdated');
          });
        },
        getLocalizedString: function(value) {
          var result, valueLowerCase;
          result = void 0;
          if (localize.dictionary && value) {
            valueLowerCase = value.toLowerCase();
            if (localize.dictionary[valueLowerCase] === '') {
              result = value;
            } else {
              result = localize.dictionary[valueLowerCase];
            }
          } else {
            result = value;
          }
          return result;
        }
      };
      return localize;
    }
  ]).directive('i18n', [
    'localize', function(localize) {
      var i18nDirective;
      i18nDirective = {
        restrict: "EA",
        updateText: function(ele, input, placeholder) {
          var result;
          result = void 0;
          if (input === 'i18n-placeholder') {
            result = localize.getLocalizedString(placeholder);
            return ele.attr('placeholder', result);
          } else if (input.length >= 1) {
            result = localize.getLocalizedString(input);
            return ele.text(result);
          }
        },
        link: function(scope, ele, attrs) {
          scope.$on('localizeResourcesUpdated', function() {
            return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder);
          });
          return attrs.$observe('i18n', function(value) {
            return i18nDirective.updateText(ele, value, attrs.placeholder);
          });
        }
      };
      return i18nDirective;
    }
  ]).controller('LangCtrl', [
    '$scope', 'localize', function($scope, localize) {
      $scope.lang = 'English';
      $scope.setLang = function(lang) {
        switch (lang) {
          case 'English':
            localize.setLanguage('EN-US');
            break;
          case 'Español':
            localize.setLanguage('ES-ES');
            break;
          case '日本語':
            localize.setLanguage('JA-JP');
            break;
          case '中文':
            localize.setLanguage('ZH-TW');
            break;
          case 'Deutsch':
            localize.setLanguage('DE-DE');
            break;
          case 'français':
            localize.setLanguage('FR-FR');
            break;
          case 'Italiano':
            localize.setLanguage('IT-IT');
            break;
          case 'Portugal':
            localize.setLanguage('PT-BR');
            break;
          case 'Русский язык':
            localize.setLanguage('RU-RU');
            break;
          case '한국어':
            localize.setLanguage('KO-KR');
        }
        return $scope.lang = lang;
      };
      return $scope.getFlag = function() {
        var lang;
        lang = $scope.lang;
        switch (lang) {
          case 'English':
            return 'flags-american';
          case 'Español':
            return 'flags-spain';
          case '日本語':
            return 'flags-japan';
          case '中文':
            return 'flags-china';
          case 'Deutsch':
            return 'flags-germany';
          case 'français':
            return 'flags-france';
          case 'Italiano':
            return 'flags-italy';
          case 'Portugal':
            return 'flags-portugal';
          case 'Русский язык':
            return 'flags-russia';
          case '한국어':
            return 'flags-korea';
        }
      };
    }
  ]);

}).call(this);

;
(function() {
  'use strict';
  angular.module('app.nav', []).directive('toggleNavCollapsedMin', [
    '$rootScope', function($rootScope) {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var app;
          app = $('#app');
          return ele.on('click', function(e) {
            if (app.hasClass('nav-collapsed-min')) {
              app.removeClass('nav-collapsed-min');
            } else {
              app.addClass('nav-collapsed-min');
              $rootScope.$broadcast('nav:reset');
            }
            return e.preventDefault();
          });
        }
      };
    }
  ]).directive('collapseNav', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
          $window = $(window);
          $lists = ele.find('ul').parent('li');
          $lists.append('<i class="fa fa-caret-down icon-has-ul-h"></i><i class="fa fa-caret-right icon-has-ul"></i>');
          $a = $lists.children('a');
          $listsRest = ele.children('li').not($lists);
          $aRest = $listsRest.children('a');
          $app = $('#app');
          $nav = $('#nav-container');
          $a.on('click', function(event) {
            var $parent, $this;
            if ($app.hasClass('nav-collapsed-min') || ($nav.hasClass('nav-horizontal') && $window.width() >= 768)) {
              return false;
            }
            $this = $(this);
            $parent = $this.parent('li');
            $lists.not($parent).removeClass('open').find('ul').slideUp();
            $parent.toggleClass('open').find('ul').slideToggle();
            return event.preventDefault();
          });
          $aRest.on('click', function(event) {
            return $lists.removeClass('open').find('ul').slideUp();
          });
          scope.$on('nav:reset', function(event) {
            return $lists.removeClass('open').find('ul').slideUp();
          });
          Timer = void 0;
          prevWidth = $window.width();
          updateClass = function() {
            var currentWidth;
            currentWidth = $window.width();
            if (currentWidth < 768) {
              $app.removeClass('nav-collapsed-min');
            }
            if (prevWidth < 768 && currentWidth >= 768 && $nav.hasClass('nav-horizontal')) {
              $lists.removeClass('open').find('ul').slideUp();
            }
            return prevWidth = currentWidth;
          };
          return $window.resize(function() {
            var t;
            clearTimeout(t);
            return t = setTimeout(updateClass, 300);
          });
        }
      };
    }
  ]).directive('highlightActive', [
    function() {
      return {
        restrict: "A",
        controller: [
          '$scope', '$element', '$attrs', '$location', function($scope, $element, $attrs, $location) {
            var highlightActive, links, path;
            links = $element.find('a');
            path = function() {
              return $location.path();
            };
            highlightActive = function(links, path) {
              path = '#' + path;
              return angular.forEach(links, function(link) {
                var $li, $link, href;
                $link = angular.element(link);
                $li = $link.parent('li');
                href = $link.attr('href');
                if ($li.hasClass('active')) {
                  $li.removeClass('active');
                }
                if (path.indexOf(href) === 0) {
                  return $li.addClass('active');
                }
              });
            };
            highlightActive(links, $location.path());
            return $scope.$watch(path, function(newVal, oldVal) {
              if (newVal === oldVal) {
                return;
              }
              return highlightActive(links, $location.path());
            });
          }
        ]
      };
    }
  ]).directive('toggleOffCanvas', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.on('click', function() {
            return $('#app').toggleClass('on-canvas');
          });
        }
      };
    }
  ]);

}).call(this);

;
(function() {
  angular.module('app.service', []).factory('toast', [
    function() {
      var logIt;
      toastr.options = {
        "closeButton": true,
        "positionClass": "toast-bottom-right",
        "timeOut": "3000"
      };
      logIt = function(message, type) {
        return toastr[type](message);
      };
      return {
        info: function(message) {
          logIt(message, 'info');
        },
        warning: function(message) {
          logIt(message, 'warning');
        },
        success: function(message) {
          logIt(message, 'success');
        },
        error: function(message) {
          logIt(message, 'error');
        }
      };
    }
  ]);

}).call(this);

;
(function() {
  angular.module('app.filters', []);

}).call(this);

;
(function() {
  'use strict';
  angular.module('app.task', []).factory('taskStorage', function() {
    var DEMO_TASKS, STORAGE_ID;
    STORAGE_ID = 'tasks';
    DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Build a snowman :)", "completed": false}, {"title": "Apply for monster university!", "completed": false}, {"title": "Play games with friends", "completed": true}, {"title": "Shopping", "completed": false} ]';
    return {
      get: function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
      },
      put: function(tasks) {
        return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
      }
    };
  }).directive('taskFocus', [
    '$timeout', function($timeout) {
      return {
        link: function(scope, ele, attrs) {
          return scope.$watch(attrs.taskFocus, function(newVal) {
            if (newVal) {
              return $timeout(function() {
                return ele[0].focus();
              }, 0, false);
            }
          });
        }
      };
    }
  ]).controller('taskCtrl', [
    '$scope', 'taskStorage', 'filterFilter', '$rootScope', 'logger', function($scope, taskStorage, filterFilter, $rootScope, logger) {
      var tasks;
      tasks = $scope.tasks = taskStorage.get();
      $scope.newTask = '';
      $scope.remainingCount = filterFilter(tasks, {
        completed: false
      }).length;
      $scope.editedTask = null;
      $scope.statusFilter = {
        completed: false
      };
      $scope.filter = function(filter) {
        switch (filter) {
          case 'all':
            return $scope.statusFilter = '';
          case 'active':
            return $scope.statusFilter = {
              completed: false
            };
          case 'completed':
            return $scope.statusFilter = {
              completed: true
            };
        }
      };
      $scope.add = function() {
        var newTask;
        newTask = $scope.newTask.trim();
        if (newTask.length === 0) {
          return;
        }
        tasks.push({
          title: newTask,
          completed: false
        });
        logger.logSuccess('New task: "' + newTask + '" added');
        taskStorage.put(tasks);
        $scope.newTask = '';
        return $scope.remainingCount++;
      };
      $scope.edit = function(task) {
        return $scope.editedTask = task;
      };
      $scope.doneEditing = function(task) {
        $scope.editedTask = null;
        task.title = task.title.trim();
        if (!task.title) {
          $scope.remove(task);
        } else {
          logger.log('Task updated');
        }
        return taskStorage.put(tasks);
      };
      $scope.remove = function(task) {
        var index;
        $scope.remainingCount -= task.completed ? 0 : 1;
        index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
        taskStorage.put(tasks);
        return logger.logError('Task removed');
      };
      $scope.completed = function(task) {
        $scope.remainingCount += task.completed ? -1 : 1;
        taskStorage.put(tasks);
        if (task.completed) {
          if ($scope.remainingCount > 0) {
            if ($scope.remainingCount === 1) {
              return logger.log('Almost there! Only ' + $scope.remainingCount + ' task left');
            } else {
              return logger.log('Good job! Only ' + $scope.remainingCount + ' tasks left');
            }
          } else {
            return logger.logSuccess('Congrats! All done :)');
          }
        }
      };
      $scope.clearCompleted = function() {
        $scope.tasks = tasks = tasks.filter(function(val) {
          return !val.completed;
        });
        return taskStorage.put(tasks);
      };
      $scope.markAll = function(completed) {
        tasks.forEach(function(task) {
          return task.completed = completed;
        });
        $scope.remainingCount = completed ? 0 : tasks.length;
        taskStorage.put(tasks);
        if (completed) {
          return logger.logSuccess('Congrats! All done :)');
        }
      };
      $scope.$watch('remainingCount == 0', function(val) {
        return $scope.allChecked = val;
      });
      return $scope.$watch('remainingCount', function(newVal, oldVal) {
        return $rootScope.$broadcast('taskRemaining:changed', newVal);
      });
    }
  ]);

}).call(this);

;

/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('book.controllers', ['book.service'])
    .controller('FeaturedBookCtrl',['$scope', 'writing', function($scope, writing){
        $scope.content = "<h4>Little Boat Big Ocean</h4>" +
                          "<strong>By: Alan Rush</strong> <hr>" +
                          "This is the true account of a young man's journey, sailing his 21 foot, wooden boat single-handed over 7,000 miles. Over a period of seven years, he set off from British Columbia in the spring of 1979 and sailed first to San Francisco, then the Hawaiian Islands and on to a remote Pacific coral atoll called Fanning Island. It was here that" +
                          "<hr>";

        // console.log(6 % 2)
    }])

    .directive("popoverHtmlUnsafePopup", function () {
        return {
            restrict: "EA",
            replace: true,
            scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" },
            templateUrl: "views/template/popover/popover-html-unsafe-popup.html"
        };
    })

    .directive("popoverHtmlUnsafe", [ "$tooltip", function ($tooltip) {
        return $tooltip("popoverHtmlUnsafe", "popover", "mouseenter");
    }])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('book.service', [])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('dashboard.controllers', ['dashboard.service'])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('dashboard.service', [])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('group.controllers', ['group.service'])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('group.service', [])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('member.controllers', ['member.service'])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('member.service', [])
;

/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('user.controllers', ['user.service'])
    .controller('UserProfileCtrl',['$scope', '$stateParams', function($scope, $stateParams){
        $scope.isMe = false;
        $scope.name = "";
        if($stateParams.name=="ikem-okonkwo"){
            $scope.isMe=true;
        }
        else
          $scope.name = $stateParams.name;
        // console.log(6 % 2)
    }])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('user.service', [])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('write.controllers', ['write.service'])
.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
})
    .controller('FeaturedWriteCtrl',['$scope', 'writing', function($scope, writing){
            $scope.featuredWrite = [{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"89",
            comments:"51"},{url:"images/g1.jpg",
                title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
                author:"Ikem Okonkwo",
                likes:"29",
                comments:"21"}];

       // console.log(6 % 2)
    }])
    .controller('PopularWriteCtrl',['$scope', 'writing', function($scope, writing){
        $scope.popularWrite = [{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"89",
            comments:"51"},{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"29",
            comments:"21"}];
    }])
    .controller('GenreWriteCtrl',['$scope', 'writing', function($scope, writing){
        $scope.genres = ['all',
            'action', 	'biography',
            'childrens', 	'drama',
            'erotica', 	'fan fiction',
            'fantasy', 	'fiction',
            'history', 	'horror',
            'humor', 	'literary',
            'memoir', 	'mystery',
            'non-fiction', 	'paranormal',
            'romance', 	'science fiction',
            'spiritual', 	'thriller',
            'young adult' 	];
        $scope.types = ['all',
            'articles', 	'flash fiction',
            'novels', 	'novellas',
            'poetry', 	'queries',
            'scripts', 	'short stories'];
        $scope.genreWrite = [{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"89",
            comments:"51"},{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"29",
            comments:"21"}];

        $scope.disabled = undefined;

        $scope.enable = function() {
            $scope.disabled = false;
        };

        $scope.disable = function() {
            $scope.disabled = true;
        };

        $scope.clear = function() {
            $scope.person.selected = undefined;
            $scope.address.selected = undefined;
            $scope.country.selected = undefined;
        };

        $scope.someGroupFn = function (item){

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

        };

        $scope.person = {};
        $scope.people = [
            { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
            { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
            { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
            { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
        ];
    }])
    .controller('TagWriteCtrl',['$scope', 'writing', function($scope, writing){
        $scope.tags = ['novel', 'short', 'comic', 'manga']
        $scope.tagWrite = [{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"89",
            comments:"51"},{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"29",
            comments:"21"}];
    }])
    .controller('SearchWriteCtrl',['$scope', 'writing', function($scope, writing){
        $scope.searchWrite = [{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"89",
            comments:"51"},{url:"images/g1.jpg",
            title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
            author:"Ikem Okonkwo",
            likes:"29",
            comments:"21"}];

        $scope.refreshWriteUps = function(search){
            $scope.writeUps = [{url:"images/g1.jpg",
                title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
                author:"Ikem Okonkwo",
                lico: "<ul class='list-inline list-unstyled'><li><i class='fa fa-comments bg-bright'></i></li> <li>21</li><li><i class='fa fa-thumbs-up'></i></li><li>24</li> </ul>",
                likes:"89",
                comments:"51"},{url:"images/g1.jpg",
                title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
                author:"Ikem Okonkwo",
                likes:"89",
                lico: "<ul class='list-inline list-unstyled'><li><i class='fa fa-comments bg-bright'></i></li> <li>21</li><li><i class='fa fa-thumbs-up'></i></li><li>24</li> </ul>",
                comments:"51"},{url:"images/g1.jpg",
                title:"Odio sit odit necessitatibusUllam, commodi, modi, impedit nostrum odio",
                author:"Ikem Okonkwo",
                likes:"89",
                lico: "<ul class='list-inline list-unstyled'><li><i class='fa fa-comments bg-bright'></i></li> <li>21</li><li><i class='fa fa-thumbs-up'></i></li><li>24</li> </ul>",
                comments:"51"}]
        }
    }])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('write.service', [])
.factory('writing', ['$http', function(data){

    }])
;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('news.controllers', ['news.service'])
    .controller('NewsListCtrl',['$scope', '$stateParams','$rootScope', 'allNews', function($scope, $stateParams, $rootScope, allNews){
        $scope.newsType = $stateParams.type;
        $scope.tags = [];
        $scope.news = [];
        $scope.currentNews = null;
        $scope.selectedTag = null;
        $scope.newsMeta = null;

        var getNews = function(page){
            allNews[$scope.newsType](page).then(function(result){
                console.log(result);
                $scope.news = result.data.posts;
                $scope.newsMeta = result.data.meta;
                $scope.currentNews = result.data.posts[1];
            }, function(err){
                console.log(err);
            });
        }

        var news = function(){
            if($scope.newsType == 'tags'){
                allNews.getTags().then(function(result){
                    $scope.tags = result.data;
                    console.log(result.data.tags);
                    allNews.tag = result.data.tags[4].slug;
                    $scope.selectedTag = result.data.tags[1].slug;

                }).then(function(data){
                        getNews(1)
                    })
            }
            else
                getNews(1);
        }

        if(allNews.token == null){
            allNews.authenticate().then(function(result){
                allNews.token = result.data;
                console.log(result);
            }).then(function(){
                    news();
            })
        }
        else {
            news();
        }

        $scope.newsClick = function(news){
            $scope.currentNews = news;
            allNews.currentNews =  news;
            console.log(news);
        }

        console.log($stateParams);
        $scope.title = "";
        if(!angular.isUndefined($stateParams.title)){
            var i = $stateParams.title.replace(/-/g, " ");
            $scope.title = i.toUpperCase();
        }
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                if(!angular.isUndefined(toParams.title)){
                    var i = toParams.title.replace(/-/g, " ");
                    $scope.title = i.toUpperCase();
                    $scope.newsType = toParams.type;
                }
               // str.replace(/blue/g, "red");
            })

    }])
     .controller('SingleNewsCtrl',['$scope', '$stateParams','$rootScope', 'allNews', function($scope, $stateParams, $rootScope, allNews){
        $scope.content = allNews.currentNews;
     }])

;
/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('news.service', [])
.factory('allNews',['$http', function($http) {
       var baseUrl = 'http://news-takada.azurewebsites.net/ghost/api/v0.1/';

        return {
            tag : null,

            limit : 5,

            token : null,

            currentNews : null,

            authenticate : function(){
                return $http.post(baseUrl + 'authentication/token',
                    'grant_type=password&username=dyoungikem@gmail.com&password=elivong619&client_id=ghost-admin',
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            },

            featured : function(page){
               // return $http.json(baseUrl + 'posts/?featured=true&page=' + page + '&limit=' + this.limit);
                return $http.get(baseUrl + 'posts/?featured=true&page=' + page + '&limit=' + this.limit,
                    {headers: {'Authorization': 'Bearer ' + this.token.access_token}});
            },

            latest : function(page){
                return $http.get(baseUrl + 'posts/?page=' + page + '&limit=' + this.limit,
                    {headers: {'Authorization': 'Bearer ' + this.token.access_token}});
            },

            tags : function(page){
                return $http.get(baseUrl + 'posts/?page=' + page + '&limit=' + this.limit + '&tag=' + this.tag,
                    {headers: {'Authorization': 'Bearer ' + this.token.access_token}});
            },

            getTags : function(){
                return $http.get(baseUrl + 'tags/', {headers: {'Authorization': 'Bearer ' + this.token.access_token}});

            }
        }

    }])