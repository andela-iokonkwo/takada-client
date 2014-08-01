
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