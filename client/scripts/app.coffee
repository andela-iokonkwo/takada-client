'use strict';

angular.module('app', [
    # Angular modules
    'ngAnimate'
    'ui.router'

    # 3rd Party Modules
    'angularSmoothscroll'
    'ui.bootstrap'
    'textAngular'
    'ngTagsInput'
    'angular-intro'
    'ngSanitize'
    'ui.select'

    # Custom modules

    'app.controllers'
    'app.directives'
    'app.filters'
    'app.localization'
    'app.nav'
    'app.service'
    'app.task'

    'book.controllers'
    'dashboard.controllers'
    'group.controllers'
    'member.controllers'
    'user.controllers'
    'write.controllers'
    'news.controllers'
])
    
.config([
    '$stateProvider', '$urlRouterProvider'
    ($stateProvider, $urlRouterProvider) ->


       $stateProvider
          .state('landing',{url : '',templateUrl : 'views/landing.html'})
          .state('404',{url : '/404',templateUrl : 'views/error/404.html'})
          .state('login',{url : '/login',templateUrl : 'views/user/signin.html'})
          .state('lock',{url : '/lock',templateUrl : 'views/user/lock-screen.html'})
          .state('forget',{url : '/forgot-password',templateUrl : 'views/user/forgot-password.html'})
          .state('signup',{url : '/sign-up',templateUrl : 'views/user/signup.html'})
          .state('a',{abstract : true ,templateUrl : 'views/account.html'})
          .state('a.prodit', {abstract:true,templateUrl : 'views/user/edit-profile.html'})
          .state('a.prodit.basic', {url : 'account/profile',templateUrl : 'views/user/basic.html'})
          .state('a.prodit.more', {url : 'account/profile',templateUrl : 'views/user/more.html'})
          .state('a.prodit.pics', {url : 'account/profile',templateUrl : 'views/user/picture.html'})
          .state('a.dashboard',{abstract : true ,templateUrl : 'views/dashboard/home.html'})
          .state('a.dashboard.all', {url : '/dashboard',templateUrl : 'views/dashboard/all-activity.html'})
          .state('a.dashboard.me', {url : '/dashboard',templateUrl : 'views/dashboard/me-activity.html'})
          .state('a.dashboard.group', {url : '/dashboard',templateUrl : 'views/dashboard/group-activity.html'})
          .state('a.dashboard.book', {url : '/dashboard',templateUrl : 'views/dashboard/book-activity.html'})
          .state('a.book', {url : '/books', abstract : true, templateUrl : 'views/book/home.html'})
          .state('a.book.featured', {url : '/featured', templateUrl : 'views/book/featured.html'})
          .state('a.book.popular', {url : '/popular',  templateUrl : 'views/book/popular.html'})
          .state('a.book.genre', {url : '/genre',  templateUrl : 'views/book/genre.html'})
          .state('a.book.search', {url : '/search',  templateUrl : 'views/book/search.html'})
          .state('a.book.series', {url : '/series-list', templateUrl : 'views/book/series.html'})
          .state('a.new-book', {url : '/books/new', templateUrl : 'views/book/new.html'})
          .state('a.book.tags', {url : '/tags',  templateUrl : 'views/book/tags.html'})
          .state('a.single-book', {url : '/books/{name}',abstract : true, templateUrl : 'views/book/single.html'})
          .state('a.single-book.home', {url : '/home', templateUrl : 'views/book/single-home.html'})
          .state('a.single-book.discussion', {url : '/discussions', templateUrl : 'views/book/single-discussion.html'})
          .state('a.single-book.people', {url : '/people', templateUrl : 'views/book/single-people.html'})
          .state('a.writing', {url : '/write-ups', abstract : true, templateUrl : 'views/write-up/home.html'})
          .state('a.new-writing', {url : '/write-ups/new', templateUrl : 'views/write-up/new.html'})
          .state('a.writing.popular', {url : '/popular',  templateUrl : 'views/write-up/popular.html'})
          .state('a.writing.featured', {url : '/featured',  templateUrl : 'views/write-up/featured.html'})
          .state('a.writing.search', {url : '/search',  templateUrl : 'views/write-up/search.html'})
          .state('a.writing.genre', {url : '/genre', templateUrl : 'views/write-up/genre.html'})
          .state('a.writing.tags', {url : '/tags',  templateUrl : 'views/write-up/tags.html'})
          .state('a.single-writing', {url : '/write-ups/{name}', templateUrl : 'views/write-up/single.html'})
          .state('a.group', {url : '/groups', abstract : true, templateUrl : 'views/group/home.html'})
          .state('a.new-group', {url : '/groups/new', templateUrl : 'views/group/new.html'})
          .state('a.group.popular', {url : '/popular',  templateUrl : 'views/group/popular.html'})
          .state('a.group.newest', {url : '/newest',  templateUrl : 'views/group/newest.html'})
          .state('a.group.search', {url : '/search',  templateUrl : 'views/group/search.html'})
          .state('a.group.genre', {url : '/genre', templateUrl : 'views/group/genre.html'})
          .state('a.group.tags', {url : '/tags',  templateUrl : 'views/group/tags.html'})
          .state('a.single-group', {url : '/groups/{name}' ,abstract : true,  templateUrl : 'views/group/single.html'})
          .state('a.single-group.discussion', {url : '/discussions',  templateUrl : 'views/group/single-discussions.html'})
          .state('a.single-group.activity', {url : '/activity',  templateUrl : 'views/group/single-activity.html'})
          .state('a.single-group.members', {url : '/members',  templateUrl : 'views/group/single-members.html'})
          .state('a.member', {url : '/members', abstract : true, templateUrl : 'views/member/home.html'})
          .state('a.member.active', {url : '/most-active',  templateUrl : 'views/member/most-active.html'})
          .state('a.member.newest', {url : '/newest',  templateUrl : 'views/member/newest.html'})
          .state('a.member.search', {url : '/search',  templateUrl : 'views/member/search.html'})
          .state('a.single-member', {url : '/members/{name}', templateUrl : 'views/member/single.html'})
          .state('a.news-type', {url : '/news/{type:(?:featured|latest|tags)}', templateUrl : 'views/news/list.html'})
          .state('a.news-type.single', {url : '/{title}', templateUrl : 'views/news/single.html'})



       $urlRouterProvider.when('/books/:name','/books/:name/home')
       $urlRouterProvider.when('/groups/:name','/groups/:name/activity')
       $urlRouterProvider.otherwise('/404')

])
