angular.module('Daas.home', [])

.controller('HomeController', function($scope, $state, Auth){
  $scope.next = function(){
    $state.go('signup');
  };
});
