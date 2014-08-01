/**
 * Created by DEYOUNG on 27/07/14.
 */
angular.module('news.controllers', ['news.service'])
    .controller('NewsListCtrl',['$scope', '$stateParams','$rootScope', function($scope, $stateParams, $rootScope){
        $scope.newsType = $stateParams.type;
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
                }
               // str.replace(/blue/g, "red");
            })

        // console.log(6 % 2)
    }])