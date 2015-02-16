angular.module('Daas.home', [])

.controller('HomeController', function($scope, $state, Auth, $http){
  $scope.next = function(){
    $state.go('signup');
  };
  var data = {username: 'yeah', password: 'ye'};
  $scope.test = function(){
    $http({
      method: 'POST',
      url: 'http://localhost:4500/login',
      data: data
    }).then(function(resp){
      console.log(resp);
    }).catch(function(err){
      console.log('Your ', err);
    })
  }
});
