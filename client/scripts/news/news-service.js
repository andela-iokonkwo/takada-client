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