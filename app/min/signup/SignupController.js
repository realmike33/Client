angular.module('Daas.signup', [])

.controller('SignupController', ["$scope", "$state", "Auth", function($scope, $state, Auth){
  $scope.register = function(){
  	if($scope.username && $scope.password){
  	 var obj = {};
     obj.username = $scope.username;
     obj.password = $scope.password;
     console.log(obj);
    }else{
      console.log('fucked');
    }
  }
}]);