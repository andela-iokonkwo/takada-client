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