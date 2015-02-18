angular.module('Daas.main.home', [])

.controller('HomeController', function($scope, $state, Auth, $http){
  $scope.next = function(){
    $state.go('signup');
  };

});
