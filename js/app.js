var jobs=angular.module('jobs',['ngRoute','ngResource']);



jobs.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: '/pages/home.html',
        controller: 'jobsController'
    })
    .when('/home', {
        templateUrl: '/pages/home.html',
        controller: 'jobsController'
    })
    
    .when('/results', {
        templateUrl: '/pages/results.html',
        controller: 'jobsController'
    })
    
});

  /*  var jobResult = null;
   
    */

    var chinni=[];
    

jobs.controller('jobsController', ['$scope', '$http', '$location', '$resource', '$routeParams', '$log', '$rootScope',
    function($scope, $http,$location, $resource, $routeParams, $log, $rootScope) {
	$scope.place='';
	$scope.designation = ''
	$scope.sorter= '0';
	$scope.result=null;
    $scope.jobResult=null;
    
    $scope.fin=null; 

      
     $scope.submit = function() {
         console.log("submitted");
    	$http({
            method: 'GET',
            url: 'https://indreed.herokuapp.com/api/jobs/?l='+ $scope.place+'&q='+$scope.designation
         }).then(function (response){
             $scope.jobResult=response.data;
             $scope.sorter= '0';
             chinni=response.data;
             console.log($scope.sorter+"Hii"+chinni.length);
             if(chinni.length>0){$scope.sorter='1';}
             else{$scope.sorter='0';}
        	 
 
        	 /*$on('MyEvent');
        	  $location.path("/results");*/
             /*chinni=response.data;
             console.log($scope.jobResult);$scope.sorter= '1';
             $scope.disp($scope.sorter);*/
        	
        	 
         })
        };  
/*        
    $scope.$on('MyEvent', function() {
    $scope.jobResult=chinni;
  });
*/         
   /* $scope.disp=function(sorter){ alert( $scope.jobResult); $scope.fin= chinni; $scope.sorter=sorter;  
    }
*/
}]);




jobs.directive("display", function() {
   return {
       restrict: 'ACE',
       templateUrl: '/pages/display.html',
       replace: true,
       scope: {
          /* weatherDay: "=",
           w: "&",
           w: "&",*/
           j: "=j"
       }
   }
});

