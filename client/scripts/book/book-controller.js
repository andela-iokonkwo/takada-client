
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