'use strict';

/* Controllers */

bwApp.controller('LandingController',
    ['$scope', 'ENV', '$http', '$route', '$routeParams', '$location',
    function ($scope, ENV, $http, $route, $routeParams, $location) {

    	console.log("inside LandingController");

        $scope.landing = {
            config:{
                showLoadingWheel:false,
                views:{
                    showTableView : false,
                    showGridView : true
                },
                data:{
                    githubObj:[]
                }
            },
            init:function () {

                this.config.showLoadingWheel = true;
                //initializing Landing page
                var apiUrl = "https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc&per_page=100";


                //fetching data from github apis
                $http.get(apiUrl)
                    .success(function (data) {
                        console.log(data);
                        $scope.landing.config.data.githubObj = data.items;
                        $scope.landing.config.showLoadingWheel = false;

                    })
                    .error(function (data) {
                        console.log(data);
                    })
                
            },
            changeView: function (view) {
                angular.forEach(this.config.views, function(val, key){
                    if(view == key){
                        $scope.landing.config.views[key] = true;
                    }else{
                        $scope.landing.config.views[key] = false;
                    }
                });
                
                console.log($scope.landing.config.views);
            },
            getTopContributor: function(apiUrl, index){
                console.log('get contributor called');
                if(!apiUrl){return;}

                //fetching data from github apis
                $http.get(apiUrl)
                    .success(function (data) {
                        //window.open(data[0].html_url);

                       window.location.href = data[0].html_url;

                    })
                    .error(function (data) {
                        console.log(data);
                    })
            },
            openLinkInNewTab : function(url) {
                var a = document.createElement("a");
                a.target = "_blank";
                a.href = url;
                a.click();
            }
        };



}]);
