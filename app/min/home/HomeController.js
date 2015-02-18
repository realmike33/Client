angular.module('Daas.home', [])

.controller('HomeController', ["$scope", "$state", "Auth", function($scope, $state, Auth){
  $scope.next = function(){
    $state.go('signup');
  };
}]);
