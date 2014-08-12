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
