angular.module('Daas.home', [])

.controller('HomeController', function($scope, $state, Auth, $http){
  $scope.next = function(){
    $state.go('signup');
  };

});
